LootJS.modifiers((event) => {

  const DRYGMY_UUID = "[I;1946194541,268914259,-2012236738,1743961897]";
  const onlyDrygmy = (builder) =>
  builder.matchKiller((entity) => entity.nbt(`{UUID:${DRYGMY_UUID}}`));
  onlyDrygmy(event.addEntityLootModifier("minecraft:chicken")).addLoot(
    "minecraft:egg",
  );

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
  const dim = [
    'dimdungeons:chests/chestloot_advanced_easy',
    'dimdungeons:chests/chestloot_basic_easy',
    'dimdungeons:chests/chestloot_crazy',
    'dimdungeons:chests/chestloot_lucky',
    'dimdungeons:chests/kit_random',
    'dimdungeons:chests/chestloot_advanced_hard',
    'dimdungeons:chests/chestloot_basic_hard'
  ];

  const ribbits = [
    'ribbits:chests/fisherman_main',
    'ribbits:chests/merchant',
    'ribbits:chests/nitwit',
    'ribbits:chests/sorcerer',
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // dimensional
  dim.forEach(lootTable => {
    event.addLootTableModifier(lootTable)
    .addWeightedLoot(
      [1, 8],
      [
        Item.of("kubejs:rotation_mechanism").withChance(7)
      ]
    );
  });

  // ribbits
  ribbits.forEach(lootTable => {
    event.addLootTableModifier(lootTable)
    .addWeightedLoot(
      [1, 5],
      [
        Item.of("kubejs:rotation_mechanism").withChance(7)
      ]
    );
  });

  // DimDungeons
  villageLootTables.forEach(lootTable => {
    event.addLootTableModifier(lootTable)
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("kubejs:rotation_mechanism").withChance(6)
      ]
    );
  });

  event
  .addEntityLootModifier("alexscaves:luxtructosaurus")
  .addLoot(Item.of("10x forbidden_arcanus:nipa"));  


  

  //Dragon Chests - LIGHTNING
  event.addLootTableModifier("mowziesmobs:chests/umvuthana_grove_chest")
  .addWeightedLoot(
    [1, 8],
    [
      Item.of("2x create_dd:calculation_mechanism").withChance(4),
      Item.of("2x minecraft:diamond").withChance(1),
    ]
  )
  // ALL WHEN DUGEONS ARISE CHEST'S
  event
    .addLootTableModifier(/dungeons_arise:chests.*/)
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("3x kubejs:rotation_mechanism").withChance(5),
        Item.of("2x minecraft:iron_ingot").withChance(3),
        Item.of("2x minecraft:comparator").withChance(1),
        Item.of("2x minecraft:redstone").withChance(2),
        Item.of("2x create:zinc_ingot").withChance(0.05),
        Item.of("2x minecraft:copper_ingot").withChance(2),
      ]
  )

  //Dragon Chests - LIGHTNING
  event.addLootTableModifier("iceandfire:chest/lightning_dragon_roost")
  .addWeightedLoot(
    [1, 3],
    [
      Item.of("5x create_dd:integrated_circuit").withChance(5),
      Item.of("1x paraglider:spirit_orb").withChance(0.05),
    ]
  )
  .removeLoot('iceandfire:silver_ingot');

  event.addLootTableModifier("iceandfire:chest/lightning_dragon_female_cave")
  .addWeightedLoot(
    [1, 3],
    [
      Item.of("10x create_dd:integrated_circuit").withChance(5),
      Item.of("1x paraglider:spirit_orb").withChance(1),
    ]
  )
  .removeLoot('iceandfire:silver_ingot');

  event.addLootTableModifier("iceandfire:chest/lightning_dragon_male_cave")
  .addWeightedLoot(
    [1, 3],
    [
      Item.of("10x create_dd:integrated_circuit").withChance(5),
      Item.of("1x paraglider:spirit_orb").withChance(1),
    ]
  )
  .removeLoot('iceandfire:silver_ingot');

  //Dragon Chests - FIRE
  event.addLootTableModifier("iceandfire:chest/fire_dragon_roost")
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("10x kubejs:rotation_mechanism").withChance(5),
        Item.of("1x paraglider:spirit_orb").withChance(0.06),
        Item.of("5x minecraft:redstone").withChance(5),
        Item.of("5x minecraft:quartz").withChance(5),
        Item.of("5x minecraft:copper_ingot").withChance(5),
        Item.of("5x create:zinc_ingot").withChance(5),
        Item.of("10x quark:soul_bead").withChance(4),
      ]
    )
    .removeLoot('iceandfire:silver_ingot');

  event.addLootTableModifier("iceandfire:chest/fire_dragon_female_cave")
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("10x kubejs:rotation_mechanism").withChance(5),
        Item.of("1x paraglider:spirit_orb").withChance(0.1),
        Item.of("5x minecraft:redstone").withChance(5),
        Item.of("5x minecraft:quartz").withChance(5),
        Item.of("5x minecraft:copper_ingot").withChance(5),
        Item.of("5x create:zinc_ingot").withChance(5),
        Item.of("10x quark:soul_bead").withChance(4),
      ]
    )
    .removeLoot('iceandfire:silver_ingot');

  event.addLootTableModifier("iceandfire:chest/fire_dragon_male_cave")
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("10x kubejs:rotation_mechanism").withChance(5),
        Item.of("1x paraglider:spirit_orb").withChance(0.1),
        Item.of("5x minecraft:redstone").withChance(5),
        Item.of("5x minecraft:quartz").withChance(5),
        Item.of("5x minecraft:copper_ingot").withChance(5),
        Item.of("5x create:zinc_ingot").withChance(5),
        Item.of("10x quark:soul_bead").withChance(4),
      ]
    )
    .removeLoot('iceandfire:silver_ingot');

  //Dragon Chests - ICE
  event.addLootTableModifier("iceandfire:chest/ice_dragon_roost")
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("10x kubejs:rotation_mechanism").withChance(5),
        Item.of("1x paraglider:spirit_orb").withChance(0.06),
        Item.of("5x minecraft:redstone").withChance(5),
        Item.of("5x minecraft:quartz").withChance(5),
        Item.of("5x minecraft:copper_ingot").withChance(5),
        Item.of("5x create:zinc_ingot").withChance(5),
        Item.of("10x quark:soul_bead").withChance(4),
      ]
    )
    .removeLoot('iceandfire:silver_ingot');

  event.addLootTableModifier("iceandfire:chest/ice_dragon_female_cave")
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("10x kubejs:rotation_mechanism").withChance(5),
        Item.of("1x paraglider:spirit_orb").withChance(0.1),
        Item.of("5x minecraft:redstone").withChance(5),
        Item.of("5x minecraft:quartz").withChance(5),
        Item.of("5x minecraft:copper_ingot").withChance(5),
        Item.of("5x create:zinc_ingot").withChance(5),
        Item.of("10x quark:soul_bead").withChance(4),
      ]
    )
    .removeLoot('iceandfire:silver_ingot');
  event.addLootTableModifier("iceandfire:chest/ice_dragon_male_cave")
    .addWeightedLoot(
      [1, 3],
      [
        Item.of("10x kubejs:rotation_mechanism").withChance(5),
        Item.of("1x paraglider:spirit_orb").withChance(0.1),
        Item.of("5x minecraft:redstone").withChance(5),
        Item.of("5x minecraft:quartz").withChance(5),
        Item.of("5x minecraft:copper_ingot").withChance(5),
        Item.of("5x create:zinc_ingot").withChance(5),
        Item.of("10x quark:soul_bead").withChance(4),
      ]
    )
    .removeLoot('iceandfire:silver_ingot');

  //Spirits Orbs
  event.addLootTableModifier("irons_spellbooks:chests/catacombs/crypt_loot")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(2),
    ]
  );

  //starlit
  event.addLootTableModifier("blue_skies:loot_bags/starlit_crusher/common")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(0.02),
      Item.of("20x kubejs:rotation_mechanism").withChance(5),
    ]
  );

  event.addLootTableModifier("blue_skies:loot_bags/starlit_crusher/uncommon")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(0.02),
      Item.of("25x kubejs:rotation_mechanism").withChance(5),
    ]
  );

  event.addLootTableModifier("blue_skies:loot_bags/starlit_crusher/rare")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(0.02),
      Item.of("30x kubejs:rotation_mechanism").withChance(8),
    ]
  );

  //arachnarch
  event.addLootTableModifier("blue_skies:loot_bags/arachnarch/common")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(0.02),
      Item.of("20x kubejs:rotation_mechanism").withChance(5),
    ]
  );

  event.addLootTableModifier("blue_skies:loot_bags/arachnarch/uncommon")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(0.02),
      Item.of("25x kubejs:rotation_mechanism").withChance(5),
    ]
  );

  event.addLootTableModifier("blue_skies:loot_bags/arachnarch/rare")
  .addWeightedLoot(
    [1, 2],
    [
      Item.of("paraglider:spirit_orb").withChance(0.02),
      Item.of("30x kubejs:rotation_mechanism").withChance(8),
    ]
  );


  //Aether Loot
  event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_loot")
  .addWeightedLoot(
    [1, 3],
    [
      Item.of("kubejs:rotation_mechanism",4).withChance(5),
      Item.of("create:zinc_ingot",5).withChance(5)
    ]
  );
  event.addLootTableModifier("aether:chests/dungeon/gold/gold_dungeon_treasure")
  .addWeightedLoot(
    [1, 3],
    [
      Item.of("create:zinc_ingot",15).withChance(5)
    ]
  );
  event.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_loot")
  .addWeightedLoot(
    [1, 3],
    [
      Item.of("kubejs:rotation_mechanism",8).withChance(5),
      Item.of("create:zinc_ingot",10).withChance(7)
    ]
  );

  // Twilight Loot
  event
    .addEntityLootModifier("twilightforest:snow_queen")
    .addWeightedLoot(
      [1, 4],
      [Item.of("kubejs:rotation_mechanism",15).withChance(50)]
    );

  event
    .addEntityLootModifier("twilightforest:hydra")
    .addWeightedLoot(
      [1, 4],
      [Item.of("kubejs:rotation_mechanism",8).withChance(50),Item.of("minecraft:redstone",15).withChance(70)]
    );

  event
    .addEntityLootModifier("twilightforest:ur_ghast")
    .addWeightedLoot(
      [1, 4],
      [Item.of("kubejs:rotation_mechanism",8).withChance(50),Item.of("minecraft:quartz",15).withChance(70)]
    );

  event
    .addEntityLootModifier("twilightforest:naga")
    .addWeightedLoot(
      [1, 3],
      [Item.of("kubejs:rotation_mechanism",6).withChance(50)]
    );

  event
    .addEntityLootModifier("twilightforest:snow_queen")
    .addWeightedLoot(
      [1, 3],
      [Item.of("kubejs:rotation_mechanism",10).withChance(50)]
    );      
  /*event
    .addEntityLootModifier("twilightforest:hydra")
    .randomChance(normalChance)
    .addLoot("simplyswords:frostfall")

  event
    .addEntityLootModifier("twilightforest:naga")
    .randomChance(normalChance)
    .addLoot("simplyswords:frostfall")

  event
    .addEntityLootModifier("twilightforest:snow_queen")
    .randomChance(normalChance)
    .addLoot("simplyswords:frostfall")*/





  //corail tombstone
  event
    .addLootTypeModifier(LootType.ENTITY)
    .removeLoot('tombstone:grave_dust')
  event
    .addLootTypeModifier(LootType.ENTITY)
    .removeLoot('tombstone:essence_of_undeath')  
  event
    .addLootTypeModifier(LootType.ENTITY)
    .removeLoot('tombstone:soul_receptacle')  
  event
    .addLootTypeModifier(LootType.FISHING)
    .removeLoot('tombstone:grave_dust')
  
  //Space
  event
    .addLootTableModifier("ad_astra:chests/village/moon/blacksmith")
    .addWeightedLoot(
      [1,2],
      [
        Item.of("create_dd:refined_radiance",10).withChance(70),
        Item.of("minecraft:diamond",5).withChance(70),
      ]
      );
  event
    .addLootTableModifier("ad_astra:chests/village/moon/house")
    .addWeightedLoot(
      [1,2],
      [
        Item.of("create_dd:refined_radiance",10).withChance(60),
        Item.of("minecraft:diamond",5).withChance(30),
      ]
      );  
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
    .randomChance(mdChance)
    .addLoot("simplyswords:icewhisper")
  event
    .addEntityLootModifier("cataclysm:the_leviathan")
    .randomChance(mdChance)
    .addLoot("simplyswords:frostfall");
  event
    .addEntityLootModifier("cataclysm:the_leviathan")
    .randomChance(mdChance)
    .addLoot("simplyswords:whisperwind");   
  event
    .addEntityLootModifier("cataclysm:the_leviathan")
    .randomChance(mdChance)
    .addLoot("simplyswords:watching_warglaive"); 
  event
    .addEntityLootModifier("cataclysm:the_leviathan")
    .randomChance(mdChance)
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
 /* event
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
    .addLoot("simplyswords:whisperwind");*/
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
  event
    .addEntityLootModifier("alexscaves:forsaken")
    .randomChance(normalChance)
    .addLoot("simplyswords:tempest");
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
    .addLoot("simplyswords:mjolnir");   
  // ---
  event
    .addEntityLootModifier("conjurer_illager:conjurer")
    .randomChance(normalChance)
    .addLoot("simplyswords:whisperwind");

  event
    .addEntityLootModifier("conjurer_illager:conjurer")
    .randomChance(0.20)
    .addLoot("simplyswords:tempest");
  event
    .addEntityLootModifier("conjurer_illager:conjurer")
    .randomChance(0.20)
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
    .randomChance(0.01)
    .addLoot("simplyswords:watching_warglaive");
  event
    .addEntityLootModifier("mutantmonsters:mutant_enderman")
    .randomChance(0.01)
    .addLoot("simplyswords:stormbringer");  
  event
    .addEntityLootModifier("mutantmonsters:mutant_enderman")
    .randomChance(0.01)
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
  .addLoot("simplyswords:soulrender");

event
  .addEntityLootModifier("alexscaves:magnetron")
  .randomChance(normalChance)
  .addLoot("simplyswords:flamewind")  
});

