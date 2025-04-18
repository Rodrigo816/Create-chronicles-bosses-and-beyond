
ServerEvents.recipes(event => { 

  // Replace all instances of minecraft:glass with forge:glass
  event.replaceInput({}, 'minecraft:glass', '#forge:glass')
    
  // spellsbooks
  event.replaceInput({id:'irons_spellbooks:netherite_spell_book'}, 'irons_spellbooks:blood_vial', 'alexscaves:pure_darkness')
  event.replaceInput({id:'irons_spellbooks:dragonskin_spell_book'}, 'minecraft:obsidian', 'twilightforest:magic_beans')

  // jar ice and fire vs utrem jar forbbiden arcanus
  event.replaceInput({id:'iceandfire:jar_empty'}, '#minecraft:planks', 'granite_slab')

  // epic samurai
  event.replaceInput({mod:'samurai_dynasty'}, '#forge:ingots/steel', 'tfmg:cast_iron_ingot')
  event.replaceInput(
    { id: 'samurai_dynasty:steel_block' },         
    'tfmg:cast_iron_ingot',
    'tfmg:steel_ingot',         
  )

  // andesite sheet
  event.remove({output: 'createdeco:andesite_sheet'});
  event.replaceInput({}, 'createdeco:andesite_sheet', 'create_dd:andesite_sheet');


  event.remove({output: 'ad_astra:steel_nugget'});
  event.replaceInput({}, 'ad_astra:steel_nugget', 'create_dd:steel_nugget');
  event.remove({output: 'samurai_dynasty:steel_nugget'});
  event.replaceInput({}, 'samurai_dynasty:steel_nugget', 'create_dd:steel_nugget');

  
  //silver uni
  event.replaceInput({}, '#forge:ingots/silver', 'samurai_dynasty:silver_ingot')
  event.replaceInput({}, '#forge:nuggets/silver', 'samurai_dynasty:silver_nugget')
  event.remove({output: 'create:blasting/silver_ingot_compat_iceandfire'});
  //event.remove({output: 'epic_samurai:silver_ingot'});
  //event.replaceInput({}, 'iceandfire:silver_ingot', 'epic_samurai:silver_ingot');
  //event.replaceInput({}, 'iceandfire:silver_ore', 'epic_samurai:silver_ore');
  //event.remove({id: 'iceandfire:silver_nugget_to_silver_ingot'});
  

  event.remove({output: 'create_dd:industrial_iron_ingot'});
  event.replaceInput({}, 'create_dd:industrial_iron_ingot', 'tfmg:cast_iron_ingot');

  event.remove({output: 'create_confectionery:caramel'});
  event.replaceInput({}, 'create_confectionery:caramel', 'create_dd:caramel');
  //event.recipes.createPressing('create_dd:industrial_iron_sheet', 'tfmg:cast_iron_ingot');
  //event.replaceOutput({}, 'epicsamurai:steel_ingot', 'tfmg:steel_ingot');

  event.remove({output: 'ad_astra:steel_plate'});
  event.replaceInput({}, 'ad_astra:steel_plate', 'tfmg:heavy_plate');

  event.remove({output: 'create_dd:steel_sheet'});
  event.replaceInput({}, 'create_dd:steel_sheet', 'tfmg:heavy_plate');

  event.remove({output: 'create_dd:steel_ingot'});
  event.replaceInput({}, 'create_dd:steel_ingot', 'tfmg:steel_ingot');

  event.remove({output: 'createaddition:zinc_sheet'});
  event.remove({output: 'createdeco:zinc_sheet'});
  event.replaceInput({}, 'createdeco:zinc_sheet', 'create_dd:zinc_sheet');
  event.replaceInput({}, 'createaddition:zinc_sheet', 'create_dd:zinc_sheet');


  event.remove({output: 'ad_astra:steel_ingot'});
  event.replaceInput({}, 'ad_astra:steel_ingot', 'tfmg:steel_ingot');

  event.replaceOutput({}, 'samurai_dynasty:steel_ingot', 'tfmg:steel_ingot');


  // Create Confectionery
  event.remove({id: 'create_confectionery:caramel_emptying'});
  event.remove({id: 'create_confectionery:caramel_recipe'});
  event.remove({id: 'create_confectionery:caramel_recipe_2'});
  event.remove({output: 'create_confectionery:bar_of_caramel'});
  event.recipes.createCompacting('create_confectionery:bar_of_caramel', Fluid.of("create_dd:caramel", 250))

  event.remove({output: 'create_confectionery:caramel_glazed_berries'});
  event.recipes.createFilling('create_confectionery:caramel_glazed_berries',  [Fluid.of("create_dd:caramel", 250), 'minecraft:sweet_berries'])
})