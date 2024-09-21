// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ClientEvents.lang('en_us', event => {
  event.renameItem('create:brass_hand', 'Golden Hand')
  event.renameItem('create_sa:hydraulic_engine', 'Valve Mechanism')
  event.renameItem('create_sa:incomplete_hydraulic_engine', 'Incomplete Valve Mechanism')

})

JEIEvents.hideItems(event => {
  event.hide('balancedflight:ascended_flight_ring')
  event.hide('ringsofascension:ring_undying')
  event.hide('alexsmobs:transmutation_table')

  //temp
  event.hide('tfmg:charcoal_dust')
  event.hide('tfmg:polarizer')
  event.hide('tfmg:creative_generator')

  //dnd update pending
  event.hide('create_connected:fan_seething_catalyst')
  event.hide('create_connected:fan_freezing_catalyst')
  event.hide('create_connected:fan_sanding_catalyst')

  event.hide('kubejs:unfinished_fire_scroll')
  event.hide('kubejs:unfinished_ice_scroll')
  event.hide('kubejs:unfinished_blood_scroll')
  event.hide('kubejs:unfinished_ender_scroll')
  event.hide('kubejs:unfinished_nature_scroll')
  event.hide('kubejs:unfinished_lightning_scroll')
  event.hide('kubejs:unfinished_holy_scroll')
  event.hide('kubejs:unfinished_evocation_scroll')
  event.hide('kubejs:unfinished_eldritch_scroll')
  event.hide('kubejs:incomplete_netherrack')
  event.hide('kubejs:incomplete_t1_plating')
  event.hide('kubejs:incomplete_t2_plating')
  event.hide('kubejs:incomplete_t3_plating')
  event.hide('kubejs:incomplete_t4_plating')
  event.hide('kubejs:incomplete_blaze_rod')
  event.hide('kubejs:incomplete_barbecue_stick')
  event.hide('kubejs:incomplete_cod_roll')
  event.hide('kubejs:incomplete_kelp_roll')
  event.hide('kubejs:incomplete_melon_popsicle')
  event.hide('kubejs:incomplete_mutton_wrap')
  event.hide('kubejs:incomplete_salmon_roll')
  event.hide('kubejs:incomplete_stuffed_potato')
  event.hide('kubejs:incomplete_bacon_and_eggs')
  event.hide('kubejs:incomplete_grilled_salmon')
  event.hide('kubejs:incomplete_rice_roll_medley_block')
  event.hide('kubejs:incomplete_roast_chicken_block')
  event.hide('kubejs:incomplete_roasted_mutton_chops')
  event.hide('kubejs:incomplete_shepherds_pie_block')
  event.hide('kubejs:incomplete_steak_and_potatoes')
  
  event.hide('refurbished_furniture:wheat_flour')
  event.hide('refurbished_furniture:dough')
  event.hide('shieldexp:griefer_shield')
  event.hide('shieldexp:paragon_shield')

  event.hide('forbidden_arcanus:orb_of_temporary_flight')
  event.hide('irons_spellbooks:lesser_spell_slot_upgrade')
  


  //Steel
  event.hide('create_dd:steel_ingot')
  event.hide('ad_astra:steel_ingot')
  event.hide('ad_astra:steel_nugget')
  event.hide('samurai_dynasty:steel_ingot')
  event.hide('samurai_dynasty:steel_nugget')
  event.hide('create_dd:steel_sheet')
  event.hide('ad_astra:steel_plate')
  // shadow
  event.hide('create_dd:shadow_steel_block')
  event.hide('create_dd:shadow_steel_scaffolding')
  event.hide('create_dd:shadow_steel_sheet')

  event.hide(/^tombstone:/)

  event.hide('create_dd:potassic_cobble')
  event.hide('simplyswords:contained_remnant')
  event.hide('simplyswords:tampered_remnant')

  event.hide('create_sa:block_picker')

  event.hide('forbidden_arcanus:netherite_blacksmith_gavel')

  event.hide('ae2:flawless_budding_quartz')
  event.hide('ae2:flawled_budding_quartz')
  event.hide('ae2:chipped_budding_quartz')
  event.hide('ae2:damaged_budding_quartz')

  event.hide('create_dd:shadow_steel')
  event.hide('create_dd:shadow_steel_casing')

  
  event.hide('ars_nouveau:glyph_animate_block')
  event.hide('ars_nouveau:burst')

  event.hide('ae2:charger')
  event.hide('ae2:meteorite_compass')
  event.hide('ae2:condenser')

  event.hide('ad_astra:coal_generator')
  event.hide('ad_astra:compressor')
  event.hide('ad_astra:fuel_refinery')

  event.hide('simplyswords:decaying_relic')
  event.hide('missions:mechanical_exchanger')
  event.hide('missions:mechanical_exchanger')
  event.hide('twilightforest:uncrafting_table')
  event.hide('create_dd:chocolate_milkshake')
  event.hide('create_dd:vanilla_milkshake')
  event.hide('create_dd:vanilla_milkshake_bucket')
  event.hide('create_dd:chocolate_milkshake')
  event.hide('create_dd:chocolate_milkshake_bucket')
  event.hide('create_confectionery:caramel_bucket')
  event.hide('create_dd:shimmer_bucket')
  event.hide('create_dd:hot_chocolate')
  event.hide('create_dd:hot_chocolate_bucket')
  event.hide('aquamirae:divider')
  event.hide('aquamirae:terrible_sword')
  event.hide('alexscaves:sulfur')
  event.hide('alexscaves:sulfur_dust')
  event.hide('alexscaves:sulfur_bud_small')
  event.hide('alexscaves:sulfur_bud_medium')
  event.hide('alexscaves:sulfur_bud_large')
  event.hide('alexscaves:sulfur_cluster')
  event.hide('moped:tiny_copper_moped_item')
  event.hide('create_dd:stargaze_singularity')
  event.hide('create_dd:stargaze_singularity_sheet')
  event.hide('create_dd:stargaze_singularity_scaffolding')
  event.hide('create_dd:stargaze_singularity_casing')
  event.hide('create_dd:stargaze_singularity_block')
  event.hide('create_dd:fallen_stargaze_singularity')
  event.hide('moped:tiny_copper_moped_item')

  event.hide('forbidden_arcanus:reinforced_deorum_blacksmith_gavel')
  event.hide('forbidden_arcanus:reinforced_deorum_sword')
  event.hide('forbidden_arcanus:reinforced_deorum_shovel')
  event.hide('forbidden_arcanus:reinforced_deorum_pickaxe')
  event.hide('forbidden_arcanus:reinforced_deorum_hoe')
  event.hide('forbidden_arcanus:reinforced_deorum_axe')
})


