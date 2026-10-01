@echo off
chcp 65001 > nul
title منصة البرمجة والذكاء الاصطناعي — تشغيل أوفلاين

echo ===================================================================
echo   منصة البرمجة والذكاء الاصطناعي — الصف الثاني الثانوي (م/ عمر محمود)
echo   جاري تشغيل المنصة والمحاكيات بدون إنترنت على الجهاز...
echo ===================================================================
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0start_offline_server.ps1"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo جاري محاولة التشغيل عبر الخادم البديل...
    cd /d "%~dp0out" 2>nul || cd /d "%~dp0"
    start http://localhost:8080
    python -m http.server 8080
)

pause
