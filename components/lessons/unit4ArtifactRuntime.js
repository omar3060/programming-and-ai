import { lessonQuizData as unit4QuizData, unit4ExamQuestions } from '@/data/unit4ExamQuestions';
import confetti from 'canvas-confetti';

export function mountUnit4ArtifactRuntime(playSfxBridge, navigateToBridge, viewId) {
// Audio Synthesizer State
        let audioCtx = null;
        let soundEnabled = true;

        function getAudioContext() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }

        function toggleSound() {
            soundEnabled = !soundEnabled;
            const icon = document.getElementById('sound-icon');
            if (soundEnabled) {
                icon.className = 'fa-solid fa-volume-high text-emerald-400';
                playSfx('click');
            } else {
                icon.className = 'fa-solid fa-volume-xmark text-slate-500';
            }
        }

        function playSfx(type) {
            if (!soundEnabled) return;
            try {
                const ctx = getAudioContext();
                if (!ctx) return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                const now = ctx.currentTime;

                if (type === 'click') {
                    osc.frequency.setValueAtTime(440, now);
                    gain.gain.setValueAtTime(0.04, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                    osc.start(now); osc.stop(now + 0.05);
                } else if (type === 'success') {
                    osc.frequency.setValueAtTime(523.25, now);
                    osc.frequency.setValueAtTime(659.25, now + 0.08);
                    gain.gain.setValueAtTime(0.06, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                    osc.start(now); osc.stop(now + 0.25);
                } else if (type === 'error') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(220, now);
                    osc.frequency.setValueAtTime(160, now + 0.1);
                    gain.gain.setValueAtTime(0.06, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                    osc.start(now); osc.stop(now + 0.25);
                }
            } catch (e) { }
        }

        // Language & Theme Handlers
        function toggleLanguage() {
            playSfx('click');
            const html = document.documentElement;
            const current = html.getAttribute('lang');
            if (current === 'ar') {
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                document.getElementById('lang-btn-text').innerText = 'العربية';
            } else {
                html.setAttribute('lang', 'ar');
                html.setAttribute('dir', 'rtl');
                document.getElementById('lang-btn-text').innerText = 'English';
            }
            updateMediaSimDisplay();
            renderCrapStudio();
            updateAnalyticsDashboard();
            runAbExperiment(currentAbMode, true);
        }

        function toggleTheme() {
            playSfx('click');
            const html = document.documentElement;
            const isDark = html.classList.toggle('dark');
            html.classList.toggle('light', !isDark);
            const icon = document.getElementById('theme-icon');
            if (isDark) {
                icon.className = 'fa-solid fa-moon text-amber-400';
            } else {
                icon.className = 'fa-solid fa-sun text-amber-500';
            }
        }

        function toggleSidebar() {
            playSfx('click');
            const sidebar = document.getElementById('app-sidebar');
            const backdrop = document.getElementById('sidebar-backdrop');
            sidebar.classList.toggle('open');
            backdrop.classList.toggle('hidden');
        }

        function toggleUnit(unitId) {
            playSfx('click');
            const items = document.getElementById(unitId + '-items');
            const icon = document.getElementById(unitId + '-icon');
            if (items) {
                const isHidden = items.classList.toggle('hidden');
                if (icon) icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        }

        function toggleCard(id) {
            playSfx('click');
            const card = document.getElementById(id);
            if (card) {
                card.classList.toggle('hidden');
            }
        }

        function navigateTo(viewId) {
            playSfx('click');
            document.querySelectorAll('.lesson-view').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById('view-' + viewId);
            if (target) target.classList.remove('hidden');

            document.querySelectorAll('.nav-lesson-btn').forEach(btn => btn.classList.remove('active-nav'));
            const activeBtn = document.getElementById('nav-btn-' + viewId);
            if (activeBtn) activeBtn.classList.add('active-nav');

            const sidebar = document.getElementById('app-sidebar');
            const backdrop = document.getElementById('sidebar-backdrop');
            if (sidebar) sidebar.classList.remove('open');
            if (backdrop) backdrop.classList.add('hidden');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function filterLessons(q) {
            const query = q.trim().toLowerCase();
            document.querySelectorAll('.nav-lesson-btn').forEach(btn => {
                const text = btn.innerText.toLowerCase();
                if (text.includes(query)) btn.classList.remove('hidden');
                else btn.classList.add('hidden');
            });
        }

        function openPrintModal() {
            playSfx('click');
            document.getElementById('print-modal').classList.remove('hidden');
        }
        function closePrintModal() {
            playSfx('click');
            document.getElementById('print-modal').classList.add('hidden');
        }

        // ============================================================
        // SIMULATOR 1: MEDIA MIX & AUDIENCE STRATEGIST (LESSON 4-1)
        // ============================================================
        let currentMediaScen = 'library';
        let activeMediaChannels = { tv: false, print: true, web: true, sns: true, email: false };

        const mediaScenarioData = {
            library: {
                titleAr: "سيناريو المكتبة العامة: الإعلان عن برنامج قراءة مجاني جديد (ص 72)",
                titleEn: "Public Library Scenario: Free Reading Program Announcement (p. 78)",
                descAr: "الجمهور المستهدف يشمل: طلاباً متصلين بالإنترنت، وعائلات في الحي ليس لديها اتصال إنترنت منزلي.",
                descEn: "Target audience: connected students AND local families with no home Internet connection.",
                recommended: { tv: false, print: true, web: true, sns: true, email: false }
            },
            hospital: {
                titleAr: "سيناريو المستشفى: إبلاغ المرضى بمواعيد العمل الجديدة واستقبال أسئلتهم (ص 72)",
                titleEn: "Hospital Scenario: New Opening Hours & Patient Q&A (p. 79)",
                descAr: "الغرض: إعلام عدد كبير بسرعة فائقة + إتاحة تفاعل ثنائي الاتجاه لطرح الأسئلة والاطلاع على الجدول التفصيلي.",
                descEn: "Purpose: Reach many people quickly + enable two-way interaction for questions and full schedules.",
                recommended: { tv: true, print: false, web: true, sns: true, email: false }
            },
            product: {
                titleAr: "سيناريو إطلاق منتج جديد: انتشار واسع + مواصفات تفصيلية + ترويج للعملاء الحاليين (ص 71)",
                titleEn: "New Product Launch: Wide Reach + Full Specs + Existing Customers (p. 78)",
                descAr: "الغرض: الجمع بين الانتشار الجماهيري، التناقل الشفهي، عرض المواصفات الكاملة، ومخاطبة العملاء الحاليين فردياً.",
                descEn: "Purpose: Combine mass video reach, word-of-mouth sharing, full technical specs, and direct customer emails.",
                recommended: { tv: true, print: false, web: true, sns: true, email: true }
            }
        };

        function runMediaScenario(scenKey) {
            playSfx('click');
            currentMediaScen = scenKey;
            const rec = mediaScenarioData[scenKey].recommended;
            activeMediaChannels = { ...rec };
            updateMediaSimDisplay();
        }

        function toggleMediaChannel(ch) {
            playSfx('click');
            activeMediaChannels[ch] = !activeMediaChannels[ch];
            updateMediaSimDisplay();
        }

        function updateMediaSimDisplay() {
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const scen = mediaScenarioData[currentMediaScen];
            document.getElementById('media-scen-title').innerText = isAr ? scen.titleAr : scen.titleEn;
            document.getElementById('media-scen-desc').innerText = isAr ? scen.descAr : scen.descEn;

            const colors = { tv: 'blue', print: 'amber', web: 'emerald', sns: 'pink', email: 'purple' };
            Object.keys(activeMediaChannels).forEach(ch => {
                const btn = document.getElementById('med-btn-' + ch);
                if (!btn) return;
                const c = colors[ch];
                if (activeMediaChannels[ch]) {
                    btn.className = `p-3.5 rounded-2xl bg-slate-900 border-2 border-${c}-500 text-start space-y-1.5 shadow-lg transition`;
                } else {
                    btn.className = "p-3.5 rounded-2xl bg-slate-950 border border-slate-800 opacity-50 text-start space-y-1.5 transition";
                }
            });

            const count = Object.values(activeMediaChannels).filter(Boolean).length;
            const analysisEl = document.getElementById('media-sim-analysis');
            const badgeEl = document.getElementById('media-score-badge');

            if (count === 0) {
                badgeEl.innerText = isAr ? "كفاءة المزيج: 0%" : "Mix Efficiency: 0%";
                badgeEl.className = "px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-mono text-xs font-bold shrink-0";
                analysisEl.innerHTML = `<span class="text-rose-400 font-bold">⚠️ ${isAr ? 'لم تختر أي وسيلة إعلامية! اختر وسيلة أو أكثر من البطاقات أعلاه لتحليل الحملة.' : 'No media selected! Click one or more media cards above to analyze your campaign.'}</span>`;
                return;
            }

            let notesAr = [];
            let notesEn = [];
            let score = 60;

            if (activeMediaChannels.web) {
                score += 15;
                notesAr.push("✅ <strong>الموقع الإلكتروني (Website):</strong> يوفر معلومات تفصيلية غير محدودة الحجم على مدار الساعة ويتيح التسجيل عبر النماذج (ثنائي الاتجاه).");
                notesEn.push("✅ <strong>Website:</strong> Provides unlimited detailed specifications 24/7 and two-way registration forms.");
            } else {
                notesAr.push("⚠️ <strong>غياب الموقع الإلكتروني:</strong> يفقد الجمهور مرجعاً تفصيلياً دائماً للمواصفات أو الجداول الكاملة.");
                notesEn.push("⚠️ <strong>Missing Website:</strong> Audience lacks a permanent hub for detailed information and forms.");
            }

            if (activeMediaChannels.sns) {
                score += 15;
                notesAr.push("✅ <strong>وسائل التواصل (SNS):</strong> تحقق انتشاراً سريعاً عبر التناقل الشفهي (Word of mouth) وتفاعل الجمهور ثنائي الاتجاه.");
                notesEn.push("✅ <strong>SNS:</strong> Drives rapid word-of-mouth sharing and two-way engagement.");
            }

            if (currentMediaScen === 'library' && !activeMediaChannels.print) {
                score -= 25;
                notesAr.push("🚨 <strong>فجوة حرجة في الجمهور:</strong> العائلات التي ليس لديها اتصال بالإنترنت لن يصلها الموقع ولا SNS! فعّل (صحيفة / ملصق مطبوع) للوصول إليهم.");
                notesEn.push("🚨 <strong>Critical Audience Gap:</strong> Families without home Internet will miss Website & SNS! Enable Print/Posters to reach them.");
            } else if (activeMediaChannels.print) {
                score += 10;
                notesAr.push("✅ <strong>المطبوعات الورقية:</strong> تبقى موجودة مادياً وتصل للعائلات غير المتصلة بالإنترنت.");
                notesEn.push("✅ <strong>Printed Media:</strong> Remains physically available without requiring an Internet connection.");
            }

            if (activeMediaChannels.tv) {
                score += 5;
                notesAr.push("📺 <strong>التلفزيون / الراديو:</strong> يحقق انتشاراً جماهيرياً واسعاً في وقت واحد (أحادي الاتجاه) ويوجه الناس للموقع.");
                notesEn.push("📺 <strong>TV / Radio:</strong> Achieves wide simultaneous reach (one-way) directing viewers to the website.");
            }

            if (activeMediaChannels.email) {
                score += 5;
                notesAr.push("✉️ <strong>البريد الإلكتروني:</strong> يوصل الرسائل والحملات الترويجية مباشرة وبشكل فردي لأشخاص محددين.");
                notesEn.push("✉️ <strong>Email / Direct Msg:</strong> Delivers personalized campaign info directly to specific individuals.");
            }

            score = Math.min(100, Math.max(20, score));
            badgeEl.innerText = isAr ? `كفاءة المزيج: ${score}%` : `Mix Efficiency: ${score}%`;
            badgeEl.className = score >= 85
                ? "px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold shrink-0"
                : "px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs font-bold shrink-0";

            analysisEl.innerHTML = (isAr ? notesAr : notesEn).map(n => `<div>${n}</div>`).join('');
        }

        // ============================================================
        // SIMULATOR 2: WIREFRAME & CRAP PRINCIPLES STUDIO (LESSON 4-2)
        // ============================================================
        let currentDesignMode = 'visual';
        let crapState = { C: true, R: true, A: true, P: true };

        function setDesignMode(mode) {
            playSfx('click');
            currentDesignMode = mode;
            document.getElementById('btn-mode-wireframe').className = mode === 'wireframe'
                ? "px-3 py-1.5 rounded-xl bg-cyan-600 text-white text-xs font-bold transition"
                : "px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition";
            document.getElementById('btn-mode-visual').className = mode === 'visual'
                ? "px-3 py-1.5 rounded-xl bg-cyan-600 text-white text-xs font-bold transition"
                : "px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition";
            renderCrapStudio();
        }

        function toggleCrapPrinciple(p) {
            playSfx('click');
            currentDesignMode = 'visual';
            setDesignMode('visual');
            crapState[p] = !crapState[p];
            const btn = document.getElementById('btn-crap-' + p);
            const names = {
                C: { ar: '1. التباين (Contrast)', en: '1. Contrast', color: 'amber' },
                R: { ar: '2. التكرار (Repetition)', en: '2. Repetition', color: 'blue' },
                A: { ar: '3. المحاذاة (Alignment)', en: '3. Alignment', color: 'emerald' },
                P: { ar: '4. التقارب (Proximity)', en: '4. Proximity', color: 'purple' }
            };
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const info = names[p];
            if (crapState[p]) {
                btn.className = `px-3.5 py-2 rounded-xl bg-${info.color}-600 text-white transition flex items-center gap-1.5`;
                btn.querySelector('span').innerText = `${isAr ? info.ar : info.en} ✅`;
            } else {
                btn.className = "px-3.5 py-2 rounded-xl bg-slate-800 text-slate-400 transition flex items-center gap-1.5";
                btn.querySelector('span').innerText = `${isAr ? info.ar : info.en} ❌`;
            }
            renderCrapStudio();
        }

        function renderCrapStudio() {
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const box = document.getElementById('crap-preview-box');
            const statusLabel = document.getElementById('crap-status-label');
            const noteBox = document.getElementById('crap-diagnostic-note');

            if (currentDesignMode === 'wireframe') {
                statusLabel.innerText = isAr ? "وضع المخطط الهيكلي (بدون ألوان أو زخارف)" : "Wireframe Blueprint Mode (No Colors/Decorations)";
                box.innerHTML = `
                    <div class="border-2 border-dashed border-slate-600 p-4 rounded-xl space-y-3 font-mono text-xs text-slate-300 bg-slate-950">
                        <div class="border border-slate-700 p-3 rounded bg-slate-900 flex justify-between items-center">
                            <span>[HEADER: شعار واسم العيادة المجتمعية]</span>
                            <span>[NAV: الرئيسية | الساعات | الخريطة]</span>
                        </div>
                        <div class="border-2 border-slate-500 p-4 rounded bg-slate-900 text-center">
                            <strong class="block text-white">[أولوية 1 — HERO BLOCK: ساعات العمل اليوم وأرقام الطوارئ]</strong>
                            <span class="text-[11px] text-slate-400">مفتوح من 8:00 ص حتى 10:00 م • [زر: احجز موعداً الآن]</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="border border-slate-700 p-3 rounded bg-slate-900">[أولوية 2 — BLOCK: الخدمات الطبية والعيادات]</div>
                            <div class="border border-slate-700 p-3 rounded bg-slate-900">[أولوية 3 — BLOCK: العنوان والاتجاهات والخريطة]</div>
                        </div>
                    </div>
                `;
                noteBox.innerHTML = isAr
                    ? "📐 <strong>المخطط الهيكلي (Wireframe):</strong> يحدد مكان وأولوية المعلومات فقط دون ألوان أو خطوط، ليتمكن أصحاب المصلحة من الاتفاق على الهيكل قبل الانشغال بالتفضيلات الجمالية."
                    : "📐 <strong>Wireframe Blueprint:</strong> Fixes information placement and priority without colors or fonts so stakeholders agree on structure first.";
                return;
            }

            const activeCount = Object.values(crapState).filter(Boolean).length;
            statusLabel.innerText = isAr ? `${activeCount} / 4 مبادئ CRAP مفعلة` : `${activeCount} / 4 CRAP Principles Active`;

            const titleClass = crapState.C ? "text-xl font-black text-white" : "text-xs font-normal text-slate-500";
            const btnClass = crapState.C ? "px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-black text-xs shadow-lg" : "px-2 py-1 rounded bg-slate-800 text-slate-500 text-xs";
            const alignClass = crapState.A ? "text-start" : "text-center rtl:pr-12 ltr:pl-12";
            const cardGap = crapState.P ? "gap-4 p-4" : "gap-0 p-1";
            const headingStyle1 = "text-sm font-bold text-cyan-400";
            const headingStyle2 = crapState.R ? "text-sm font-bold text-cyan-400" : "text-lg font-serif italic text-pink-400 underline";

            box.innerHTML = `
                <div class="space-y-4 ${alignClass}">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                        <div>
                            <h4 class="${titleClass}">${isAr ? 'العيادة الطبية المجتمعية — ساعات العمل والحجز' : 'Community Medical Clinic — Hours & Booking'}</h4>
                            <p class="text-xs text-sub mt-0.5">${isAr ? 'نستقبل المرضى يومياً من الساعة 8:00 صباحاً حتى 10:00 مساءً' : 'Open daily from 8:00 AM to 10:00 PM'}</p>
                        </div>
                        <button class="${btnClass}">${isAr ? 'احجز موعدك الآن' : 'Book Appointment'}</button>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 ${cardGap}">
                        <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                            <div class="${headingStyle1}">🩺 ${isAr ? 'الخدمات والعيادات المتاحة' : 'Medical Services'}</div>
                            <p class="text-xs text-sub">${isAr ? 'طب الأسرة، الباطنة، الأطفال، وفحص النظر لكبار السن.' : 'Family medicine, pediatrics, and vision care.'}</p>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 ${crapState.A ? '' : 'mt-6 rtl:mr-8'}">
                            <div class="${headingStyle2}">📍 ${isAr ? 'العنوان والاتجاهات' : 'Location & Directions'}</div>
                            <p class="text-xs text-sub">${isAr ? 'شارع التحرير بجوار محطة المترو الرئيسية — متوفر منحدر للكراسي المتحركة.' : 'Main Street next to Metro Station — wheelchair accessible.'}</p>
                        </div>
                    </div>
                </div>
            `;

            let broken = [];
            if (!crapState.C) broken.push(isAr ? "ضعف التباين (Contrast): العنوان وزر الحجز باهتان ولا يبرزان للمريض" : "Low Contrast: Title & button fail to stand out");
            if (!crapState.R) broken.push(isAr ? "غياب التكرار (Repetition): عناوين البطاقات غير موحدة النمط واللون" : "Broken Repetition: Heading styles are inconsistent");
            if (!crapState.A) broken.push(isAr ? "اختلال المحاذاة (Alignment): العناصر مبعثرة ولا تتبع خط أساس مشترك" : "Broken Alignment: Elements lack a common baseline");
            if (!crapState.P) broken.push(isAr ? "انعدام التقارب والهوامش (Proximity): تداخل المجموعات بدون مسافات فاصلة" : "Poor Proximity: Unrelated items are crammed together");

            if (broken.length === 0) {
                noteBox.innerHTML = `<span class="text-emerald-400 font-bold">✅ ${isAr ? 'تصميم مثالي متمحور حول المستخدم (UCD): جميع مبادئ CRAP الأربعة مطبقة بوضوح!' : 'Optimal UCD Design: All 4 CRAP principles are cleanly applied!'}</span>`;
            } else {
                noteBox.innerHTML = `<span class="text-rose-400 font-bold">⚠️ ${isAr ? 'مشكلات التصميم الحالية:' : 'Current Design Issues:'}</span> ` + broken.join(' • ');
            }
        }

        // ============================================================
        // SIMULATOR 3: WEB ANALYTICS & DIAGNOSTICS (LESSON 4-3)
        // ============================================================
        function loadAnalyticsCase(caseName) {
            playSfx('click');
            const vSlider = document.getElementById('slider-visits');
            const bSlider = document.getElementById('slider-bounced');
            const cSlider = document.getElementById('slider-converted');

            if (caseName === 'bookstore') {
                vSlider.value = 2000;
                bSlider.max = 2000;
                bSlider.value = 600;
                cSlider.max = 1000;
                cSlider.value = 15;
            } else if (caseName === 'school') {
                vSlider.value = 1500;
                bSlider.max = 1500;
                bSlider.value = 1260;
                cSlider.max = 750;
                cSlider.value = 45;
            } else if (caseName === 'optimized') {
                vSlider.value = 2500;
                bSlider.max = 2500;
                bSlider.value = 625;
                cSlider.max = 1250;
                cSlider.value = 300;
            }
            updateAnalyticsDashboard();
        }

        function updateAnalyticsDashboard() {
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const visits = parseInt(document.getElementById('slider-visits').value) || 100;
            const bSlider = document.getElementById('slider-bounced');
            const cSlider = document.getElementById('slider-converted');

            bSlider.max = visits;
            if (parseInt(bSlider.value) > visits) bSlider.value = visits;
            cSlider.max = Math.max(10, visits - parseInt(bSlider.value));
            if (parseInt(cSlider.value) > parseInt(cSlider.max)) cSlider.value = cSlider.max;

            const bounced = parseInt(bSlider.value);
            const converted = parseInt(cSlider.value);
            const pv = bounced * 1 + (visits - bounced) * 3;

            const bounceRate = ((bounced / visits) * 100).toFixed(1);
            const cvr = ((converted / visits) * 100).toFixed(1);

            document.getElementById('val-visits').innerText = visits.toLocaleString();
            document.getElementById('val-pv').innerText = pv.toLocaleString();
            document.getElementById('val-bounced').innerText = bounced.toLocaleString();
            document.getElementById('val-converted').innerText = converted.toLocaleString();

            document.getElementById('kpi-pv').innerText = pv.toLocaleString();
            document.getElementById('kpi-bounce').innerText = bounceRate + '%';
            document.getElementById('kpi-cvr').innerText = cvr + '%';

            const diagBox = document.getElementById('analytics-diagnosis-box');
            if (parseFloat(bounceRate) >= 65) {
                diagBox.innerHTML = isAr
                    ? `🚨 <strong>تشخيص الأرقام (كمي):</strong> معدل الارتداد مرتفع جداً (${bounceRate}%)؛ معظم الزوار يغادرون من الصفحة الأولى!<br>🗣️ <strong>التوصية النوعية (لماذا؟):</strong> أجرِ <strong>اختبار قابلية استخدام (Usability Test)</strong> أو <strong>تقييماً إرشادياً (Heuristic Evaluation)</strong> لفحص وضوح الصفحة الرئيسية وقائمة التنقل.`
                    : `🚨 <strong>Quantitative Signal:</strong> High Bounce Rate (${bounceRate}%)—most visitors leave after the first page!<br>🗣️ <strong>Qualitative Action (Why?):</strong> Conduct <strong>Usability Testing</strong> or a <strong>Heuristic Evaluation</strong> to check homepage clarity and navigation consistency.`;
            } else if (parseFloat(cvr) < 2.5) {
                diagBox.innerHTML = isAr
                    ? `⚠️ <strong>تشخيص الأرقام (كمي — حالة متجر الكتب ص 85):</strong> المشاهدات (PV = ${pv.toLocaleString()}) جيدة، لكن معدل التحويل منخفض جداً (CVR = ${cvr}%)؛ الزوار يتصفحون ولكن لا يكملون الشراء!<br>🗣️ <strong>التوصية النوعية (لماذا؟):</strong> راقب مستخدمي الهواتف في <strong>اختبار قابلية استخدام</strong> أو أجرِ <strong>مقابلات (Interviews)</strong> لكشف عوائق سلة التسوق ونموذج الدفع.`
                    : `⚠️ <strong>Quantitative Signal (Bookstore Case p. 92):</strong> High PV (${pv.toLocaleString()}) but very low CVR (${cvr}%)—visitors browse but fail to convert!<br>🗣️ <strong>Qualitative Action (Why?):</strong> Run mobile <strong>Usability Tests</strong> and <strong>User Interviews</strong> to uncover checkout form obstacles.`;
            } else {
                diagBox.innerHTML = isAr
                    ? `✅ <strong>أداء متوازن وممتاز:</strong> معدل الارتداد منخفض (${bounceRate}%) ومعدل التحويل مرتفع (CVR = ${cvr}%). استمر في المراقبة الدورية عبر تحليلات الويب واختبارات A/B!`
                    : `✅ <strong>Healthy Performance:</strong> Low bounce rate (${bounceRate}%) and strong conversion rate (CVR = ${cvr}%). Continue iterative monitoring!`;
            }
        }

        // ============================================================
        // SIMULATOR 4: A/B TESTING & PDCA LOOP (LESSON 4-4)
        // ============================================================
        let currentAbMode = 'single';

        function runAbExperiment(mode, silent) {
            if (!silent) playSfx('click');
            currentAbMode = mode;
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const btnSingle = document.getElementById('btn-ab-single');
            const btnMulti = document.getElementById('btn-ab-multi');
            const previewB = document.getElementById('ab-option-b-preview');
            const cvrB = document.getElementById('ab-b-cvr');
            const verdict = document.getElementById('ab-pdca-verdict');

            if (mode === 'single') {
                btnSingle.className = "px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold transition";
                btnMulti.className = "px-3.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold transition";
                previewB.innerHTML = `
                    <div class="text-xs font-bold text-slate-300">${isAr ? 'فعالية النادي المدرسي السنوية (نفس العنوان)' : 'Yearly School Club Event (Same Title)'}</div>
                    <button class="px-5 py-2 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs shadow-lg">
                        ${isAr ? 'سجّل الآن (تغيير لون الزر فقط للأخضر المتباين)' : 'Sign Up (Changed ONLY Button Color)'}
                    </button>
                `;
                cvrB.innerText = "115 / 500 (CVR: 23.0%)";
                verdict.innerHTML = isAr
                    ? `✅ <strong>تجربة A/B علمية سليمة (تغيير عنصر واحد فقط + عينة كافية 500 زائر):</strong><br>بما أننا غيّرنا <strong>لون الزر فقط</strong> مع تثبيت باقي العناصر، يمكننا الجزم علمياً في خطوة <strong>Check (تحقّق)</strong> أن اللون الأخضر المتباين رفع التسجيل من 12% إلى 23%، وفي خطوة <strong>Act (تصرّف)</strong> نعتمد النسخة B رسمياً!`
                    : `✅ <strong>Valid A/B Test (Changed ONLY 1 Element + Sufficient Sample of 500):</strong><br>Because only the button color changed, the <strong>Check</strong> step proves the high-contrast green button boosted CVR from 12% to 23%. In the <strong>Act</strong> step, we adopt Option B!`;
            } else {
                btnMulti.className = "px-3.5 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold transition";
                btnSingle.className = "px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold transition";
                previewB.innerHTML = `
                    <div class="text-sm font-black text-amber-400">🎉 ${isAr ? 'عنوان جديد كلياً + صورة جديدة + هدايا مجانية!' : 'Brand New Title + New Image + Free Gifts!'}</div>
                    <button class="px-5 py-2 rounded-full bg-pink-600 text-white font-black text-xs">
                        ${isAr ? 'احجز مقعدك فوراً (تغيير النص واللون والشكل معاً!)' : 'Grab Your Seat Now (Changed Text, Color & Shape!)'}
                    </button>
                `;
                cvrB.innerText = "95 / 500 (CVR: 19.0%)";
                verdict.innerHTML = isAr
                    ? `❌ <strong>خطأ منهجي في اختبار A/B (كتاب الوزارة ص 90):</strong><br>لقد قمت بتغيير <strong>عدة عناصر في الوقت نفسه</strong> (العنوان + لون الزر + نص الزر)! الآن يستحيل معرفة أي عنصر منها هو الذي أحدث الفرق، أو ربما أضر أحدها بالنتيجة. <strong>القاعدة الذهبية: غيّر عنصراً واحداً فقط في كل مرة!</strong>`
                    : `❌ <strong>Flawed A/B Test Methodology (Textbook p. 98):</strong><br>Multiple elements were changed simultaneously (Title + Button Color + Button Copy)! It is now impossible to isolate which specific change produced the effect. <strong>Golden Rule: Change only one element at a time!</strong>`;
            }
        }

        // ============================================================
        // 25 COMPREHENSIVE CURRICULUM QUESTIONS (ALL 4 LESSONS + SYNTHESIS)
        // ============================================================
        const allExamQuestions = unit4ExamQuestions;

        // Dedicated 10 Textbook Questions for Each of the 4 Lessons (4-1, 4-2, 4-3, 4-4)
        const lessonQuizData = unit4QuizData;

        function initLessonQuizzes() {
            ['41', '42', '43', '44'].forEach(id => {
                const container = document.getElementById('quiz-' + id + '-container');
                if (!container) return;
                const questions = lessonQuizData[id];

                container.innerHTML = questions.map((q, qIdx) => {
                    const optBtns = q.opts.ar.map((optAr, oIdx) => {
                        const optEn = q.opts.en[oIdx];
                        const letter = ['أ', 'ب', 'جـ', 'د'][oIdx];
                        return '<button onclick="checkLessonQuiz(this, \'' + id + '\', ' + qIdx + ', ' + oIdx + ')" class="p-3 rounded-xl theme-panel border hover:border-emerald-500 text-start transition text-slate-300 hover:text-white flex items-start gap-2.5 text-xs sm:text-sm">' +
                            '<span class="w-5 h-5 rounded-md bg-slate-800 text-amber-400 font-mono font-bold flex items-center justify-center shrink-0 text-[11px] mt-0.5">' + letter + '</span>' +
                            '<span class="flex-1">' +
                                '<span class="lang-ar">' + optAr + '</span>' +
                                '<span class="lang-en">' + optEn + '</span>' +
                            '</span>' +
                        '</button>';
                    }).join('');

                    return '<div class="p-4 sm:p-5 rounded-2xl theme-subpanel border border-slate-800/80 space-y-3.5 shadow-sm">' +
                        '<div class="flex items-start justify-between gap-3">' +
                            '<div class="flex items-start gap-2.5 flex-1">' +
                                '<span class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">' + (qIdx + 1) + '</span>' +
                                '<p class="font-bold text-xs sm:text-sm leading-relaxed text-slate-200">' +
                                    '<span class="lang-ar">' + q.q.ar + '</span>' +
                                    '<span class="lang-en">' + q.q.en + '</span>' +
                                '</p>' +
                            '</div>' +
                            '<span class="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700/60 text-amber-400 text-[10px] font-mono shrink-0 whitespace-nowrap">' + (qIdx + 1) + ' / 10</span>' +
                        '</div>' +
                        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">' + optBtns + '</div>' +
                        '<div class="lesson-feedback-box hidden p-3.5 rounded-xl text-xs leading-relaxed space-y-1.5 transition-all duration-200"></div>' +
                    '</div>';
                }).join('');
            });
        }

        function checkLessonQuiz(btn, lessonId, qIdx, oIdx) {
            const q = lessonQuizData[lessonId][qIdx];
            const isCorrect = (oIdx === q.a);
            const parent = btn.parentElement;
            const fb = parent.nextElementSibling;

            parent.querySelectorAll('button').forEach((b, idx) => {
                b.disabled = true;
                if (idx === q.a) {
                    b.className = "p-3 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 text-start font-bold flex items-start gap-2.5 text-xs sm:text-sm shadow-sm";
                } else if (idx === oIdx && !isCorrect) {
                    b.className = "p-3 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-rose-200 text-start font-bold flex items-start gap-2.5 text-xs sm:text-sm shadow-sm";
                } else {
                    b.className = "p-3 rounded-xl theme-panel border opacity-40 text-start flex items-start gap-2.5 text-xs sm:text-sm";
                }
            });

            fb.classList.remove('hidden');

            if (isCorrect) {
                playSfx('success');
                fb.className = "lesson-feedback-box p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/60 text-emerald-200 text-xs leading-relaxed space-y-1.5 shadow-md";
                fb.innerHTML = '<div class="font-black text-emerald-400 flex items-center gap-1.5 text-xs sm:text-sm">' +
                    '<i class="fa-solid fa-circle-check"></i> ' +
                    '<span class="lang-ar">إجابة صحيحة نموذجية! أحسنت.</span>' +
                    '<span class="lang-en">Correct Model Answer! Well done.</span>' +
                '</div>' +
                '<div class="text-slate-300 text-xs">' +
                    '<span class="lang-ar">' + q.exp.ar + '</span>' +
                    '<span class="lang-en">' + q.exp.en + '</span>' +
                '</div>' +
                '<div class="text-[11px] text-amber-400 font-mono font-bold pt-1.5 border-t border-emerald-500/30 flex items-center gap-1.5">' +
                    '<i class="fa-solid fa-book-open text-xs"></i> ' +
                    '<span>' + q.ref + '</span>' +
                '</div>';
            } else {
                playSfx('error');
                fb.className = "lesson-feedback-box p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/60 text-rose-200 text-xs leading-relaxed space-y-1.5 shadow-md";
                fb.innerHTML = '<div class="font-black text-rose-400 flex items-center gap-1.5 text-xs sm:text-sm">' +
                    '<i class="fa-solid fa-circle-xmark"></i> ' +
                    '<span class="lang-ar">إجابة غير صحيحة! راجع التفسير أدناه:</span>' +
                    '<span class="lang-en">Incorrect Answer! Review explanation:</span>' +
                '</div>' +
                '<div class="text-slate-200 text-xs">' +
                    '<strong class="text-amber-400 font-bold"><span class="lang-ar">الإجابة الصحيحة هي: </span><span class="lang-en">Correct option is: </span></strong>' +
                    '(' + ['أ', 'ب', 'جـ', 'د'][q.a] + ') ' +
                    '<span class="lang-ar">' + q.opts.ar[q.a] + '</span>' +
                    '<span class="lang-en">' + q.opts.en[q.a] + '</span>' +
                '</div>' +
                '<div class="text-slate-300 text-xs">' +
                    '<span class="lang-ar">' + q.exp.ar + '</span>' +
                    '<span class="lang-en">' + q.exp.en + '</span>' +
                '</div>' +
                '<div class="text-[11px] text-amber-400 font-mono font-bold pt-1.5 border-t border-rose-500/30 flex items-center gap-1.5">' +
                    '<i class="fa-solid fa-book-open text-xs"></i> ' +
                    '<span>' + q.ref + '</span>' +
                '</div>';
            }
        }

        // ============================================================
        // UNIT 4 COMPREHENSIVE EXAM CONTROLLER (25 QUESTIONS)
        // ============================================================
        let uExIndex = 0;
        let uExScore = 0;
        let uExAnswered = false;

        function loadUExamQuestion(idx) {
            uExAnswered = false;
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const q = allExamQuestions[idx];

            document.getElementById('uex-idx').innerText = idx + 1;
            document.getElementById('uex-bar').style.width = `${((idx + 1) / allExamQuestions.length) * 100}%`;

            const tag = document.getElementById('uex-lesson-tag');
            tag.innerText = isAr ? q.lesson.ar : q.lesson.en;

            const title = document.getElementById('uex-q-title');
            title.innerHTML = `<span class="lang-ar">${q.q.ar}</span><span class="lang-en">${q.q.en}</span>`;

            const optsBox = document.getElementById('uex-options-box');
            optsBox.innerHTML = '';
            document.getElementById('uex-feedback-card').classList.add('hidden');
            document.getElementById('uex-next-btn').classList.add('hidden');

            q.opts.ar.forEach((optAr, oIdx) => {
                const optEn = q.opts.en[oIdx];
                const btn = document.createElement('button');
                btn.className = "w-full p-3 rounded-xl theme-panel border hover:border-emerald-400 text-start text-xs sm:text-sm text-slate-200 transition flex items-center justify-between";
                btn.innerHTML = `
                    <div class="flex items-center gap-2.5">
                        <span class="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] font-bold text-sub">
                            ${['أ', 'ب', 'جـ', 'د'][oIdx]}
                        </span>
                        <span class="lang-ar">${optAr}</span>
                        <span class="lang-en">${optEn}</span>
                    </div>
                    <i class="uex-ic fa-regular fa-circle text-sub"></i>
                `;
                btn.onclick = () => selectUExamAns(oIdx, btn);
                optsBox.appendChild(btn);
            });
        }

        function selectUExamAns(oIdx, btn) {
            if (uExAnswered) return;
            uExAnswered = true;
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            const q = allExamQuestions[uExIndex];
            const isCorrect = (oIdx === q.a);
            const allBtns = document.querySelectorAll('#uex-options-box button');

            allBtns.forEach((b, i) => {
                b.disabled = true;
                const ic = b.querySelector('.uex-ic');
                if (i === q.a) {
                    b.className = "w-full p-3 rounded-xl border border-emerald-500 bg-emerald-950/80 text-start text-xs sm:text-sm text-emerald-200 transition flex items-center justify-between font-bold";
                    ic.className = "uex-ic fa-solid fa-circle-check text-emerald-400";
                } else if (i === oIdx && !isCorrect) {
                    b.className = "w-full p-3 rounded-xl border border-rose-500 bg-rose-950/80 text-start text-xs sm:text-sm text-rose-200 transition flex items-center justify-between font-bold";
                    ic.className = "uex-ic fa-solid fa-circle-xmark text-rose-400";
                }
            });

            const fb = document.getElementById('uex-feedback-card');
            if (isCorrect) {
                playSfx('success');
                uExScore += 4;
                document.getElementById('uex-score-num').innerText = uExScore;
                fb.className = "p-3.5 rounded-xl border border-emerald-500/50 bg-emerald-950/40 text-emerald-200 text-xs";
                fb.innerHTML = `<strong>✅ ${isAr ? 'إجابة صحيحة!' : 'Correct!'}</strong> ${isAr ? q.exp.ar : q.exp.en}`;
            } else {
                playSfx('error');
                fb.className = "p-3.5 rounded-xl border border-rose-500/50 bg-rose-950/40 text-rose-200 text-xs";
                fb.innerHTML = `<strong>❌ ${isAr ? 'إجابة غير دقيقة!' : 'Incorrect!'}</strong> ${isAr ? q.exp.ar : q.exp.en}`;
            }
            fb.classList.remove('hidden');

            const nextBtn = document.getElementById('uex-next-btn');
            nextBtn.classList.remove('hidden');
            nextBtn.classList.add('flex');
            if (uExIndex === allExamQuestions.length - 1) {
                nextBtn.innerHTML = `<span>${isAr ? 'عرض النتيجة والشهادة' : 'View Certificate'}</span> <i class="fa-solid fa-trophy text-xs"></i>`;
            }
        }

        function nextUExamQuestion() {
            playSfx('click');
            uExIndex++;
            if (uExIndex < allExamQuestions.length) {
                loadUExamQuestion(uExIndex);
            } else {
                finishUExam();
            }
        }

        function finishUExam() {
            playSfx('success');
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            document.getElementById('uex-q-screen').classList.add('hidden');
            const finScreen = document.getElementById('uex-finish-screen');
            finScreen.classList.remove('hidden');

            document.getElementById('uex-final-grade').innerText = `${uExScore} / 100`;
            const evalBox = document.getElementById('uex-finish-eval');

            if (uExScore >= 85) {
                evalBox.innerText = isAr ? "🌟 ممتاز وبراعة فائقة! لقد أتقنت مفاهيم تصميم الويب والوسائط بالكامل وأنت جاهز للدرجة النهائية." : "Outstanding Mastery! You have completely mastered Unit 4 Web and Media Design.";
                if (typeof confetti === 'function') confetti({ particleCount: 130, spread: 90, origin: { y: 0.6 } });
            } else if (uExScore >= 65) {
                evalBox.innerText = isAr ? "👏 أداء طيب جداً! راجع الأسئلة التي تعثرت فيها في مذكرة المراجعة لتضمن الدرجة النهائية." : "Very Good! Review specific nuances in the summary guide.";
            } else {
                evalBox.innerText = isAr ? "💪 محاولة طيبة، افتح مذكرة المراجعة الشاملة واسترجع المفاهيم ثم أعد الاختبار مجدداً." : "Good try! Check the revision guide and retake the test.";
            }
        }

        function restartUExam() {
            playSfx('click');
            uExIndex = 0;
            uExScore = 0;
            document.getElementById('uex-score-num').innerText = 0;
            document.getElementById('uex-finish-screen').classList.add('hidden');
            document.getElementById('uex-q-screen').classList.remove('hidden');
            loadUExamQuestion(0);
        }

  playSfx = playSfxBridge;
  navigateTo = navigateToBridge;
  const handlers = { toggleSidebar, toggleSound, toggleLanguage, toggleTheme, openPrintModal, toggleUnit, navigateTo, runMediaScenario, toggleMediaChannel, toggleCard, setDesignMode, toggleCrapPrinciple, loadAnalyticsCase, updateAnalyticsDashboard, runAbExperiment, nextUExamQuestion, restartUExam, closePrintModal, checkLessonQuiz, selectUExamAns };
  const previousHandlers = new Map();
  for (const [name, handler] of Object.entries(handlers)) {
    previousHandlers.set(name, window[name]);
    window[name] = handler;
  }
  const initialize = {
    'lesson-4-1': () => { runMediaScenario('library'); initLessonQuizzes(); },
    'lesson-4-2': () => { renderCrapStudio(); initLessonQuizzes(); },
    'lesson-4-3': () => { loadAnalyticsCase('bookstore'); initLessonQuizzes(); },
    'lesson-4-4': () => { runAbExperiment('single', true); initLessonQuizzes(); },
    'unit-4-exam': () => loadUExamQuestion(0),
  }[viewId];
  initialize?.();
  return () => {
    for (const [name, previous] of previousHandlers) {
      if (previous === undefined) delete window[name];
      else window[name] = previous;
    }
  };
}
