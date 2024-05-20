LootJS.modifiers((event) => {

    // List of village loot tables
    const villageLootTables = [
      'minecraft:chests/village/village_armorer',
      'minecraft:chests/village/village_butcher',
      'minecraft:chests/village/village_cartographer',
      'minecraft:chests/village/village_desert_house',
      'minecraft:chests/village/village_fisher',
      'minecraft:chests/village/village_fletcher',
      'minecraft:chests/village/village_mason',
      'minecraft:chests/village/village_plains_house',
      'minecraft:chests/village/village_savanna_house',
      'minecraft:chests/village/village_shepherd',
      'minecraft:chests/village/village_snowy_house',
      'minecraft:chests/village/village_taiga_house',
      'minecraft:chests/village/village_tannery',
      'minecraft:chests/village/village_temple',
      'minecraft:chests/village/village_toolsmith',
      'minecraft:chests/village/village_weaponsmith'
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Add mechanisms to all village loot tables
  villageLootTables.forEach(lootTable => {
    event.addLootTableModifier(lootTable)
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("kubejs:rotation_mechanism").withChance(5)
      ]
    );
  });


  //corail tombstone
  event
    .addLootTypeModifier(LootType.ENTITY)
    .removeLoot('tombstone:grave_dust')
  event
    .addLootTypeModifier(LootType.FISHING)
    .removeLoot('tombstone:grave_dust')

  event
      .addLootTableModifier("ad_astra:chests/dungeon/moon/dungeon_chest")
      .addWeightedLoot(
        [1],
        [
          Item.of("ae2:sky_stone_block").withChance(8),
          Item.of("ae2:engineering_processor_press").withChance(15),
          Item.of("ae2:calculation_processor_press").withChance(15),
          Item.of("ae2:logic_processor_press").withChance(15),
          Item.of("ae2:silicon_press").withChance(15)
        ]
    );
  event
    .addBlockLootModifier(/waystones\:.*waystone/)
    .removeLoot(/waystones\:.*waystone/)
  event
    .addBlockLootModifier(/waystones\:.*waystone/)
    .addLoot(Item.of("waystones:warp_dust",1))
 
    // SIMPLE SWORDS STUFF
    const normalChance =0.03
    const highChance =0.12
    const mdChance =0.05
  event
    .addEntityLootModifier("twilightforest:snow_queen")
    .randomChance(normalChance)
    .addLoot("simplyswords:livyatan")
  event
    .addEntityLootModifier("twilightforest:snow_queen")
    .randomChance(normalChance)
    .addLoot("simplyswords:frostfall")
  event
    .addEntityLootModifier("twilightforest:snow_queen")
    .randomChance(normalChance)
    .addLoot("simplyswords:twisted_blade");   
  // ---
  event
  .addEntityLootModifier("cataclysm:the_leviathan")
  .randomChance(normalChance)
  .addLoot("simplyswords:icewhisper")
event
  .addEntityLootModifier("cataclysm:the_leviathan")
  .randomChance(normalChance)
  .addLoot("simplyswords:frostfall");
event
  .addEntityLootModifier("cataclysm:the_leviathan")
  .randomChance(normalChance)
  .addLoot("simplyswords:whisperwind");   
event
  .addEntityLootModifier("cataclysm:the_leviathan")
  .randomChance(normalChance)
  .addLoot("simplyswords:watching_warglaive"); 
event
  .addEntityLootModifier("cataclysm:the_leviathan")
  .randomChance(normalChance)
  .addLoot("simplyswords:twisted_blade");   
// ---
event
  .addEntityLootModifier("twilightforest:hydra")
  .randomChance(normalChance)
  .addLoot("simplyswords:ember_blade");
event
  .addEntityLootModifier("twilightforest:hydra")
  .randomChance(normalChance)
  .addLoot("simplyswords:emberlash");
event
  .addEntityLootModifier("twilightforest:hydra")
  .randomChance(normalChance)
  .addLoot("simplyswords:emberblade");  
  // ---
  event
    .addEntityLootModifier("twilightforest:naga")
    .randomChance(normalChance)
    .addLoot("simplyswords:toxic_longsword");
  event
    .addEntityLootModifier("twilightforest:naga")
    .randomChance(normalChance)
    .addLoot("simplyswords:twisted_blade");
   event
    .addEntityLootModifier("twilightforest:naga")
    .randomChance(normalChance)
    .addLoot("simplyswords:watching_warglaive");   
  // ---
  event
  .addEntityLootModifier("minecraft:ender_dragon")
  .randomChance(normalChance)
  .addLoot("simplyswords:stars_edge");
event
  .addEntityLootModifier("minecraft:ender_dragon")
  .randomChance(normalChance)
  .addLoot("simplyswords:tempest");
event
  .addEntityLootModifier("minecraft:ender_dragon")
  .randomChance(normalChance)
  .addLoot("simplyswords:soulkeeper");
event
  .addEntityLootModifier("minecraft:ender_dragon")
  .randomChance(normalChance)
  .addLoot("simplyswords:waxweaver");
event
  .addEntityLootModifier("minecraft:ender_dragon")
  .randomChance(normalChance)
  .addLoot("simplyswords:whisperwind");   
  // ---
  event
    .addEntityLootModifier("aquamirae:captain_cornelia")
    .randomChance(mdChance)
    .addLoot("simplyswords:frostfall");
  event
    .addEntityLootModifier("aquamirae:captain_cornelia")
    .randomChance(mdChance)
    .addLoot("simplyswords:waxweaver")    
  event
    .addEntityLootModifier("aquamirae:captain_cornelia")
    .randomChance(mdChance)
    .addLoot("simplyswords:whisperwind");
  // ---

  event
    .addEntityLootModifier("cataclysm:netherite_monstrosity")
    .randomChance(normalChance)
    .addLoot("simplyswords:waxweaver")
  event
    .addEntityLootModifier("cataclysm:netherite_monstrosity")
    .randomChance(normalChance)
    .addLoot("simplyswords:flamewind")
  event
    .addEntityLootModifier("cataclysm:netherite_monstrosity")
    .randomChance(highChance)
    .addLoot("simplyswords:emberlash");
  event
    .addEntityLootModifier("cataclysm:netherite_monstrosity")
    .randomChance(normalChance)
    .addLoot("simplyswords:molten_edge");
  event
    .addEntityLootModifier("cataclysm:netherite_monstrosity")
    .randomChance(normalChance)
    .addLoot("simplyswords:emberblade");     

  // ---


  event
    .addEntityLootModifier("alexscaves:hullbreaker")
    .randomChance(normalChance)
    .addLoot("simplyswords:wickpiercer");
  event
    .addEntityLootModifier("alexscaves:hullbreaker")
    .randomChance(normalChance)
    .addLoot("simplyswords:whisperwind");
  event
    .addEntityLootModifier("alexscaves:hullbreaker")
    .randomChance(normalChance)
    .addLoot("simplyswords:frostfall");
  // ---
  event
    .addEntityLootModifier("alexscaves:forsaken")
    .randomChance(normalChance)
    .addLoot("simplyswords:wickpiercer");
  event
    .addEntityLootModifier("alexscaves:forsaken")
    .randomChance(normalChance)
    .addLoot("simplyswords:watching_warglaive");    
  // --
  event
    .addEntityLootModifier("born_in_chaos_v1:lord_pumpkinhead_head")
    .randomChance(normalChance)
    .addLoot("simplyswords:hiveheart");
  event
    .addEntityLootModifier("born_in_chaos_v1:lord_pumpkinhead_head")
    .randomChance(normalChance)
    .addLoot("simplyswords:brimstone_claymore");
  event
    .addEntityLootModifier("born_in_chaos_v1:lord_pumpkinhead_head")
    .randomChance(normalChance)
    .addLoot("simplyswords:flamewind") 
  event
    .addEntityLootModifier("born_in_chaos_v1:lord_pumpkinhead_head")
    .randomChance(normalChance)
    .addLoot("simplyswords:flamewind")  
  event
    .addEntityLootModifier("born_in_chaos_v1:lord_pumpkinhead_head")
    .randomChance(normalChance)
    .addLoot("simplyswords:mjolnir");   
  // ---
  event
    .addEntityLootModifier("conjurer_illager:conjurer")
    .randomChance(normalChance)
    .addLoot("simplyswords:whisperwind");

  event
    .addEntityLootModifier("irons_spellbooks:dead_king_corpse")
    .randomChance(normalChance)
    .addLoot("simplyswords:tempest");
  event
    .addEntityLootModifier("irons_spellbooks:dead_king_corpse")
    .randomChance(normalChance)
    .addLoot("simplyswords:watching_warglaive");   
  // ---

  event
    .addEntityLootModifier("graveyard:lich")
    .randomChance(mdChance)
    .addLoot("simplyswords:thunderbrand");
  event
    .addEntityLootModifier("graveyard:lich")
    .randomChance(mdChance)
    .addLoot("simplyswords:arcanethyst")
  event
    .addEntityLootModifier("graveyard:lich")
    .randomChance(mdChance)
    .addLoot("simplyswords:icewhisper")
  event
    .addEntityLootModifier("graveyard:lich")
    .randomChance(mdChance)
    .addLoot("simplyswords:soulrender")
  // ---

  event
    .addEntityLootModifier("cataclysm:ender_guardian")
    .randomChance(normalChance)
    .addLoot("simplyswords:mjolnir");
  event
    .addEntityLootModifier("cataclysm:ender_guardian")
    .randomChance(normalChance)
    .addLoot("simplyswords:thunderbrand");
  event
    .addEntityLootModifier("cataclysm:ender_guardian")
    .randomChance(normalChance)
    .addLoot("simplyswords:stars_edge");
  event
    .addEntityLootModifier("cataclysm:ender_guardian")
    .randomChance(normalChance)
    .addLoot("simplyswords:thunderbrand");   
  //---

  event
    .addEntityLootModifier("cataclysm:ancient_remnant")
    .randomChance(mdChance)
    .addLoot("simplyswords:molten_edge");
  event
    .addEntityLootModifier("cataclysm:ancient_remnant")
    .randomChance(mdChance)
    .addLoot("simplyswords:livyatan")
  event
    .addEntityLootModifier("cataclysm:ancient_remnant")
    .randomChance(mdChance)
    .addLoot("simplyswords:stars_edge");    
  event
    .addEntityLootModifier("cataclysm:ancient_remnant")
    .randomChance(mdChance)
    .addLoot("simplyswords:flamewind") 
  event
    .addEntityLootModifier("cataclysm:ancient_remnant")
    .randomChance(mdChance)
    .addLoot("simplyswords:soulpyre");
  //---

  event
    .addEntityLootModifier("cataclysm:the_harbinger")
    .randomChance(mdChance)
    .addLoot("simplyswords:molten_edge");
  event
    .addEntityLootModifier("cataclysm:the_harbinger")
    .randomChance(mdChance)
    .addLoot("simplyswords:livyatan")   
  event
    .addEntityLootModifier("cataclysm:the_harbinger")
    .randomChance(mdChance)
    .addLoot("simplyswords:flamewind")   
  //---

  event
    .addEntityLootModifier("cataclysm:ignis")
    .randomChance(highChance)
    .addLoot("simplyswords:soulpyre");
  event
    .addEntityLootModifier("cataclysm:ignis")
    .randomChance(highChance)
    .addLoot("simplyswords:soulkeeper");
  event
    .addEntityLootModifier("cataclysm:ignis")
    .randomChance(highChance)
    .addLoot("simplyswords:stars_edge");  
  event
    .addEntityLootModifier("cataclysm:ignis")
    .randomChance(highChance)
    .addLoot("simplyswords:flamewind")  
  event
    .addEntityLootModifier("cataclysm:ignis")
    .randomChance(highChance)
    .addLoot("simplyswords:hiveheart");
  event
    .addEntityLootModifier("cataclysm:ignis")
    .randomChance(highChance)
    .addLoot("simplyswords:hearthflame");
    
  //---

  event
    .addEntityLootModifier("mutantmonsters:mutant_skeleton")
    .randomChance(normalChance)
    .addLoot("simplyswords:mjolnir");
  event
    .addEntityLootModifier("mutantmonsters:mutant_skeleton")
    .randomChance(normalChance)
    .addLoot("simplyswords:stormbringer");  
  //---
  event
    .addEntityLootModifier("mutantmonsters:mutant_enderman")
    .randomChance(normalChance)
    .addLoot("simplyswords:watching_warglaive");
  event
    .addEntityLootModifier("mutantmonsters:mutant_enderman")
    .randomChance(normalChance)
    .addLoot("simplyswords:stormbringer");  
  event
    .addEntityLootModifier("mutantmonsters:mutant_enderman")
    .randomChance(normalChance)
    .addLoot("simplyswords:wickpiercer"); 
  //--

  event
    .addEntityLootModifier("mutantmonsters:mutant_creeper")
    .randomChance(normalChance)
    .addLoot("simplyswords:mjolnir");
  event
    .addEntityLootModifier("mutantmonsters:mutant_creeper")
    .randomChance(normalChance)
    .addLoot("simplyswords:toxic_longsword");
  event
    .addEntityLootModifier("mutantmonsters:mutant_creeper")
    .randomChance(normalChance)
    .addLoot("simplyswords:stormbringer");  
  //--

  event
    .addEntityLootModifier("mutantmonsters:mutant_zombie")
    .randomChance(normalChance)
    .addLoot("simplyswords:watching_warglaive");
  event
    .addEntityLootModifier("mutantmonsters:mutant_zombie")
    .randomChance(normalChance)
    .addLoot("simplyswords:stormbringer");  
  //--

  event
    .addEntityLootModifier("bosses_of_mass_destruction:void_blossom")
    .randomChance(normalChance)
    .addLoot("simplyswords:mjolnir");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:void_blossom")
    .randomChance(normalChance)
    .addLoot("simplyswords:wickpiercer");   
  event
    .addEntityLootModifier("bosses_of_mass_destruction:void_blossom")
    .randomChance(normalChance)
    .addLoot("simplyswords:hiveheart");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:void_blossom")
    .randomChance(normalChance)
    .addLoot("simplyswords:thunderbrand");    
  //---
  event
    .addEntityLootModifier("bosses_of_mass_destruction:lich")
    .randomChance(normalChance)
    .addLoot("simplyswords:soulrender");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:lich")
    .randomChance(normalChance)
    .addLoot("simplyswords:wickpiercer");       
  event
    .addEntityLootModifier("bosses_of_mass_destruction:lich")
    .randomChance(normalChance)
    .addLoot("simplyswords:stars_edge");  
  event
    .addEntityLootModifier("bosses_of_mass_destruction:lich")
    .randomChance(normalChance)
    .addLoot("simplyswords:thunderbrand"); 
  
  //---
  event
    .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
    .randomChance(mdChance)
    .addLoot("simplyswords:twisted_blade");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
    .randomChance(mdChance)
    .addLoot("simplyswords:soulkeeper");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
    .randomChance(mdChance)
    .addLoot("simplyswords:stars_edge");     
  event
    .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
    .randomChance(mdChance)
    .addLoot("simplyswords:hiveheart");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
    .randomChance(mdChance)
    .addLoot("simplyswords:thunderbrand"); 
  //---
  event
    .addEntityLootModifier("bosses_of_mass_destruction:gauntlet")
    .randomChance(normalChance)
    .addLoot("simplyswords:molten_edge");
  event
    .addEntityLootModifier("bosses_of_mass_destruction:gauntlet")
    .randomChance(normalChance)
    .addLoot("simplyswords:livyatan")       
  event
    .addEntityLootModifier("bosses_of_mass_destruction:gauntlet")
    .randomChance(normalChance)
    .addLoot("simplyswords:stars_edge"); 
  event
    .addEntityLootModifier("bosses_of_mass_destruction:gauntlet")
    .randomChance(normalChance)
    .addLoot("simplyswords:thunderbrand"); 
   

  //---     
  event
  .addEntityLootModifier("alexscaves:luxtructosaurus")
  .randomChance(mdChance)
  .addLoot("simplyswords:hearthflame");  

event
  .addEntityLootModifier("alexscaves:luxtructosaurus")
  .randomChance(mdChance)
  .addLoot("simplyswords:emberblade");  
event
  .addEntityLootModifier("alexscaves:luxtructosaurus")
  .randomChance(mdChance)
  .addLoot("simplyswords:brimstone_claymore");
event
  .addEntityLootModifier("alexscaves:luxtructosaurus")
  .randomChance(mdChance)
  .addLoot("simplyswords:hiveheart");


//---   
event
  .addEntityLootModifier("minecraft:wither")
  .randomChance(normalChance)
  .addLoot("simplyswords:toxic_longsword"); 
event
  .addEntityLootModifier("minecraft:wither")
  .randomChance(normalChance)
  .addLoot("simplyswords:storms_edge");  
event
  .addEntityLootModifier("minecraft:wither")
  .randomChance(normalChance)
  .addLoot("simplyswords:waxweaver")   
event
  .addEntityLootModifier("minecraft:wither")
  .randomChance(normalChance)
  .addLoot("simplyswords:soulrender")
//---  
event
  .addEntityLootModifier("ars_nouveau:wilden_boss")
  .randomChance(normalChance)
  .addLoot("simplyswords:storms_edge");  
event
  .addEntityLootModifier("ars_nouveau:wilden_boss")
  .randomChance(normalChance)
  .addLoot("simplyswords:stormbringer");     
event
  .addEntityLootModifier("ars_nouveau:wilden_boss")
  .randomChance(normalChance)
  .addLoot("simplyswords:tempest");  
event
  .addEntityLootModifier("ars_nouveau:wilden_boss")
  .randomChance(normalChance)
  .addLoot("simplyswords:arcanethyst")

//---   
event
  .addEntityLootModifier("minecraft:warden")
  .randomChance(normalChance)
  .addLoot("simplyswords:watcher_claymore");  
event
  .addEntityLootModifier("minecraft:warden")
  .randomChance(normalChance)
  .addLoot("simplyswords:stars_edge");  
event
  .addEntityLootModifier("minecraft:warden")
  .randomChance(normalChance)
  .addLoot("simplyswords:waxweaver")     
event
  .addEntityLootModifier("minecraft:warden")
  .randomChance(normalChance)
  .addLoot("simplyswords:hiveheart");
event
  .addEntityLootModifier("minecraft:warden")
  .randomChance(normalChance)
  .addLoot("simplyswords:soulrender")
});
