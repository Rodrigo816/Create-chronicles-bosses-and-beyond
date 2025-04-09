Platform.mods.kubejs.name = 'Create Chronicles: Bosses and Beyond'

//Stack Sizes
ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:egg', item => {
        item.maxStackSize = 64
    })
    event.modify('create_dd:chromatic_compound', item => {
        item.maxStackSize = 64
    })
    event.modify('create_dd:overcharge_alloy', item => {
        item.maxStackSize = 64
    })
    event.modify('create_dd:overcharge_alloy_sheet', item => {
        item.maxStackSize = 64
    })
    event.modify('create_dd:refined_radiance', item => {
        item.maxStackSize = 64
    })
    event.modify('create_dd:refined_radiance_sheet', item => {
        item.maxStackSize = 64
    })
    event.modify('deeperdarker:heart_of_the_deep', item => {
        item.maxStackSize = 64
    })
})

BlockEvents.modification(event => {
    event.modify('waystones:waystone', block =>{
        block.destroySpeed = 50
      })
      event.modify('waystones:mossy_waystone', block =>{
        block.destroySpeed = 50
      })
      event.modify('waystones:sandy_waystone', block =>{
        block.destroySpeed = 40
      })
  })

/**
    ========== Blocks ==========
 */
StartupEvents.registry("block", (event) => {
    event.create("mystic_coal_block")
        .displayName("Mystic Coal Block") 
        .hardness(1.0) 
        .resistance(1.0)
        .requiresTool(true) 
        .tagBlock("mineable/pickaxe") 
        .tagBlock('minecraft:needs_diamond_tool')
        
    event.create("battery_ore")
        .displayName("Battery Ore") 
        .hardness(1.0) 
        .resistance(1.0)
        .requiresTool(true) 
        .tagBlock("mineable/pickaxe") 
        .tagBlock('minecraft:needs_diamond_tool')


   let machine = (name, display, layer) => {
    let id = name.toLowerCase()
    event.create(id + '_machine')
        .model('kubejs:block/' + id + '_machine')
        .hardness(3.0)
        .displayName(display + ' Machine')
        .notSolid()
        .renderType(layer)
    }

    machine('Andesite', 'Rotation', "solid")
    machine('Copper', 'Valve', "solid")
    machine('Brass', 'Precision', "solid")
    machine('Obsidian', 'Locomotive', "solid")

})


/**
    ========== Items ==========
 */
