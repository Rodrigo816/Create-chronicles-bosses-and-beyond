
ServerEvents.recipes(event => { 


  event.remove({mod: 'tombstone'});
    // Remove all brewing recipes from the specified mod
  event.remove({type: 'minecraft:brewing', mod: 'tombstone'});
  
    // You might need to remove other types of recipes, so check the mod's recipe types
    // For example, removing smelting recipes
  event.remove({type: 'minecraft:smelting', mod: 'tombstone'});
    
  event.replaceInput({}, 'epic_samurai:silver_ore', 'iceandfire:silver_ore');

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

  event.replaceOutput({}, 'epicsamurai:steel_ingot', 'tfmg:steel_ingot');


  // Create Confectionery
  event.remove({id: 'create_confectionery:caramel_emptying'});
  event.remove({id: 'create_confectionery:caramel_recipe'});
  event.remove({id: 'create_confectionery:caramel_recipe_2'});
  event.remove({output: 'create_confectionery:bar_of_caramel'});
  event.recipes.createCompacting('create_confectionery:bar_of_caramel', Fluid.of("create_dd:caramel", 250))

  event.remove({output: 'create_confectionery:caramel_glazed_berries'});
  event.recipes.createFilling('create_confectionery:caramel_glazed_berries',  [Fluid.of("create_dd:caramel", 250), 'minecraft:sweet_berries'])


})