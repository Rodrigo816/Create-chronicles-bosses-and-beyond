
ServerEvents.recipes(event => { 

	// papers
	event.shaped(
		Item.of('kubejs:uncommon_paper', 8),
		[ 
		'AAA', 
		'ABA',
		'AAA'
		],
		{
		A: 'minecraft:paper',
				B: 'minecraft:green_dye'
		}
	).id('kubejs:uncommon_paper')

	//rare
	event.shaped(
		Item.of('kubejs:rare_paper', 8),
		[ 
		'AAA', 
		'ABA',
		'AAA'
		],
		{
		A: 'minecraft:paper',
				B: 'minecraft:blue_dye'
		}
	).id('kubejs:rare_paper')

	//epic
	event.shaped(
		Item.of('kubejs:epic_paper', 8),
		[ 
		'AAA', 
		'ABA',
		'AAA'
		],
		{
		A: 'minecraft:paper',
				B: 'minecraft:purple_dye'
		}
	).id('kubejs:epic_paper')

	///legenary
	event.shaped(
		Item.of('kubejs:legendary_paper', 8),
		[ 
		'AAA', 
		'ABA',
		'AAA'
		],
		{
		A: 'minecraft:paper',
				B: 'minecraft:yellow_dye'
		}
	).id('kubejs:legendary_paper')

	event.recipes.createMixing([Item.of('irons_spellbooks:common_ink').withChance(0.30)],[
		'2x irons_spellbooks:arcane_essence',
		Fluid.of("create_enchantment_industry:ink", 300),
		'3x minecraft:glass_bottle',
	])

	event.recipes.createMixing('irons_spellbooks:uncommon_ink',[
		'4x irons_spellbooks:arcane_essence',
		'minecraft:copper_ingot',
		'4x irons_spellbooks:common_ink',
		'minecraft:glass_bottle',
	])

	event.recipes.createMixing('irons_spellbooks:rare_ink',[
		'6x irons_spellbooks:arcane_essence',
		'minecraft:iron_ingot',
		'4x irons_spellbooks:uncommon_ink',
		'minecraft:glass_bottle',
	]).heated()

	event.recipes.createMixing('irons_spellbooks:epic_ink',[
		'8x irons_spellbooks:arcane_essence',
		'minecraft:gold_ingot',
		'4x irons_spellbooks:rare_ink',
		'minecraft:glass_bottle',
	]).heated()

	event.recipes.createMixing('irons_spellbooks:legendary_ink',[
		'12x irons_spellbooks:arcane_essence',
		'minecraft:amethyst_shard',
		'4x irons_spellbooks:epic_ink',
		'minecraft:glass_bottle',
	]).superheated()
	
	// Crushes any scroll
	event.recipes.createCrushing([
    Item.of('irons_spellbooks:common_ink').withChance(1),
    Item.of('irons_spellbooks:common_ink').withChance(0.30),
    Item.of('irons_spellbooks:uncommon_ink').withChance(0.10),
  ], Item.of('irons_spellbooks:scroll')) 

	event.recipes.createMixing('4x irons_spellbooks:cinder_essence',[
		'6x irons_spellbooks:arcane_essence',
		'2x minecraft:blaze_powder',
		'minecraft:netherite_scrap',
	]).superheated()

	//--create spell creation--	
		let nbtSpell = (spell_name) => {
			return `{ISB_Spells:{data:[{id:${spell_name}, index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}`;
	};
		//'{ISB_Spells:{data:[{id:"irons_spellbooks:blaze_storm", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}'
	/*
		==== ->Fire spells <-===
	*/
	  //commonnbtSpell
	event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blaze_storm", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:burning_dash", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firebolt", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fire_breath", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wall_of_fire", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heat_surge", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:flaming_strike", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'minecraft:paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'minecraft:blaze_rod']),
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'irons_spellbooks:common_ink'])
		]).transitionalItem('kubejs:unfinished_fire_scroll').loops(1)

		//uncommonSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blaze_storm", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:burning_dash", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firebolt", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fire_breath", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wall_of_fire", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heat_surge", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:flaming_strike", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magma_bomb", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:uncommon_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'minecraft:blaze_rod']),
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'irons_spellbooks:uncommon_ink'])
		]).transitionalItem('kubejs:unfinished_fire_scroll').loops(1)

		// rareSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blaze_storm", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:burning_dash", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firebolt", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fire_breath", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wall_of_fire", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heat_surge", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:flaming_strike", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magma_bomb", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:rare_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'minecraft:blaze_rod']),
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'irons_spellbooks:rare_ink'])
		]).transitionalItem('kubejs:unfinished_fire_scroll').loops(1)


		// epicSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blaze_storm", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:burning_dash", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firebolt", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fire_breath", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wall_of_fire", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heat_surge", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:flaming_strike", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magma_bomb", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fireball", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:epic_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'minecraft:blaze_rod']),
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'irons_spellbooks:epic_ink'])
		]).transitionalItem('kubejs:unfinished_fire_scroll').loops(1)


		// legendarySpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blaze_storm", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:burning_dash", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firebolt", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fire_breath", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wall_of_fire", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heat_surge", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:flaming_strike", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magma_bomb", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fireball", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:legendary_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'minecraft:blaze_rod']),
			event.recipes.createDeploying('kubejs:unfinished_fire_scroll', ['kubejs:unfinished_fire_scroll', 'irons_spellbooks:epic_ink'])
		]).transitionalItem('kubejs:unfinished_fire_scroll').loops(1)


	/*
		==== ->Ice spells <-===
	*/
	  //commonSpell
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:cone_of_cold", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:icicle", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_frost", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frostwave", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
	], 'minecraft:paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:frozen_bone']),
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:common_ink'])
	]).transitionalItem('kubejs:unfinished_ice_scroll').loops(1)

	//uncommonSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:cone_of_cold", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:icicle", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_frost", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frostwave", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
	], 'kubejs:uncommon_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:frozen_bone']),
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:uncommon_ink'])
	]).transitionalItem('kubejs:unfinished_ice_scroll').loops(1)

	//rareSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:cone_of_cold", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:icicle", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_frost", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frostwave", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frost_step", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ice_block", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_polar_bear", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
	], 'kubejs:rare_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:frozen_bone']),
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:rare_ink'])
	]).transitionalItem('kubejs:unfinished_ice_scroll').loops(1)


	// epicSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:cone_of_cold", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:icicle", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_frost", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frostwave", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frost_step", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ice_block", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_polar_bear", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
	], 'kubejs:epic_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:frozen_bone']),
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:epic_ink'])
	]).transitionalItem('kubejs:unfinished_ice_scroll').loops(1)


	// legendarySpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:cone_of_cold", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:icicle", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_frost", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frostwave", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:frost_step", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ice_block", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_polar_bear", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
	], 'kubejs:legendary_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:frozen_bone']),
		event.recipes.createDeploying('kubejs:unfinished_ice_scroll', ['kubejs:unfinished_ice_scroll', 'irons_spellbooks:legendary_ink'])
	]).transitionalItem('kubejs:unfinished_ice_scroll').loops(1)

	/*
		==== ->Ender spells <-===
	*/
	  //commonSpell
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:dragon_breath", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_missile", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'minecraft:paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'minecraft:ender_pearl']),
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'irons_spellbooks:common_ink'])
		]).transitionalItem('kubejs:unfinished_ender_scroll').loops(1)
	
		//uncommonSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:dragon_breath", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_missile", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:starfall", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:teleport", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:recall", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:portal", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:uncommon_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'minecraft:ender_pearl']),
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'irons_spellbooks:common_ink'])
		]).transitionalItem('kubejs:unfinished_ender_scroll').loops(1)
	
		//rareSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:dragon_breath", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_missile", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:starfall", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:teleport", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:recall", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:portal", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:counterspell", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_arrow", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:rare_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'minecraft:ender_pearl']),
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'irons_spellbooks:rare_ink'])
		]).transitionalItem('kubejs:unfinished_ender_scroll').loops(1)
	
	
		// epicSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:dragon_breath", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_missile", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:starfall", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:teleport", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:recall", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:portal", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:counterspell", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_arrow", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_ender_chest", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:evasion", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:epic_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'minecraft:ender_pearl']),
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'irons_spellbooks:epic_ink'])
		]).transitionalItem('kubejs:unfinished_ender_scroll').loops(1)
	
	
		// legendarySpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:dragon_breath", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_missile", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:starfall", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:teleport", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:recall", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:portal", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:counterspell", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:magic_arrow", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_ender_chest", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:evasion", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:black_hole", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:legendary_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'minecraft:ender_pearl']),
			event.recipes.createDeploying('kubejs:unfinished_ender_scroll', ['kubejs:unfinished_ender_scroll', 'irons_spellbooks:legendary_ink'])
		]).transitionalItem('kubejs:unfinished_ender_scroll').loops(1)

	/*
		==== ->Blood spells <-===
	*/
	  //commonSpell
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heartstop", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_siphoning", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'minecraft:paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:blood_vial']),
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:common_ink'])
		]).transitionalItem('kubejs:unfinished_blood_scroll').loops(1)
	
		//uncommonSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heartstop", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_siphoning", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_needles", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_step", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:devour", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:raise_dead", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wither_skull", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:uncommon_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:blood_vial']),
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:uncommon_ink'])
		]).transitionalItem('kubejs:unfinished_blood_scroll').loops(1)
	
		//rareSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heartstop", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_siphoning", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_needles", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_step", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:devour", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:raise_dead", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wither_skull", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acupuncture", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_slash", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:rare_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:blood_vial']),
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:rare_ink'])
		]).transitionalItem('kubejs:unfinished_blood_scroll').loops(1)
	
	
		// epicSpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heartstop", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_siphoning", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_needles", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_step", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:devour", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:raise_dead", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wither_skull", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acupuncture", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_slash", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		], 'kubejs:epic_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:blood_vial']),
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:epic_ink'])
		]).transitionalItem('kubejs:unfinished_blood_scroll').loops(1)
	
	
		// legendarySpells
		event.recipes.createSequencedAssembly([
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heartstop", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ray_of_siphoning", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_needles", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_step", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:devour", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:raise_dead", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wither_skull", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acupuncture", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
			Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blood_slash", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
		], 'kubejs:legendary_paper',
		[
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:blood_vial']),
			event.recipes.createDeploying('kubejs:unfinished_blood_scroll', ['kubejs:unfinished_blood_scroll', 'irons_spellbooks:legendary_ink'])
		]).transitionalItem('kubejs:unfinished_blood_scroll').loops(1)


	/*
		==== ->Nature spells <-=== to do
	*/
  //commonSpell
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acid_spit", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_arrow", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_breath", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:oakskin", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gluttony", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'minecraft:paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'minecraft:poisonous_potato']),
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'irons_spellbooks:common_ink'])
	]).transitionalItem('kubejs:unfinished_nature_scroll').loops(1)

	//uncommonSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acid_spit", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_arrow", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_breath", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:oakskin", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gluttony", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_splash", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:root", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firefly_swarm", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:earthquake", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:stomp", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)	
	], 'kubejs:uncommon_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'minecraft:poisonous_potato']),
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'irons_spellbooks:uncommon_ink'])
	]).transitionalItem('kubejs:unfinished_nature_scroll').loops(1)

	//rareSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acid_spit", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_arrow", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_breath", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:oakskin", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gluttony", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_splash", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:root", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firefly_swarm", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:earthquake", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:stomp", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),		
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blight", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),		
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spider_aspect", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:rare_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'minecraft:poisonous_potato']),
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'irons_spellbooks:rare_ink'])
	]).transitionalItem('kubejs:unfinished_nature_scroll').loops(1)


	// epicSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acid_spit", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_arrow", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_breath", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:oakskin", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gluttony", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_splash", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:root", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firefly_swarm", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:earthquake", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:stomp", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),		
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blight", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),		
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spider_aspect", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:epic_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'minecraft:poisonous_potato']),
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'irons_spellbooks:epic_ink'])
	]).transitionalItem('kubejs:unfinished_nature_scroll').loops(1)


	// legendarySpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:acid_spit", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_arrow", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_breath", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:oakskin", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gluttony", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:poison_splash", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:root", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firefly_swarm", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:earthquake", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:stomp", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),		
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blight", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),		
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spider_aspect", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:legendary_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'minecraft:poisonous_potato']),
		event.recipes.createDeploying('kubejs:unfinished_nature_scroll', ['kubejs:unfinished_nature_scroll', 'irons_spellbooks:legendary_ink'])
	]).transitionalItem('kubejs:unfinished_nature_scroll').loops(1)

	/*
		==== ->Lightning spells <-===
	*/
  //commonSpell
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:electrocute", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'minecraft:paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:lightning_bottle']),
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:common_ink'])
	]).transitionalItem('kubejs:unfinished_lightning_scroll').loops(1)

	//uncommonSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:electrocute", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_lightning", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lightning_lance", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:uncommon_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:lightning_bottle']),
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:uncommon_ink'])
	]).transitionalItem('kubejs:unfinished_lightning_scroll').loops(1)

	//rareSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:electrocute", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_lightning", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lightning_lance", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ascension", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:charge", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:rare_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:lightning_bottle']),
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:rare_ink'])
	]).transitionalItem('kubejs:unfinished_lightning_scroll').loops(1)


	// epicSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:electrocute", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_lightning", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lightning_lance", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ascension", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:charge", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lightning_bolt", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:epic_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:lightning_bottle']),
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:epic_ink'])
	]).transitionalItem('kubejs:unfinished_lightning_scroll').loops(1)


	// legendarySpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:electrocute", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_lightning", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lightning_lance", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:ascension", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:charge", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lightning_bolt", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:legendary_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:lightning_bottle']),
		event.recipes.createDeploying('kubejs:unfinished_lightning_scroll', ['kubejs:unfinished_lightning_scroll', 'irons_spellbooks:legendary_ink'])
	]).transitionalItem('kubejs:unfinished_lightning_scroll').loops(1)

	/*
		==== ->Holy spells <-===
	*/
  //commonSpell
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blessing_of_life", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fortify", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:guiding_bolt", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:healing_circle", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heal", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wisp", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:divine_smite", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'minecraft:paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:divine_pearl']),
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:common_ink'])
	]).transitionalItem('kubejs:unfinished_holy_scroll').loops(1)

	//uncommonSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blessing_of_life", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fortify", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:guiding_bolt", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:healing_circle", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heal", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wisp", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:divine_smite", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:haste", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:uncommon_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:divine_pearl']),
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:uncommon_ink'])
	]).transitionalItem('kubejs:unfinished_holy_scroll').loops(1)


	//rareSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blessing_of_life", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fortify", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:guiding_bolt", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:healing_circle", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heal", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wisp", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:divine_smite", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:haste", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:greater_heal", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:rare_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:divine_pearl']),
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:rare_ink'])
	]).transitionalItem('kubejs:unfinished_holy_scroll').loops(1)


	// epicSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blessing_of_life", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fortify", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:guiding_bolt", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:healing_circle", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heal", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wisp", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:divine_smite", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:haste", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:greater_heal", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:angel_wings", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:epic_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:divine_pearl']),
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:epic_ink'])
	]).transitionalItem('kubejs:unfinished_holy_scroll').loops(1)


	// legendarySpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:blessing_of_life", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fortify", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:guiding_bolt", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:healing_circle", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:heal", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:wisp", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:divine_smite", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:haste", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:greater_heal", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:angel_wings", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:legendary_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:divine_pearl']),
		event.recipes.createDeploying('kubejs:unfinished_holy_scroll', ['kubejs:unfinished_holy_scroll', 'irons_spellbooks:legendary_ink'])
	]).transitionalItem('kubejs:unfinished_holy_scroll').loops(1)