StartupEvents.registry('item', event => {

    //space
    event.create('sol_ingot').texture("kubejs:item/sol_ingot").displayName('Sol Ingot')

    let mechanism = (name, rarity) => {
		let id = name.toLowerCase()
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(rarity ? rarity : 'common')
		event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')
	}



    mechanism('Rotation')
    //mechanism('Valve')
    //mechanism('Precision')
    mechanism('Locomotive')

	event.create('skill_add_point')
        .maxStackSize(64)
        .displayName("+1 Skill Point")
        .tooltip("Adds one skill point to your talent tree on use")
        .texture("kubejs:item/skill_point")
        .rarity('EPIC')

    event.create('skill_reset')
        .maxStackSize(64)
        .displayName("Talent Tree Reset")
        .tooltip("Resets all your skill points")
        .texture("kubejs:item/reset_points")
        .rarity('EPIC')
    // Blaze
    //event.create('dormant_dust_mystic_coal').texture("kubejs:item/mystic_dust").displayName('Mystic Dormant Coal Dust')
    //event.create('dust_mystic_coal').texture("kubejs:item/zinc_dust").displayName('Mystic Coal Dust')
    event.create('ingot_mystic_coal').texture("kubejs:item/mystic_ingot").displayName('Mystic Coal Ingot')
    event.create('rod_mystic_coal').texture("kubejs:item/rod_mystic_coal").displayName('Mystic Coal Rod')

    event.create('tier_1_plating').displayName('Tier 1 Plating').texture('kubejs:item/t1_plating')
	event.create('tier_2_plating').displayName('Tier 2 Plating').texture('kubejs:item/t2_plating')
	event.create('tier_3_plating').displayName('Tier 3 Plating').texture('kubejs:item/t3_plating')
	event.create('tier_4_plating').displayName('Tier 4 Plating').texture('kubejs:item/t4_plating')

    event.create('siliceous_compound').displayName('Siliceous Compound').texture('kubejs:item/siliceous_compound')
	
	event.create('engineer_badge')
        .displayName("§6Engineer's Badge")
        .texture("kubejs:item/create_badge")
        .rarity('EPIC')

    event.create('slayer_badge')
        .displayName("§6Ultimate Slayer's Badge")
        .texture("kubejs:item/bosses_badge")
        .rarity('EPIC')

    event.create('relic_badge')
        .displayName("§6Relic Hunter's Badge")
        .texture("kubejs:item/artifact_badge")
        .rarity('EPIC')

    event.create('ascendant_badge')
        .displayName("§6Ascendant's Badge")
        .texture("kubejs:item/ring_badge")
        .rarity('EPIC')

    event.create('blade_badge')
        .displayName("§6Blade Master Badge")
        .texture("kubejs:item/sword_badge")
        .rarity('EPIC')
    

    event.create('uncommon_paper')
    event.create('rare_paper')
    event.create('epic_paper')
    event.create('legendary_paper')

    event.create('unfinished_fire_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_ice_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_blood_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_ender_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_nature_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_lightning_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_holy_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_evocation_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('unfinished_eldritch_scroll', 'create:sequenced_assembly').rarity("RARE")
    event.create('incomplete_netherrack', 'create:sequenced_assembly')
    event.create('incomplete_t1_plating', 'create:sequenced_assembly')
    event.create('incomplete_t2_plating', 'create:sequenced_assembly')
    event.create('incomplete_t3_plating', 'create:sequenced_assembly')
    event.create('incomplete_t4_plating', 'create:sequenced_assembly')
    event.create('incomplete_blaze_rod', 'create:sequenced_assembly')

    //Farmer's Stuff
    event.create('incomplete_barbecue_stick', 'create:sequenced_assembly')
    event.create('incomplete_cod_roll', 'create:sequenced_assembly')
    event.create('incomplete_kelp_roll', 'create:sequenced_assembly')
    event.create('incomplete_melon_popsicle', 'create:sequenced_assembly')
    event.create('incomplete_mutton_wrap', 'create:sequenced_assembly')
    event.create('incomplete_salmon_roll', 'create:sequenced_assembly')
    event.create('incomplete_stuffed_potato', 'create:sequenced_assembly')
    event.create('incomplete_bacon_and_eggs', 'create:sequenced_assembly')
    event.create('incomplete_grilled_salmon', 'create:sequenced_assembly')
    event.create('incomplete_rice_roll_medley_block', 'create:sequenced_assembly')
    event.create('incomplete_roast_chicken_block', 'create:sequenced_assembly')
    event.create('incomplete_roasted_mutton_chops', 'create:sequenced_assembly')
    event.create('incomplete_shepherds_pie_block', 'create:sequenced_assembly')
    event.create('incomplete_steak_and_potatoes', 'create:sequenced_assembly')

    //
    event.create('create_chronicles').displayName("§6Create Chronicles").texture('kubejs:item/logo_texture').rarity("EPIC").tooltip([
        '§7So, you really think you\'re ready for this? ',
        '§7Creative power in your mortal hands... madness! ',
        '§cOnly those insane enough dare claim this prize. ',
      ])
    event.create('chronicles_fragment_head').texture("kubejs:item/dragon_head").displayName('§6Chronicles Fragment - Head').rarity("EPIC")
    event.create('chronicles_fragment_wings').texture("kubejs:item/dragon_wing").displayName('§6Chronicles Fragment - Wing').rarity("EPIC")
    event.create('chronicles_fragment_body').texture("kubejs:item/dragon_body").displayName('§6Chronicles Fragment - Body').rarity("EPIC")
})
