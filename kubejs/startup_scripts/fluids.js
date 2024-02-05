StartupEvents.registry('fluid', (event) => {
    const fluids = [
        {
            type: 'thin',
            id: 'destabilized_redstone',
            color: 0xa73434,
            display: 'Destabilized Redstone'
        },
        {
            type: 'thin',
            id: 'mystic_coal_liquid',
            color: 0x131a1d,
            display: 'Mystic Coal Liquid'
        },
    ];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).thinTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        }
    });
});