JEIEvents.hideFluids((event) => {
  event.hide('create_confectionery:caramel')
  event.hide('create_dd:hot_chocolate')
  event.hide('create_dd:vanilla_milkshake')
  event.hide('create_dd:shimmer')
});

ItemEvents.tooltip(event => {
  // remove tooltip from bundle
  event.addAdvanced(['minecraft:bundle'], (item, advanced, text) => {
    text.remove(1)
  })

  event.add('blue_skies:alchemy_table',[
    Text.of('§4This item cannot be obtained by any means.').red()
  ])
  event.add('minecraft:alchemy_table',[
    Text.of('§4This item cannot be obtained by any means.').red()
  ])
  event.add('forbidden_arcanus:soul',[
    Text.of('You can use a Soul Extrator on a deployer to automate this.').yellow()
  ])

  // badges
  event.add('kubejs:blade_badge',[
    Text.of('Awarded for collecting all swords in the Simply Swords mod.').yellow()
  ])
  event.add('kubejs:ascendant_badge',[
    Text.of('Awarded for collecting all Rings of Ascension.').yellow()
  ])
  event.add('kubejs:relic_badge',[
    Text.of('Awarded for collecting all artifacts.').yellow()
  ])
  event.add('kubejs:slayer_badge',[
    Text.of('Awarded for defeating all the bosses in the game.').yellow()
  ])
  event.add('kubejs:engineer_badge',[
    Text.of('Awarded for complete all Create chapters.').yellow()
  ])
})

JEIEvents.information(e => {
  e.addItem('forbidden_arcanus:stellarite_piece', [
    'This very rare ore can be found in the Overworld (Y=42 to -42). Known to be very volatile and will explode when mined using conventional techniques.',
  ])
  e.addItem('minecraft:firework_star', [
    'Crafted with a gunpowder and at least one dye in a crafting table, You can also add extra ingredients such as feathers, gold nuggets, etc for extra effects.',
    'Used to make fireworks! Combine the star with paper and gunpowder.',
  ])
})