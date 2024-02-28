// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ClientEvents.lang('en_us', event => {
  event.renameItem('create:brass_hand', 'Golden Hand')
  event.renameItem('create_sa:hydraulic_engine', 'Valve Mechanism')
  event.renameItem('ad_astra:fuel', 'Astral Fuel')
  event.renameItem('ad_astra:fuel_bucket', 'Astral Fuel Bucket')
})

JEIEvents.hideItems(event => {
  event.hide('twilightforest:uncrafting_table')
  event.hide('create_dd:chocolate_milkshake')
  event.hide('create_dd:hot_chocolate')
  event.hide('create_dd:vanilla_milkshake')
  event.hide('create_dd:vanilla_milkshake_bucket')
  event.hide('create_dd:chocolate_milkshake_bucket')
  event.hide('create_dd:hot_chocolate_bucket')
  'aquamirae:divider',
  'aquamirae:terrible_sword',
  //event.hide('kubejs:create_chronicles')
})