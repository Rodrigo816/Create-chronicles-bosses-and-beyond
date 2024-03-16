// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ClientEvents.lang('en_us', event => {
  event.renameItem('create:brass_hand', 'Golden Hand')
  event.renameItem('create_sa:hydraulic_engine', 'Valve Mechanism')
  event.renameItem('ad_astra:fuel', 'Astral Fuel')
  event.renameItem('ad_astra:fuel_bucket', 'Astral Fuel Bucket')
  event.renameItem('handcrafted:hammer', 'Handcrafted Tool')
})

JEIEvents.hideItems(event => {
  event.hide('twilightforest:uncrafting_table')
  event.hide('create_dd:chocolate_milkshake')
  event.hide('create_dd:vanilla_milkshake_bucket')
  event.hide('create_dd:chocolate_milkshake_bucket')
  event.hide('create_confectionery:caramel_bucket')
  event.hide('create_dd:hot_chocolate')
  event.hide('create_dd:hot_chocolate_bucket')
  'aquamirae:divider',
  'aquamirae:terrible_sword',
  'alexscaves:sulfur',
  'alexscaves:sulfur_dust',
  'alexscaves:sulfur_bud_small',
  'alexscaves:sulfur_bud_medium',
  'alexscaves:sulfur_bud_large',
  'alexscaves:sulfur_cluster',
  'moped:tiny_copper_moped_item',
  'create_dd:stargaze_singularity',
  'create_dd:stargaze_singularity_sheet',
  'create_dd:stargaze_singularity_scaffolding',
  'create_dd:stargaze_singularity_casing',
  'create_dd:stargaze_singularity_block',
  'create_dd:fallen_stargaze_singularity',
  'moped:tiny_copper_moped_item'
})


JEIEvents.hideFluids((event) => {
  event.hide('create_confectionery:caramel')
  event.hide('create_dd:hot_chocolate')
  event.hide('create_dd:vanilla_milkshake')
});

ItemEvents.tooltip(event => {
  event.add('blue_skies:alchemy_table',[
    Text.of('§4This item cannot be obtained by any means.').red()
  ])
})

JEIEvents.information(e => {
  /*e.addItem('blue_skies:alchemy_table', [
    'Cross-dimensional wireless item transfer to any chest on the same channel.',
  ])*/
})