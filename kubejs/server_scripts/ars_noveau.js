
ServerEvents.recipes(event => { 

  event.replaceInput(
    { id: 'ars_nouveau:warp_scroll' },             
    'minecraft:lapis_lazuli',
    'kubejs:rod_mystic_coal'        
  )

  event.remove({id: 'ars_nouveau:dominion_wand'});
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
        "ars_nouveau:source_gem",
        "ars_nouveau:source_gem",
        "minecraft:gold_ingot",
    ], // input items
    "create:wrench",
    "ars_nouveau:dominion_wand", // output
  0, // source cost
  // true // keep nbt of reagent, think like a smithing recipe
  );

  event.remove({id: 'ars_nouveau:storage_lectern'});
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
        "create:item_vault",
        "create:precision_mechanism",
        "create:item_vault",
        "create:precision_mechanism",
        "create:item_vault",
        "create:precision_mechanism",
    ],
    "minecraft:lectern",
    "ars_nouveau:storage_lectern", 0,
  );
  // MysticCoalBlock
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
        "forbidden_arcanus:arcane_crystal_dust",
        "minecraft:prismarine_crystals",
        "minecraft:glow_ink_sac",
    ],
    "minecraft:coal_block",
    "kubejs:mystic_coal_block",
    4000,
  );
})
