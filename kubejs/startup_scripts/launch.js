Platform.mods.kubejs.name = 'Create Chronicles: Bosses and Beyond'

/**
    ========== Blocks ==========
 */
StartupEvents.registry("block", (event) => {
    event.create("mystic_coal_block")
    .displayName("§bMystic Coal Block") 
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
        .rarity('Epic')

    event.create('skill_reset')
        .maxStackSize(64)
        .displayName("Talent Tree Reset")
        .tooltip("Resets all your skill points")
        .texture("kubejs:item/reset_points")
        .rarity('Epic')
    // Blaze
    event.create('dormant_dust_mystic_coal').texture("kubejs:item/mystic_dust").displayName('Mystic Dormant Coal Dust')
    //event.create('dust_mystic_coal').texture("kubejs:item/zinc_dust").displayName('Mystic Coal Dust')
    event.create('ingot_mystic_coal').texture("kubejs:item/mystic_ingot").displayName('Mystic Coal Ingot')
    event.create('rod_mystic_coal').texture("kubejs:item/rod_mystic_coal").displayName('Mystic Coal Rod')

    event.create('tier_1_plating').displayName('Tier 1 Plating').texture('kubejs:item/t1_plating')
	event.create('tier_2_plating').displayName('Tier 2 Plating').texture('kubejs:item/t2_plating')
	event.create('tier_3_plating').displayName('Tier 3 Plating').texture('kubejs:item/t3_plating')
	event.create('tier_4_plating').displayName('Tier 4 Plating').texture('kubejs:item/t4_plating')
	

  
})
