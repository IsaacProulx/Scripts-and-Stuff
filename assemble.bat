@echo off
:start
D:
cd "D:/assembly stuff/o2em118win/roms/src"
echo Enter the number corresponding to the file you want to assemble
set i=0
for %%a in (*) do call :stuff %%a
goto end

:stuff
if "%*"=="assemble.bat" (
	goto :eof
)
set file[%i%]="%~n1
set ext[%i%]=%~x1"
call echo %i%: %%file[%i%]%%%%ext[%i%]%%
set /a i = %i% + 1
goto :eof

:end
set /p index=
set fileIndex=%%file[%index%]%%
set extIndex=%%ext[%index%]%%
call cp %fileIndex%%extIndex% "D:/assembly stuff/aswcurr/bin/"
cd /d "D:/assembly stuff/aswcurr/bin"
call asw.exe %fileIndex%%extIndex%
call p2bin %fileIndex%.p" %fileIndex%.bin" -r 1024-3071
call cp %fileIndex%.bin" "D:/assembly stuff/o2em118win/roms"
call rm %fileIndex%%extIndex%
call rm %fileIndex%.p"
call rm %fileIndex%.bin"
pause
goto start

