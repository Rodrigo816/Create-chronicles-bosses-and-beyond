ServerEvents.recipes(event => {

  /*event.smithing(
    Item.of('minecraft:iron_sword', '{Unbreakable: 1}'),
    'forbidden_arcanus:darkstone_upgrade_smithing_template', 
    'ad_astra:hammer',
    'forbidden_arcanus:eternal_stella')
    .withNBT({Unbreakable:1});*/

  // added crushed magma back
  event.recipes.createCrushing([
    Item.of('2x create_things_and_misc:crushed_magma').withChance(1),
    Item.of('create_things_and_misc:crushed_magma').withChance(0.25),
  ], 'minecraft:magma_block').processingTime(100)


  // Netherrack

  let transitional = 'kubejs:incomplete_netherrack'
  event.recipes.createSequencedAssembly('4x minecraft:netherrack', 'twilightforest:deadrock', [
    event.recipes.createDeploying(transitional, [transitional, 'forbidden_arcanus:soul']),
    event.recipes.createDeploying(transitional, [transitional, 'create_things_and_misc:crushed_magma']),
    event.recipes.createDeploying(transitional, [transitional, 'minecraft:nether_wart']),
  ]).transitionalItem(transitional)
    .loops(1)
    .id('minecraft:netherrack')

  event.recipes.createMixing(('blue_skies:lunar_mud'),['blue_skies:lunar_dirt','minecraft:slime_ball'])
  event.recipes.createMixing(('blue_skies:horizonite_ingot'),['minecraft:iron_ingot','minecraft:blaze_rod'])
  event.recipes.createMixing(('minecraft:crimson_nylium'),['minecraft:netherrack','minecraft:crimson_fungus'])
  event.recipes.createMixing(('blue_skies:lunar_mud'),['blue_skies:lunar_dirt','minecraft:bone_meal'])
  event.recipes.createMixing(('blue_skies:turquoise_grass_block'),['blue_skies:turquoise_dirt','minecraft:bone_meal'])
  event.recipes.createMixing(('blue_skies:falsite_ingot'),['blue_skies:soul_fragment','minecraft:iron_ingot'])
  event.recipes.createMixing(('minecraft:warped_nylium'),['minecraft:netherrack','minecraft:warped_fungus'])

  


  // RENEWABLES
  //event.recipes.createCompacting('minecraft:calcite', ['2x minecraft:flint','minecraft:bone_block', Fluid.of('create_dd:vanilla', 150)])
  event.recipes.createMixing(('minecraft:end_stone'),['minecraft:stone','minecraft:chorus_fruit']).heated()
  event.recipes.createDeploying('minecraft:glow_ink_sac', ['minecraft:ink_sac', 'minecraft:glow_berries'])
  event.recipes.createCompacting('minecraft:ink_sac', ['minecraft:dried_kelp', 'minecraft:black_dye'])
  
  event.recipes.createMixing('minecraft:basalt',['minecraft:cobblestone','create:limestone']) 

  // Quark
  event.recipes.createCompacting('quark:jasper', ['2x minecraft:flint','minecraft:quartz', Fluid.of('minecraft:lava', 100)])
  event.recipes.createCompacting('quark:shale', ['2x minecraft:flint','minecraft:clay', Fluid.of('minecraft:lava', 100)])
  event.recipes.createCompacting('quark:myalite', ['2x minecraft:flint','minecraft:end_stone', Fluid.of('minecraft:lava', 100)])

  //tuff
  event.recipes.createMixing('minecraft:tuff',['quark:myalite','create_dd:ember_alloy','minecraft:granite']).superheated()

  //glowstone
  event.recipes.createCrushing([
    Item.of('minecraft:glowstone_dust').withChance(0.1),
    Item.of('minecraft:glowstone_dust').withChance(0.04),
  ], 'minecraft:soul_sand').processingTime(100)

  //moss
  event.recipes.createCompacting('minecraft:moss_block', ['minecraft:cobblestone','9x minecraft:vine'])

  // convert ventium ingot to iron ingot via splashingh
  event.recipes.createSplashing('minecraft:iron_ingot', 'blue_skies:ventium_ingot');

  //dripstone
  // RENEWABLES
  //event.recipes.createCompacting('minecraft:dripstone_block', ['2x minecraft:flint','minecraft:dirt', Fluid.of('minecraft:water', 100)])

  //enchant golden apple
  //event.recipes.createCompacting('minecraft:enchanted_golden_apple', ['minecraft:golden_apple','4x minecraft:gold_block', 'create:experience_block']).superheated()  
  

  //Oxadized Stuff
  event.recipes.createSplashing('minecraft:exposed_copper', 'minecraft:copper_block');
  event.recipes.createSplashing('minecraft:weathered_copper', 'minecraft:exposed_copper');
  event.recipes.createSplashing('minecraft:oxidized_copper', 'minecraft:weathered_copper');
  
  event.recipes.createSplashing('create:exposed_copper_shingle_slab', 'create:copper_shingle_slab');
  event.recipes.createSplashing('create:weathered_copper_shingle_slab', 'create:exposed_copper_shingle_slab');
  event.recipes.createSplashing('create:oxidized_copper_shingle_slab', 'create:weathered_copper_shingle_slab');
  
  event.recipes.createSplashing('create:exposed_copper_shingle_stairs', 'create:copper_shingle_stairs');
  event.recipes.createSplashing('create:weathered_copper_shingle_stairs', 'create:exposed_copper_shingle_stairs');
  event.recipes.createSplashing('create:oxidized_copper_shingle_stairs', 'create:weathered_copper_shingle_stairs');

  event.recipes.createSplashing('create:exposed_copper_shingles', 'create:copper_shingles');
  event.recipes.createSplashing('create:weathered_copper_shingles', 'create:exposed_copper_shingles');
  event.recipes.createSplashing('create:oxidized_copper_shingles', 'create:weathered_copper_shingles');
  
  event.recipes.createSplashing('create:exposed_copper_tile_slab', 'create:copper_tile_slab');
  event.recipes.createSplashing('create:weathered_copper_tile_slab', 'create:exposed_copper_tile_slab');
  event.recipes.createSplashing('create:oxidized_copper_tile_slab', 'create:weathered_copper_tile_slab');
  
  event.recipes.createSplashing('create:exposed_copper_tile_stairs', 'create:copper_tile_stairs');
  event.recipes.createSplashing('create:weathered_copper_tile_stairs', 'create:exposed_copper_tile_stairs');
  event.recipes.createSplashing('create:oxidized_copper_tile_stairs', 'create:weathered_copper_tile_stairs');
  
  event.recipes.createSplashing('create:exposed_copper_tiles', 'create:copper_tiles');
  event.recipes.createSplashing('create:weathered_copper_tiles', 'create:exposed_copper_tiles');
  event.recipes.createSplashing('create:oxidized_copper_tiles', 'create:weathered_copper_tiles');
  
  event.recipes.createSplashing('minecraft:exposed_cut_copper', 'minecraft:cut_copper');
  event.recipes.createSplashing('minecraft:weathered_cut_copper', 'minecraft:exposed_cut_copper');
  event.recipes.createSplashing('minecraft:oxidized_cut_copper', 'minecraft:weathered_cut_copper');
  
  event.recipes.createSplashing('minecraft:exposed_cut_copper_slab', 'minecraft:cut_copper_slab');
  event.recipes.createSplashing('minecraft:weathered_cut_copper_slab', 'minecraft:exposed_cut_copper_slab');
  event.recipes.createSplashing('minecraft:oxidized_cut_copper_slab', 'minecraft:weathered_cut_copper_slab');

  event.recipes.createSplashing('minecraft:exposed_cut_copper_stairs', 'minecraft:cut_copper_stairs');
  event.recipes.createSplashing('minecraft:weathered_cut_copper_stairs', 'minecraft:exposed_cut_copper_stairs');
  event.recipes.createSplashing('minecraft:oxidized_cut_copper_stairs', 'minecraft:weathered_cut_copper_stairs');
  
  event.recipes.createSplashing('quark:exposed_cut_copper_vertical_slab', 'quark:cut_copper_vertical_slab');
  event.recipes.createSplashing('quark:weathered_cut_copper_vertical_slab', 'quark:exposed_cut_copper_vertical_slab');
  event.recipes.createSplashing('quark:oxidized_cut_copper_vertical_slab', 'quark:weathered_cut_copper_vertical_slab');



  const equipmentRecyclingData = {
    diamond: {
      'minecraft:diamond_pickaxe': [0.30, 0.10],
      'minecraft:diamond_shovel': [0.20],
      'minecraft:diamond_axe': [0.30, 0.10],
      'minecraft:diamond_hoe': [0.20],
      'minecraft:diamond_sword': [0.30, 0.03],
      'minecraft:diamond_helmet': [1, 0.10, 0.05],
      'minecraft:diamond_chestplate': [1, 0.30, 0.10, 0.05],
      'minecraft:diamond_leggings': [1, 0.15, 0.05],
      'minecraft:diamond_boots': [1, 0.05],
      'twilightforest:diamond_minotaur_axe': [0.80, 0.20],
      'simplyswords:diamond_longsword': [0.20],
      'simplyswords:diamond_twinblade': [0.20],
      'simplyswords:diamond_rapier': [0.20],
      'simplyswords:diamond_katana': [0.20],
      'simplyswords:diamond_sai': [0.20],
      'simplyswords:diamond_spear': [0.20],
      'simplyswords:diamond_glaive': [0.20],
      'simplyswords:diamond_warglaive': [0.20],
      'simplyswords:diamond_cutlass': [0.20],
      'simplyswords:diamond_claymore': [0.30],
      'simplyswords:diamond_greathammer': [0.30],
      'simplyswords:diamond_greataxe': [0.30],
      'simplyswords:diamond_chakram': [0.30],
      'simplyswords:diamond_scythe': [0.30],
      'simplyswords:diamond_halberd': [0.30],
      'aether:diamond_gloves': [0.20]
    },
    iron: {
      'minecraft:iron_pickaxe': [0.60, 0.10],
      'minecraft:iron_shovel': [0.30],
      'minecraft:iron_axe': [0.60, 0.10],
      'minecraft:iron_hoe': [0.40],
      'minecraft:iron_sword': [0.60, 0.03],
      'minecraft:iron_helmet': [1, 0.10, 0.05],
      'minecraft:iron_chestplate': [1, 0.50, 0.10, 0.05],
      'minecraft:iron_leggings': [1, 0.30, 0.05],
      'minecraft:iron_boots': [1, 0.20],
      'simplyswords:iron_longsword': [0.60],
      'simplyswords:iron_twinblade': [0.60],
      'simplyswords:iron_rapier': [0.60],
      'simplyswords:iron_katana': [0.60],
      'simplyswords:iron_sai': [0.60],
      'simplyswords:iron_spear': [0.60],
      'simplyswords:iron_glaive': [0.60],
      'simplyswords:iron_warglaive': [0.50],
      'simplyswords:iron_cutlass': [0.50],
      'simplyswords:iron_claymore': [0.90],
      'simplyswords:iron_greathammer': [0.70],
      'simplyswords:iron_greataxe': [0.70],
      'simplyswords:iron_chakram': [0.70],
      'simplyswords:iron_scythe': [0.70],
      'simplyswords:iron_halberd': [0.70],
      'aether:iron_gloves': [0.40]
    },
    gold: {
      'minecraft:golden_pickaxe': [0.50, 0.05],
      'minecraft:golden_shovel': [0.50],
      'minecraft:golden_axe': [0.50, 0.05],
      'minecraft:golden_hoe': [0.40],
      'minecraft:golden_sword': [0.50, 0.02],
      'minecraft:golden_helmet': [0.80, 0.10, 0.05],
      'minecraft:golden_chestplate': [0.80, 0.40, 0.10, 0.05],
      'minecraft:golden_leggings': [0.80, 0.30, 0.05],
      'minecraft:golden_boots': [0.80, 0.20],
      'twilightforest:gold_minotaur_axe': [0.80, 0.20],
      'simplyswords:gold_longsword': [0.40],
      'simplyswords:gold_twinblade': [0.40],
      'simplyswords:gold_rapier': [0.40],
      'simplyswords:gold_katana': [0.40],
      'simplyswords:gold_sai': [0.40],
      'simplyswords:gold_spear': [0.40],
      'simplyswords:gold_glaive': [0.40],
      'simplyswords:gold_warglaive': [0.40],
      'simplyswords:gold_cutlass': [0.40],
      'simplyswords:gold_claymore': [0.60],
      'simplyswords:gold_greathammer': [0.60],
      'simplyswords:gold_greataxe': [0.50],
      'simplyswords:gold_chakram': [0.50],
      'simplyswords:gold_scythe': [0.50],
      'simplyswords:gold_halberd': [0.50],
      'aether:golden_gloves': [0.40]
    },
    twilightIronWood: {
      'twilightforest:ironwood_pickaxe': [0.50, 0.05],
      'twilightforest:ironwood_shovel': [0.50],
      'twilightforest:ironwood_axe': [0.50, 0.05],
      'twilightforest:ironwood_hoe': [0.40],
      'twilightforest:ironwood_sword': [0.50, 0.02],
      'twilightforest:ironwood_helmet': [0.80, 0.10, 0.05],
      'twilightforest:ironwood_chestplate': [0.80, 0.40, 0.10, 0.05],
      'twilightforest:ironwood_leggings': [0.80, 0.30, 0.05],
      'twilightforest:ironwood_boots': [0.80, 0.20],
    },
    twilightKnightMetal: {
      'twilightforest:knightmetal_pickaxe': [0.50, 0.05],
      'twilightforest:knightmetal_axe': [0.50, 0.05],
      'twilightforest:knightmetal_sword': [0.50, 0.02],
      'twilightforest:knightmetal_helmet': [0.80, 0.10, 0.05],
      'twilightforest:knightmetal_chestplate': [0.80, 0.40, 0.10, 0.05],
      'twilightforest:knightmetal_leggings': [0.80, 0.30, 0.05],
      'twilightforest:knightmetal_boots': [0.80, 0.20],
    },
    twilightFiery: {
      'twilightforest:fiery_pickaxe': [0.50, 0.05],
      'twilightforest:fiery_sword': [0.50, 0.02],
      'twilightforest:fiery_helmet': [0.80, 0.10, 0.05],
      'twilightforest:fiery_chestplate': [0.80, 0.40, 0.10, 0.05],
      'twilightforest:fiery_leggings': [0.80, 0.30, 0.05],
      'twilightforest:fiery_boots': [0.80, 0.20],
    },
  };

  const recycleEquipment = (inputItem, outputItem, chances) => {
    let outputs = chances.map(chance => Item.of(outputItem).withChance(chance));
    event.recipes.createCrushing(outputs, Item.of(inputItem)) 
  }

  const processRecyclingData = (event, material, data) => {
    Object.entries(data).forEach(([item, chances]) => {
      recycleEquipment(item, material, chances);
    });
  };
  
  // equipment recycling
  processRecyclingData(event, 'minecraft:diamond', equipmentRecyclingData.diamond);
  processRecyclingData(event, 'minecraft:iron_ingot', equipmentRecyclingData.iron);
  processRecyclingData(event, 'minecraft:gold_ingot', equipmentRecyclingData.gold);
  processRecyclingData(event, 'twilightforest:ironwood_ingot', equipmentRecyclingData.twilightIronWood);
  processRecyclingData(event, 'twilightforest:knightmetal_ingot', equipmentRecyclingData.twilightKnightMetal);
  processRecyclingData(event, 'twilightforest:fiery_ingot', equipmentRecyclingData.twilightFiery);

  //Twilight Forest Stuff
  event.recipes.createCompacting('4x twilightforest:mazestone', ['4x twilightforest:torchberries','twilightforest:knightmetal_ingot', 'minecraft:cobblestone'])
  event.recipes.createCompacting('twilightforest:underbrick', ['twilightforest:torchberries', 'create:limestone', 'minecraft:bricks'])
	event.recipes.createCompacting('twilightforest:deadrock', ['minecraft:stone', 'twilightforest:torchberries', '6x minecraft:charcoal'])
  event.recipes.createMixing('twilightforest:aurora_block',[
		'minecraft:ice',
		'minecraft:ender_pearl',
    Fluid.of("create_dd:shimmer", 300),
	])
  event.recipes.createMixing('twilightforest:castle_brick',[
		'minecraft:bricks',
		'twilightforest:ironwood_ingot',
		'3x create:copper_nugget',
	])
  event.recipes.createMixing('twilightforest:fluffy_cloud',[
		'4x minecraft:feather',
		'4x minecraft:white_wool',
		'minecraft:packed_ice',
	])
  event.recipes.createMixing('2x twilightforest:raw_ironwood',[
		'4x minecraft:bone_meal',
    '4x twilightforest:canopy_log',
    '2x minecraft:iron_ingot',
		'2x minecraft:gold_nugget',
  ])


  // sulfur unify
  event.replaceInput({},'alexscaves:sulfur_dust','tfmg:sulfur_dust');
})