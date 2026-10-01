@echo off
chcp 65001 > nul
title منصة البرمجة والذكاء الاصطناعي — تشغيل أوفلاين

echo ===================================================================
echo   منصة البرمجة والذكاء الاصطناعي — الصف الثاني الثانوي (م/ عمر محمود)
echo   جاري تشغيل المنصة والمحاكيات بدون إنترنت على الجهاز...
echo ===================================================================
echo.

cd /d "%~dp0out" 2>nul || cd /d "%~dp0"

:: Start default browser automatically at http://localhost:8080
start http://localhost:8080

:: Try running Python built-in static server (available on Windows/Mac/Linux)
python -m http.server 8080 2>nul
if %ERRORLEVEL% EQU 0 goto END

python3 -m http.server 8080 2>nul
if %ERRORLEVEL% EQU 0 goto END

:: Fallback if Python is not installed: try npx serve or direct browser launch
npx --yes serve -s . -p 8080 2>nul
if %ERRORLEVEL% EQU 0 goto END

:: Fallback direct HTML launch
start index.html

:END
