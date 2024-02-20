
ServerEvents.recipes(event => { 

    
  event.replaceInput({}, 'epic_samurai:silver_ore', 'iceandfire:silver_ore');

  event.remove({output: 'create_dd:industrial_iron_ingot'});
  event.replaceInput({}, 'create_dd:industrial_iron_ingot', 'tfmg:cast_iron_ingot');
  //event.recipes.createPressing('create_dd:industrial_iron_sheet', 'tfmg:cast_iron_ingot');
  //event.replaceOutput({}, 'epicsamurai:steel_ingot', 'tfmg:steel_ingot');

  event.remove({output: 'ad_astra:steel_plate'});
  event.replaceInput({}, 'ad_astra:steel_plate', 'tfmg:heavy_plate');

  event.remove({output: 'create_dd:steel_sheet'});
  event.replaceInput({}, 'create_dd:steel_sheet', 'tfmg:heavy_plate');

  event.remove({output: 'create_dd:steel_ingot'});
  event.replaceInput({}, 'create_dd:steel_ingot', 'tfmg:steel_ingot');

  event.remove({output: 'ad_astra:steel_ingot'});
  event.replaceInput({}, 'ad_astra:steel_ingot', 'tfmg:steel_ingot');

  event.replaceOutput({}, 'epicsamurai:steel_ingot', 'tfmg:steel_ingot');


})