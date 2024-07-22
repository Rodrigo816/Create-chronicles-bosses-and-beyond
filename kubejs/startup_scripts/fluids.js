StartupEvents.registry('fluid', (event) => {
    const fluids = [
        {
            type: 'thin',
            id: 'destabilized_redstone',
            color: 0xa73434,
            display: 'Destabilized Redstone'
        },
    ];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).thinTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        }
    });
    event.create('shimmer')
        .displayName('Shimmer')
        .bucketColor(0xFFC0CB) 
        .stillTexture('kubejs:fluid/shimmer_still')  // Path to the still texture
        .flowingTexture('kubejs:fluid/shimmer_flow') // Path to the flowing texture
        .viscosity(6000)
        .density(50)
        .rarity("EPIC")
        .luminosity(15)
        .temperature(-1000)
});