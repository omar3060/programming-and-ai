$job = Start-Job -ScriptBlock {
    Set-Location "e:\AAAAAAAAAAA\منهج الدراسه\New folder (2)\programming-2-secondary"
    powershell -ExecutionPolicy Bypass -File "scratch\test_ps_server.ps1"
}
Start-Sleep -Seconds 2
try {
    $res = Invoke-WebRequest -Uri "http://localhost:8080" -UseBasicParsing
    Write-Host "STATUS CODE: $($res.StatusCode)"
    Write-Host "CONTENT LENGTH: $($res.Content.Length)"
} catch {
    Write-Host "Fetch failed"
}
Stop-Job $job -ErrorAction SilentlyContinue
Remove-Job $job -ErrorAction SilentlyContinue
