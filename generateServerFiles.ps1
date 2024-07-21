### Variables
# Mod blacklist to NOT copy into serve side folder
$MOD_BLACK_LIST="tiny-item-animations*","oculus-flywheel-compat*","betterfpsdist*","BHMenu*","cherishedworlds-forge*", "MapTooltip-forge*", "probejs*", "moreoverlays*", "MouseTweaks*", "oculus*", "EquipmentCompare*", "Prism*", "Boat-Item-View*", "tia-1.20*", "gpumemleakfix*", "LegendaryTooltips*", "Highlighter*", "Ding*", "AmbientSounds*", "modnametooltip*", "fancymenu*", "SimpleDiscordRichPresence*", "OverflowingBars*","ToolStats-Forge-*","AmbientSounds_FORGE*","SimpleDiscordRichPresence-forge-*","fancymenu_forge_*", "drippyloadingscreen_forge_*","melody_forge_*"

# Folder list to copy
$FOLDER_LIST= @("mods", "kubejs", "config", "defaultconfigs")

$SERVER_FOLDER="server_files"
$CURRENT_FOLDER=$PWD

Write-Output "Starting Server generation."

if (Test-Path -Path $CURRENT_FOLDER\$SERVER_FOLDER) {
    Remove-Item $CURRENT_FOLDER\$SERVER_FOLDER -Recurse -Force 
}

New-Item -Path $CURRENT_FOLDER -Name $SERVER_FOLDER -ItemType "directory"

foreach ($folder in $FOLDER_LIST) {
    Copy-Item -Path $CURRENT_FOLDER\$folder\ -Destination $CURRENT_FOLDER\$SERVER_FOLDER -Recurse -Exclude $MOD_BLACK_LIST
}

# Copy "preServer" folder contents to "server_files"
$PRE_SERVER_FOLDER="preServer"
Copy-Item -Path $CURRENT_FOLDER\$PRE_SERVER_FOLDER\* -Destination $CURRENT_FOLDER\$SERVER_FOLDER -Recurse

Write-Output "Server generation finished."