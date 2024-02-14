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
        'twilightforest:uncrafting_table',
         //Chapter 1
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
        // Brass
        CRDD('industrial_iron/andesite_alloy_mixing'),
        CR('crafting/materials/rose_quartz'),
        CR('crushing/diorite_recycling'),
        CR('crushing/diorite'),
        CR('splashing/crushed_raw_gold'),
        CR('sequenced_assembly/precision_mechanism'),
        CRDD('sequenced_assembly/inductive_mechanism'),
        CRDD('sequenced_assembly/logistic_mechanism'),

        // Soul Sand Procesing
        CR('haunting/soul_sand'),
        ARS('conjuration_essence_to_soul_sand'),
        HNN('living_matter/hellish/soul_sand'),
        CHAOS('solsendk'),
        // Blaze Rod
       CRDD('crafting/diamond_shard_compacting'),

       // Neural Network
       HNN('living_matter/overworldian/gunpower'),
       HNN('living_matter/overworldian/iron_ingot'),
       HNN('living_matter/hellish/blaze_rod'),
       HNN('living_matter/hellish/blaze_powder'),
       HNN('living_matter/hellish/gold_ingot'),
       HNN('living_matter/hellish/gold_ingot'),
  
    ].forEach((recipeID) => event.remove({id: recipeID}));

    //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
    [
        // Renewable Ores
        'create_dd:asurine_cobble',
        'create_dd:veridium_cobble',
        'create_dd:crimsite_cobble',
        'create_dd:ochrum_cobble',
        //CRDD('industrial_iron_ingot'),
        //CRDD('steel_ingot'),
        CRDD('industrial_iron_nugget'),
        CRDD('integrated_mechanism'),
        AE2('small_quartz_bud'),
        CRDD('inductive_mechanism')
    ].forEach((ingredientID) => event.remove({input: ingredientID}));
    
    //Remove by item ID
    [
        'constructionwand:infinity_wand',
        'create_dd:forest_ravager',
        'create_dd:deforester_saw',
         AE2('certus_quartz_crystal'),
         CRDD('industrial_iron_ingot'),
         CRDD('steel_ingot'),
         CRDD('industrial_iron_nugget'),
         CRDD('integrated_mechanism'),
         MC('soul_sand'),
         AE2('small_quartz_bud')
    ].forEach((itemID) => event.remove({output: itemID}));

})