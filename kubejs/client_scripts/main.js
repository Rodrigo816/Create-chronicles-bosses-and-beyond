// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ClientEvents.lang('en_us', event => {
  event.renameItem('create:brass_hand', 'Golden Hand')
  event.renameItem('create_sa:hudraulic_engine', 'asd')
})

JEIEvents.hideItems(event => {
  event.hide('twilightforest:uncrafting_table')
})