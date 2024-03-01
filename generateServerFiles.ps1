### Variables
# Mod blacklist to NOT copy into serve side folder
$MOD_BLACK_LIST="betterfpsdist*", "MapTooltip-forge*", "probejs*", "moreoverlays*", "MouseTweaks*", "oculus*", "EquipmentCompare*", "Prism*", "Boat-Item-View*", "tia-1.20*", "gpumemleakfix*", "LegendaryTooltips*", "Highlighter*", "Ding*", "AmbientSounds*", "modnametooltip*", "fancymenu*", "SimpleDiscordRichPresence*", "OverflowingBars*"

# Folder list to copy
$FOLDER_LIST= @("mods", "config", "defaultconfigs")

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

Write-Output "Server generation finished."