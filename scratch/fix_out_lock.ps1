$outPath = Join-Path $PSScriptRoot "..\out"
if (Test-Path $outPath) {
    $tempName = "out_trash_" + (Get-Random)
    try {
        Rename-Item -Path $outPath -NewName $tempName -Force -ErrorAction Stop
        Remove-Item -Recurse -Force $tempName -ErrorAction SilentlyContinue
    } catch {
        Get-ChildItem $outPath | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    }
}
