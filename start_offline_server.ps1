$ErrorActionPreference = "SilentlyContinue"

# Resolve path to "out" folder
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$outDir = Join-Path $scriptDir "out"

if (-not (Test-Path $outDir)) {
    Write-Host "Generating offline build out folder..." -ForegroundColor Yellow
    Set-Location $scriptDir
    npm run build
}

if (-not (Test-Path $outDir)) {
    Write-Host "Error: Could not locate 'out' directory." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit 1
}

# Find available port
$port = 8080
$listener = $null
while ($port -le 8099) {
    try {
        $l = New-Object System.Net.HttpListener
        $l.Prefixes.Add("http://localhost:$port/")
        $l.Start()
        $listener = $l
        break
    } catch {
        $port++
    }
}

if (-not $listener) {
    Write-Host "Error: Could not bind HTTP listener to ports 8080-8099" -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit 1
}

Write-Host "===================================================================" -ForegroundColor Green
Write-Host "  Platform Offline Server Running at: http://localhost:$port/" -ForegroundColor Cyan
Write-Host "  Close this window to stop the server." -ForegroundColor Yellow
Write-Host "===================================================================" -ForegroundColor Green

# Open default web browser
Start-Process "http://localhost:$port/"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".pdf"  = "application/pdf"
    ".woff2"= "font/woff2"
    ".woff" = "font/woff"
    ".ttf"  = "font/ttf"
    ".txt"  = "text/plain; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($rawPath -eq "/") { $rawPath = "/index.html" }

        # Remove leading slash and sanitize path
        $cleanPath = $rawPath.TrimStart('/').Replace('/', '\')
        $targetFile = Join-Path $outDir $cleanPath

        if ((Test-Path $targetFile) -and -not (Test-Path $targetFile -PathType Container)) {
            $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
            if ($mimeTypes.ContainsKey($ext)) {
                $response.ContentType = $mimeTypes[$ext]
            } else {
                $response.ContentType = "application/octet-stream"
            }
            $bytes = [System.IO.File]::ReadAllBytes($targetFile)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            # SPA Fallback to index.html
            $indexPath = Join-Path $outDir "index.html"
            if (Test-Path $indexPath) {
                $response.ContentType = "text/html; charset=utf-8"
                $bytes = [System.IO.File]::ReadAllBytes($indexPath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
            }
        }
        $response.Close()
    }
} finally {
    if ($listener) { $listener.Stop() }
}
