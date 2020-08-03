@echo off
for %%f in (*.ts) do (
echo %%f
echo %%f
    ren "%%~nf%%~xf" "%%~nf.js"
)
cd dto
for %%f in (*.ts) do (
echo %%f
    ren "%%~nf%%~xf" "%%~nf.js"
)
pause