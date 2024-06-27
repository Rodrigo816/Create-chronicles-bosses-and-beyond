ServerEvents.recipes(event => { 
  event.remove({mod: 'storagedrawers'});
  event.remove({mod: 'ironchest'});

  event.shapeless('sophisticatedstorage:iron_chest', ['ironchest:iron_chest'])
  event.shapeless('sophisticatedstorage:gold_chest', ['ironchest:gold_chest'])
  event.shapeless('sophisticatedstorage:diamond_chest', ['ironchest:diamond_chest'])
  event.shapeless('sophisticatedstorage:diamond_chest', ['ironchest:crystal_chest'])
  event.shapeless('sophisticatedstorage:diamond_chest', ['ironchest:obsidian_chest'])
})