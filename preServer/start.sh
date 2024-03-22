#!/bin/sh
set -eu
FORGE_VERSION=47.2.20
# To use a specific Java runtime, set an environment variable named CCB_JAVA to the full path of java.exe.
# To disable automatic restarts, set an environment variable named CCB_RESTART to false.
# To install the pack without starting the server, set an environment variable named CCB_INSTALL_ONLY to true.

INSTALLER="forge-1.20.1-$FORGE_VERSION-installer.jar"
FORGE_URL="http://files.minecraftforge.net/maven/net/minecraftforge/forge/1.20.1-$FORGE_VERSION/forge-1.20.1-$FORGE_VERSION-installer.jar"

pause() {
    printf "%s\n" "Press enter to continue..."
    read -r ans
}

if ! command -v "${CCB_JAVA:-java}" >/dev/null 2>&1; then
    echo "Create Chronicles: Bosses and Beyond requires Java 17 - Java not found"
    pause
    exit 1
fi

cd "$(dirname "$0")"
if [ ! -d libraries ]; then
    echo "Forge not installed, installing now."
    if [ ! -f "$INSTALLER" ]; then
        echo "Forge installer not found. Downloading Forge..."
        if command -v wget >/dev/null 2>&1; then
            wget -O "$INSTALLER" "$FORGE_URL"
        elif command -v curl >/dev/null 2>&1; then
            curl -o "$INSTALLER" -L "$FORGE_URL"
        else
            echo "Neither wget nor curl were found on your system. Please install one and try again."
            pause
            exit 1
        fi
    fi

    echo "Running Forge installer."
    "${CCB_JAVA:-java}" -jar "$INSTALLER" --installServer
fi

# Create server.properties if not exist
if [ ! -f "server.properties" ]; then
    {
        echo "allow-flight=true"
        echo "motd=Create Chronicles: Bosses and Beyond"
        echo "max-tick-time=180000"
    } > "server.properties"
fi

if [ "${CCB_INSTALL_ONLY:-false}" = "true" ]; then
    echo "INSTALL_ONLY: complete"
    exit 0
fi

JAVA_VERSION=$("${CCB_JAVA:-java}" -fullversion 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [ "$JAVA_VERSION" -lt 17 ]; then
    echo "Create Chronicles: Bosses and Beyond requires Java 17 or newer. Found Java $JAVA_VERSION."
    pause
    exit 1
fi

while true
do
    "${CCB_JAVA:-java}" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-$FORGE_VERSION/unix_args.txt nogui

    if [ "${CCB_RESTART:-true}" = "false" ]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done