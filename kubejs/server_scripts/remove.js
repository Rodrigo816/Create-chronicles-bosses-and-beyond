// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let CR = (id, x) => MOD("create", id, x)
let CRA = (id, x) => MOD("createaddition", id, x)
let CRDD = (id, x) => MOD("create_dd", id, x)
let CRTM = (id, x) => MOD("create_things_and_misc", id, x)
let CRSA = (id, x) => MOD("create_sa", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let CI = (id, x) => MOD("createindustry", id, x)
let IF = (id, x) => MOD("iceandfire", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)
let ASTRA = (id, x) => MOD("ad_astra", id, x)
let BS = (id, x) => MOD("blue_skies", id, x)
let TFMG= (id, x) => MOD("tfmg", id, x)
let FA= (id, x) => MOD("forbidden_arcanus", id, x)
let IS= (id, x) => MOD("irons_spellbooks", id, x)
let HNN= (id, x) => MOD("hostilenetworks", id, x)
let CHAOS= (id, x) => MOD("born_in_chaos_v1", id, x)


ServerEvents.recipes(event => {


    //Remove by recipe ID
    [
        'irons_spellbooks:lesser_spell_slot_upgrade',
        'create_dd:acompat/createaddition/charging/overcharge_alloy',
        'forbidden_arcanus:arcane_crystal_dust',
        'ars_nouveau:glyph_animate_block',
        'ars_nouveau:burst',
        'twilightforest:uncrafting_table',
        'explorerscompass:explorers_compass',
        'create:crafting/palettes/scorchia',
        IS('wayward_compass'),
        CRDD('crushing/potassic_recycling'),
        CRDD('crushing/potassic'),
         //Chapter 1
        ASTRA('recipes/hammering/iron_plate'),
        CR('crafting/materials/andesite_alloy_from_zinc'),
        CR('compacting/andesite_from_flint'),
        IF('crackled_to_gravel'),
        IF('furnace/frozen_gravel'),
        MC('andesite'),
        ARS('manipulation_essence_to_andesite'),
        CRDD('industrial_iron/andesite_alloy_mixing'),
        CR('milling/andesite'),
        // CH2
        CRSA('hydraulic_engine_recipe'),
        CR('crafting/kinetics/belt_connector'),
        // Brassa
        CRDD('industrial_iron/andesite_alloy_mixing'),
        CR('crafting/materials/rose_quartz'),
        CR('crushing/diorite_recycling'),
        CR('crushing/diorite'),
        CR('splashing/crushed_raw_gold'),
        CR('sequenced_assembly/precision_mechanism'),
        CRDD('sequenced_assembly/inductive_mechanism'),
        CRDD('sequenced_assembly/logistic_mechanism'),
        CRSA('block_picker'),

        // Locomotive
        'alexscaves:metal_rebar',
        // Steel
        CR('blasting/limestone'),
        CR('haunting/glow_ink_sac'),
        CRDD('smelting/gabbro'),
        CR('haunting/blackstone'),
        CR('filling/calcite'),
        'forbidden_arcanus:enchanted_golden_apple',
        TFMG('sequenced_assembly/aluminum_ingot'),
        'epicsamurai:steel_ingot_create_compat',

        // Oil
        TFMG('sequenced_assembly/aluminum_ingot'),
        'toms_storage:adv_wireless_terminal',
        // Soul Sand Procesing
        CR('haunting/soul_sand'),
        ARS('conjuration_essence_to_soul_sand'),
        HNN('living_matter/hellish/soul_sand'),
        CHAOS('solsendk'),
        // Blaze Rod
       CRDD('crafting/diamond_shard_compacting'),
       CRDD('superheating/diamond_shard'),

       // Neural Network
       HNN('living_matter/overworldian/gunpower'),
       HNN('living_matter/overworldian/iron_ingot'),
       HNN('living_matter/hellish/blaze_rod'),
       HNN('living_matter/hellish/blaze_powder'),
       HNN('living_matter/hellish/gold_ingot'),
       HNN('living_matter/hellish/nether_wart'),

       CRDD('mixing/hot_chocolate'),
       CRDD('mixing/chocolate_milkshake'),
       CRDD('mixing/vanilla_milkshake'),

       // NASA
       ASTRA('nasa_workbench/tier_1_rocket'),
       ASTRA('nasa_workbench/tier_2_rocket'),
       ASTRA('nasa_workbench/tier_3_rocket'),
       ASTRA('nasa_workbench/tier_4_rocket'),
       ASTRA('recipes/compressor'),
       ASTRA('recipes/space_helmet'),
       ASTRA('recipes/space_suit'),
       ASTRA('recipes/space_pants'),
       ASTRA('recipes/space_boots'),
       //

       // CHP9
       AE2('transform/entangled_singularity_from_pearl'),
       CRDD('mechanical_crafting/shimmer_bucket'),
       CRDD('mixing/chromatic_compound'),
       CRDD('sequenced_assembly/calculation_mechanism'),
       CRDD('sequenced_assembly/integrated_circuit'),
       'create_connected:sequenced_assembly/control_chip',
       //mys conversion
       CR('conversion_4'),
       CR('conversion_7'),
       CR('conversion_8'),
       //netherack
       CRA('mixing/netherrack'),
       CRSA('netherrack_recipe'),

       // AE2
       AE2('transform/fluix_crystals'),
       AE2('transform/fluix_crystal'),
       AE2('charger/guide'),
       AE2('charger/meteorite_compass'),
       AE2('charger/charged_certus_quartz_crystal'),
       CR('compat/ae2/milling/sky_stone_block'),

       CR('fil_minecraft_bucket_with_create_dd_hot_chocolate'),
       CR('empty_create_dd_hot_chocolate_bucket_of_create_dd_hot_chocolate'),
       // remove gunpowder
       HNN('living_matter/overworldian/gunpowder'),
       'born_in_chaos_v1:phantom_powder_k',
       'alexscaves:gunpowder_from_sulfur',
       'create:splashing/crushed_raw_zinc',
       'create:filling/gunpowder'
    ].forEach((recipeID) => event.remove({id: recipeID}));

    //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
    [
        // Renewable Ores
        'create_dd:asurine_cobble',
        'create_dd:veridium_cobble',
        'create_dd:crimsite_cobble',
        'create_dd:ochrum_cobble',
        'create_dd:potassic_cobble',
        //CRDD('industrial_iron_ingot'),
        //CRDD('steel_ingot'),
        CRDD('industrial_iron_nugget'),
        CRDD('integrated_mechanism'),
        AE2('small_quartz_bud'),
        CRDD('inductive_mechanism'),
        CR('asurine'),
        CRDD('shadow_steel'),
        CRDD('blaze_gold'),
        ASTRA('hammer'),
        AE2('condenser'),
        'blue_skies:alchemy_table',
    ].forEach((ingredientID) => event.remove({input: ingredientID}));
    
    //Remove by item ID
    [
        'constructionwand:infinity_wand',
      //  'create_dd:forest_ravager',
      //  'create_dd:deforester_saw',
         AE2('certus_quartz_crystal'),
         CRDD('industrial_iron_ingot'),
         CRDD('steel_ingot'),
         CRDD('industrial_iron_nugget'),
         CRDD('integrated_mechanism'),
         MC('soul_sand'),
         AE2('small_quartz_bud'),
         'ad_astra:fuel',
         CRDD('vanilla_milkshake'),
         CR('scoria'),
         ASTRA('nasa_workbench'),
         AE2('white_lumen_paint_ball'),
         AE2('light_gray_lumen_paint_ball'),
         AE2('gray_lumen_paint_ball'),
         AE2('pink_lumen_paint_ball'),
         AE2('red_lumen_paint_ball'),
         AE2('orange_lumen_paint_ball'),
         AE2('yellow_lumen_paint_ball'),
         AE2('lime_lumen_paint_ball'),
         AE2('green_lumen_paint_ball'),
         AE2('cyan_lumen_paint_ball'),
         AE2('light_blue_lumen_paint_ball'),
         AE2('blue_lumen_paint_ball'),
         AE2('purple_lumen_paint_ball'),
         AE2('magenta_lumen_paint_ball'),
         AE2('brown_lumen_paint_ball'),
         AE2('black_lumen_paint_ball'),
         AE2('matter_ball'),
         CRDD('shmimmer'),
         CRDD('shmimmer_bucket'),
         AE2('white_paint_ball'),
         AE2('light_gray_paint_ball'),
         AE2('gray_paint_ball'),
         AE2('pink_paint_ball'),
         AE2('red_paint_ball'),
         AE2('orange_paint_ball'),
         AE2('yellow_paint_ball'),
         AE2('lime_paint_ball'),
         AE2('green_paint_ball'),
         AE2('cyan_paint_ball'),
         AE2('light_blue_paint_ball'),
         AE2('blue_paint_ball'),
         AE2('purple_paint_ball'),
         AE2('magenta_paint_ball'),
         AE2('brown_paint_ball'),
         AE2('black_paint_ball'),
         CRDD('shadow_steel'),
         CRDD('blaze_gold'),
         AE2('silicon'),
         'aeinfinitybooster:infinity_card',
         'aeinfinitybooster:dimension_card',
         AE2('printed_calculation_processor'),
         AE2('printed_engineering_processor'),
         AE2('printed_logic_processor'),
         AE2('growth_accelerator'),
         'waystones:warp_dust',
         ASTRA('coal_generator'),
         ASTRA('fuel_refinery'),
         AE2('condenser'),
         AE2('charger'),
         'moped:tiny_copper_moped_item',
         'aquamirae:divider',
         'aquamirae:terrible_sword',
         //'minecraft:netherrack'
         //'minecraft:gunpowder'
    ].forEach((itemID) => event.remove({output: itemID}));

    event.remove({ type: 'ad_astra:fuel_conversion' });
    event.remove({output: 'create_dd:stargaze_singularity'});
    event.remove({input: 'create_dd:stargaze_singularity'});
    event.remove({output: 'create_dd:fallen_stargaze_singularity'});

})