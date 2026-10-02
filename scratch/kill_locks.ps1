Get-WmiObject Win32_Process | Where-Object { $_.CommandLine -like "*server.js*" -or $_.CommandLine -like "*start_offline_server*" } | ForEach-Object {
    Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
}
