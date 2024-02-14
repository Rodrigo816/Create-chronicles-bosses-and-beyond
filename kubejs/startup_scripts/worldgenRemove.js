WorldgenEvents.remove(event => {
    event.removeOres(ores => {
      ores.blocks = []
      //ores.blocks = [ '#forge:ores/cinnabar', '#forge:ores/niter', '#forge:ores/apatite','rocketcraft_simulator_:aluminium_ore','rocketcraft_simulator_:platinum_ore','rocketcraft_simulator_:tin_ore','rocketcraft_simulator_:copper_ore','rocketcraft_simulator_:zinc_ore'] // Removes coal and iron ore 
    })
})


/*WorldgenEvents.add(event => {
  event.addOre((ore) => {
    ore.biomes = ['ad_astra:lunar_wastelands']
    ore.biomes = [{
      not: {
        category: "river"
      }
    }]
    ore.addTarget('#ad_astra:moon_ore_replaceables', 'ae2:sky_stone_block')
  
    ore.count([10, 20])
      .squared()
      .triangleHeight(0, 85)
  })
})*/

