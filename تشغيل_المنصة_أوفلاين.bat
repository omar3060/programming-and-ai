@echo off
chcp 65001 > nul
title منصة البرمجة والذكاء الاصطناعي — تشغيل أوفلاين

echo ===================================================================
echo   منصة البرمجة والذكاء الاصطناعي — الصف الثاني الثانوي (م/ عمر محمود)
echo   جاري تشغيل المنصة والمحاكيات بدون إنترنت...
echo ===================================================================
echo.

cd /d "%~dp0"

:: 1. Try Node server
node server.js 2>nul
if %ERRORLEVEL% EQU 0 goto END

:: 2. Try PowerShell server
powershell -ExecutionPolicy Bypass -File "%~dp0start_offline_server.ps1"
if %ERRORLEVEL% EQU 0 goto END

:: 3. Try Python server
cd /d "%~dp0out" 2>nul || cd /d "%~dp0"
start http://127.0.0.1:8080
python -m http.server 8080

:END
pause
