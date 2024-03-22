@echo off
setlocal EnableDelayedExpansion

set FORGE_VERSION=47.2.20
:: Update these variables if needed
set INSTALLER=forge-1.20.1-%FORGE_VERSION%-installer.jar
set FORGE_URL=https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.20.1-%FORGE_VERSION%/forge-1.20.1-%FORGE_VERSION%-installer.jar

:: Use a specific Java version if CCB_JAVA environment variable is set
if defined CCB_JAVA (
    set JAVA_CMD=%CCB_JAVA%
) else (
    set JAVA_CMD=java
)

:: Check Java version
for /f tokens^=2-5^ delims^=.-_^" %%j in ('%JAVA_CMD% -version 2^>^&1') do set "jver=%%j"
if "%jver%" LSS "17" (
    echo Create Chronicles: Bosses and Beyond requires Java 17 or newer. Found Java %jver%.
    pause
    exit /b 1
)

:: Download Forge installer if not present
if not exist "%INSTALLER%" (
    echo Forge installer not found. Downloading Forge...
    powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%FORGE_URL%', '%INSTALLER%')"
)

:: Install Forge if not already installed
if not exist "libraries\" (
    echo Forge not installed, installing now.
    %JAVA_CMD% -jar %INSTALLER% --installServer
)

:: Create server.properties if it does not exist
if not exist server.properties (
    echo allow-flight=true > server.properties
    echo motd=Create Chronicles: Bosses and Beyond >> server.properties
    echo max-tick-time=180000 >> server.properties
)

:: Install only, without starting the server
if "%CCB_INSTALL_ONLY%"=="true" (
    echo INSTALL_ONLY: complete
    goto :eof
)

:: Start server and handle automatic restarts
:server_start
%JAVA_CMD% @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-%FORGE_VERSION%/win_args.txt nogui

if "%CCB_RESTART%"=="false" (
    goto :eof
) else (
    echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
    timeout /t 10 /nobreak
    goto :server_start
)