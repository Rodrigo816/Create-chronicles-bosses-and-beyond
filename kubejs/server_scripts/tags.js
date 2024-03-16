ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('ad_astra:has_structure/meteor_biomes')
    event.removeAll('ad_astra:has_structure/oil_well_biomes')
    event.removeAll('ae2:has_meteorites')
    event.removeAllTagsFrom('ad_astra:steel_plate')
})