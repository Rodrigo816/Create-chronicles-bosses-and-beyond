ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('ad_astra:has_structure/meteor_biomes')
    event.removeAll('ad_astra:has_structure/oil_well_biomes')
    event.removeAll('ae2:has_meteorites')
    event.removeAllTagsFrom('ad_astra:steel_plate')
})

// disable drygm
ServerEvents.tags("entity_type", (event) => {
    event.add("ars_nouveau:drygmy_blacklist", [/.*/]);
    // Define passive mobs
    let passiveMobs = [
        "minecraft:bat",
        "minecraft:chicken",
        "minecraft:cow",
        "minecraft:donkey",
        "minecraft:fox",
        "minecraft:frog",
        "minecraft:horse",
        "minecraft:mooshroom",
        "minecraft:mule",
        "minecraft:parrot",
        "minecraft:pig",
        "minecraft:rabbit",
        "minecraft:sheep",
        "minecraft:squid",
        "minecraft:turtle",
        "minecraft:cod",
        "minecraft:dolphin",
        "minecraft:pufferfish",
        "minecraft:salmon",
    ];

    // Remove passive mobs from the blacklist
    event.remove("ars_nouveau:drygmy_blacklist", passiveMobs);

    event.add("ars_nouveau:jar_blacklist", [" eg","iceandfire:lightning_dragon","iceandfire:fire_dragon","iceandfire:ice_dragon"]);
});

ServerEvents.tags("entity_type", (event) => {
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", ["#forge:bosses","iceandfire:lightning_dragon","iceandfire:fire_dragon","iceandfire:ice_dragon"]);
    event.add('ad_astra:entities/lives_without_oxygen', [
        'iceandfire:lightning_dragon',
        "mowziesmobs:umvuthi",
        "mowziesmobs:umvuthana",
        "mowziesmobs:umvuthana_follower_raptor",
        "mowziesmobs:umvuthana_follower_player",
        "mowziesmobs:umvuthana_crane_player",
        "mowziesmobs:umvuthana_raptor",
        "mowziesmobs:umvuthana_crane"
    ]);
    event.add('ad_astra:entities/fire_immune', [
        'iceandfire:lightning_dragon'
    ]);    
});

ServerEvents.tags('item', event => {
    event.get('minecraft:logs_that_burn')
         .add('forbidden_arcanus:aurum_log');
});


ServerEvents.tags('block', event => {
    event.add("ftbchunks:interact_whitelist", ['#minecraft:doors','create_things_and_misc:card_reader','refurbished_furniture:post_box','numismatics:blaze_banker','create:contraption_controls',"numismatics:andesite_depositor", "numismatics:brass_depositor", "numismatics:bank_terminal", "numismatics:vendor"]);
})
 /*ServerEvents.tags("entity_type", (event) => {
    event.add("ars_nouveau:drygmy_blacklist", [/minecraft:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/cataclysm:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", ["artifacts:mimic"]);
    event.add("ars_nouveau:drygmy_blacklist", [/iceandfire:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/graveyard:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/bosses_of_mass_destruction:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/twilightforest:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/irons_spellbooks:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/mutantmonsters:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/alexscaves:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aether:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/blue_skies:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aquamirae:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/conjurer_illager:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aquamirae:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aquamirae:.+/]);
  });*/
