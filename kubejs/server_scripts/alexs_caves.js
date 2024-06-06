
ServerEvents.recipes(event => { 

	event.recipes.createFilling('6x alexscaves:toxic_paste', ['minecraft:slime_ball', Fluid.of('alexscaves:acid', 500)])

	event.recipes.createMixing('alexscaves:ambersol',['alexscaves:amber', '3x minecraft:glow_berries', 'minecraft:blaze_powder']).heated()
    
	event.recipes.createCrushing([
    Item.of('alexscaves:amber_curiosity').withChance(0.30),
  ], Item.of('alexscaves:amber')) 

	event.recipes.createCompacting('alexscaves:abyssmarine', ['minecraft:obsidian', 'minecraft:prismarine'])

	event.recipes.createCrushing([
    Item.of('alexscaves:muck').withChance(1),
		Item.of('alexscaves:muck').withChance(0.70),
		Item.of('alexscaves:muck').withChance(0.50),
		Item.of('alexscaves:muck').withChance(0.20),
  ], Item.of('alexscaves:abyssmarine')) 

	event.recipes.createSplashing('alexscaves:rusty_scrap_metal', 'alexscaves:scrap_metal');
	event.recipes.createSplashing('alexscaves:rusty_scrap_metal_plate', 'alexscaves:scrap_metal_plate');
	event.recipes.createSplashing('alexscaves:rusty_rebar', 'alexscaves:metal_rebar');
	event.recipes.createSplashing('alexscaves:rusty_scaffolding', 'alexscaves:metal_scaffolding');
	event.recipes.createSplashing('alexscaves:rusty_barrel', 'alexscaves:metal_barrel');
})
