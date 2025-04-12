
ServerEvents.recipes(event => { 

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
})
