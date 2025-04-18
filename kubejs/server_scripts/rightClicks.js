ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:skill_add_point') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/puffish_skills points add ${event.player.username} talentree 1`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
    if(event.item=='kubejs:skill_reset') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/puffish_skills skills reset ${event.player.username} talentree`);
        
        event.player.tell(Text.gold('Your talent tree was been reseted!'));
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
})

BlockEvents.rightClicked( event => {
    if (event.player.isFake() && event.block.id == 'minecraft:soul_sand' && event.item.id == "forbidden_arcanus:soul_extractor") {
        event.block.set('forbidden_arcanus:soulless_sand')
        event.block.popItemFromFace('forbidden_arcanus:soul', event.getFacing())
    }
})
  const bannedBlocks = [
    "molten_vents:dormant_molten_asurine",
    "molten_vents:active_molten_asurine",
    "molten_vents:dormant_molten_veridium",
    "molten_vents:active_molten_veridium",
    "molten_vents:dormant_molten_crimsite",
    "molten_vents:active_molten_crimsite",
    "molten_vents:dormant_molten_orchrum",
    "molten_vents:active_molten_orchrum",
    "molten_vents:dormant_molten_scorchia",
    "molten_vents:active_molten_scorchia",
    "molten_vents:dormant_molten_scoria",
    "molten_vents:active_molten_scoria",
    "molten_vents:dormant_molten_potassic",
    "molten_vents:active_molten_potassic",
    "molten_vents:dormant_molten_battery",
    "molten_vents:active_molten_battery"
  ]
  
  BlockEvents.placed(event => {
    if (bannedBlocks.includes(event.block.id)) {
      event.cancel()
    }
  })