/*
		==== ->Evocation spells <-===
	*/
  //commonSpell
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_strike", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_ward", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firecracker", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:shield", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_horse", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'minecraft:paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'minecraft:emerald']),
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'irons_spellbooks:common_ink'])
	]).transitionalItem('kubejs:unfinished_evocation_scroll').loops(1)

	//uncommonSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_strike", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_ward", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firecracker", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:shield", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_horse", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_creeper", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gust", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lob_creeper", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spectral_hammer", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:slow", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:arrow_volley", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:uncommon_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'minecraft:emerald']),
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'irons_spellbooks:uncommon_ink'])
	]).transitionalItem('kubejs:unfinished_evocation_scroll').loops(1)

	//rareSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_strike", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_ward", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firecracker", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:shield", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_horse", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_creeper", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gust", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lob_creeper", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spectral_hammer", index:0, level:2, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:slow", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:arrow_volley", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:invisibility", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_vex", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:rare_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'minecraft:emerald']),
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'irons_spellbooks:rare_ink'])
	]).transitionalItem('kubejs:unfinished_evocation_scroll').loops(1)


	// epicSpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_strike", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_ward", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firecracker", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:shield", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_horse", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_creeper", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gust", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lob_creeper", index:0, level:7, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spectral_hammer", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:slow", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:arrow_volley", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:invisibility", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_vex", index:0, level:3, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:epic_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'minecraft:emerald']),
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'irons_spellbooks:epic_ink'])
	]).transitionalItem('kubejs:unfinished_evocation_scroll').loops(1)


	// legendarySpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_strike", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:fang_ward", index:0, level:8, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:firecracker", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:shield", index:0, level:10, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_horse", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:chain_creeper", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:gust", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:lob_creeper", index:0, level:9, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:spectral_hammer", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:slow", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:arrow_volley", index:0, level:6, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:invisibility", index:0, level:5, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:summon_vex", index:0, level:4, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:legendary_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'minecraft:emerald']),
		event.recipes.createDeploying('kubejs:unfinished_evocation_scroll', ['kubejs:unfinished_evocation_scroll', 'irons_spellbooks:legendary_ink'])
	]).transitionalItem('kubejs:unfinished_evocation_scroll').loops(1)



	/*
		==== ->Eldritch spells <-===
	*/
 	// legendarySpells
	event.recipes.createSequencedAssembly([
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:abyssal_shroud", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:sculk_tentacles", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:sonic_boom", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:planar_sight", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:telekinesis", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0),
		Item.of('irons_spellbooks:scroll', '{ISB_Spells:{data:[{id:"irons_spellbooks:eldritch_blast", index:0, level:1, locked:1b}], maxSpells:1, mustEquip:0b, spellWheel:0b}}').withChance(2.0)
	], 'kubejs:legendary_paper',
	[
		event.recipes.createDeploying('kubejs:unfinished_eldritch_scroll', ['kubejs:unfinished_eldritch_scroll', 'minecraft:echo_shard']),
		event.recipes.createDeploying('kubejs:unfinished_eldritch_scroll', ['kubejs:unfinished_eldritch_scroll', 'irons_spellbooks:legendary_ink'])
	]).transitionalItem('kubejs:unfinished_eldritch_scroll').loops(1)

	//uncommonSpells


	//rareSpells



	// epicSpells



	// legendarySpells
})
