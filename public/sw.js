const CACHE_NAME = 'prog2sec-offline-v5';

// Essential static resources to cache for offline PWA app shell
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/favicon.png',
  '/favicon.ico'
];

// 1. SW Install Event: Precache core assets resiliently using Promise.allSettled
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Use Promise.allSettled so a single failure never breaks the SW installation
      await Promise.allSettled(
        CORE_ASSETS.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'reload' });
            if (response && response.status === 200) {
              await cache.put(url, response);
            }
          } catch (err) {
            console.warn('[SW] Precache warning for:', url, err);
          }
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// 2. SW Activate Event: Clean up old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 3. SW Fetch Event: Intercept network requests for full offline capability
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never cache the worker script or Next.js chunks. Serving an old chunk can
  // combine incompatible module graphs after a deployment.
  if (url.pathname === '/sw.js' || url.pathname.startsWith('/_next/')) {
    return;
  }

  // Skip analytics & telemetry requests
  if (url.hostname.includes('vercel-analytics') || url.hostname.includes('analytics')) {
    return;
  }

  // A. PDF Download Handling: Network-First strategy so PDF updates are immediately fetched
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // B. Navigation Mode (Opening app, navigating pages, PWA launch from home screen)
  if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
              cache.put('/', responseClone.clone());
              cache.put('/index.html', responseClone.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Device is offline! Find best cached HTML app shell
          // 1) Match exact request URL (ignoring query parameters like ?utm_source=homescreen)
          const exactMatch = await caches.match(event.request, { ignoreSearch: true });
          if (exactMatch) return exactMatch;

          // 2) Fallback to cached root '/'
          const rootMatch = await caches.match('/');
          if (rootMatch) return rootMatch;

          // 3) Fallback to cached '/index.html'
          const indexMatch = await caches.match('/index.html');
          if (indexMatch) return indexMatch;

          // 4) Fallback to any cached HTML page in the cache
          const cache = await caches.open(CACHE_NAME);
          const keys = await cache.keys();
          for (const key of keys) {
            if (key.url.endsWith('/') || key.url.endsWith('.html')) {
              const res = await cache.match(key);
              if (res) return res;
            }
          }

          // 5) Clean Arabic fallback HTML if nothing was cached yet
          return new Response(
            `<!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>أوفلاين — منصة البرمجة 2ث</title>
              <style>
                body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: white; text-align: center; padding: 2rem; margin: 0; }
                .card { background: #1e293b; padding: 2rem; border-radius: 1.5rem; max-width: 420px; margin: 3rem auto; border: 1px solid #334155; shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
                h1 { font-size: 1.3rem; color: #f59e0b; margin-bottom: 1rem; }
                p { color: #94a3b8; font-size: 0.95rem; line-height: 1.7; }
                button { background: linear-gradient(to right, #06b6d4, #2563eb); color: white; border: none; padding: 0.85rem 1.75rem; border-radius: 0.75rem; font-weight: bold; cursor: pointer; margin-top: 1.5rem; font-size: 0.9rem; }
              </style>
            </head>
            <body>
              <div class="card">
                <h1>📡 يعمل التطبيق حالياً بدون إنترنت</h1>
                <p>يرجى فتح التطبيق مرة واحدة عند الاتصال بالإنترنت ليتم حفظ جميع المحاكيات والدروس كاملاً على جهازك.</p>
                <button onclick="window.location.reload()">إعادة المحاولة 🔄</button>
              </div>
            </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // C. Static assets: cache-first with background revalidation.
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset immediately for instant load
        // Revalidate in background if online to keep assets updated
        if (self.navigator.onLine) {
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
              }
            })
            .catch(() => {/* Ignore background revalidation failure offline */});
        }
        return cachedResponse;
      }

      // If asset is not in cache, fetch from network and store in cache for future offline use
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return new Response('', { status: 503, statusText: 'Offline Asset Unavailable' });
        });
    })
  );
});
