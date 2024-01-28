ItemEvents.rightClicked( event => {
    if(event.item=='kubejs:skill_add_point') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/puffish_skills points add ${event.player.username} main 1`);
        
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
    if(event.item=='kubejs:skill_reset') {
        // Run the skill point addition command for the player who clicked the block
        event.server.runCommandSilent(`/puffish_skills skills reset ${event.player.username} main`);
        
        event.player.tell(Text.gold('Your talent tree was been reseted!'));
        // If the player is holding an item, reduce its count by 1
        if(event.item) {
            event.item.count--;
        }
    
        // Prevent the default right-click action
        event.cancel();
    }
})
