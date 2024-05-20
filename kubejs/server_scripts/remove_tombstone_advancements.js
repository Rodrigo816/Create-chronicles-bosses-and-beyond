/**
 * Removes advancement at given file-path and adds it to a hidden parent advancement
 * @param {String | Array} advancement - Advancement id (ie. lootr:100loot)
 */
function removeAdvancement(advancement) {
  let arr = []
  if (typeof (advancement) == 'string') arr = [advancement]
  else if (typeof (advancement) == 'object') arr = advancement
  else console.error(`Invalid type for removeAdvancement(${advancement})`)

  ServerEvents.highPriorityData(e => {
      e.addJson('removetombs:advancements/removed', {
          display: { hidden: true },
      })
      arr.forEach(advancement => {
          let advSplit = advancement.split(':')
          let advModId = advSplit[0]
          let advName = advSplit[1]

          e.addJson(`${advModId}:advancements/${advName}.json`, {
              parent: 'removetombs:advancements/removed',
              display: { hidden: true },
              criteria: {
                  impossible: {
                      trigger: 'minecraft:impossible'
                  }
              },
              requirements: [['impossible']]
          })
      })
  })
}

// array
removeAdvancement([
  'tombstone:recipes/from_blue_marble',
  'tombstone:recipes/from_carmin_marble',
  'tombstone:recipes/from_dark_marble',
  'tombstone:recipes/from_decorative_grave',
  'tombstone:recipes/from_grave_dust',
  'tombstone:recipes/from_grave_key',
  'tombstone:recipes/from_green_marble',
  'tombstone:recipes/from_impregnated_diamond',
  'tombstone:recipes/from_white_marble',
  'tombstone:recipes/root',
  'tombstone:adventure/ally_enchancer',
  'tombstone:adventure/almost_unkillable',
  'tombstone:adventure/ancient_fishing_rod',
  'tombstone:adventure/ancient_knowledge',
  'tombstone:adventure/ashes_and_bones',
  'tombstone:adventure/bone_crusher',
  'tombstone:adventure/cancel_ghostly_shape',
  'tombstone:adventure/candy_sick',
  'tombstone:adventure/capture_soul',
  'tombstone:adventure/chain_death',
  'tombstone:adventure/choose_grave_type',
  'tombstone:adventure/choose_knowledge',
  'tombstone:adventure/christmas',
  'tombstone:adventure/color_smoke_ball',
  'tombstone:adventure/combine_in_inventory',
  'tombstone:adventure/consume_soul',
  'tombstone:adventure/create_decorative_grave',
  'tombstone:adventure/create_familiar_receptacle',
  'tombstone:adventure/create_fishing_rod',
  'tombstone:adventure/create_grave_marble',
  'tombstone:adventure/create_grave_plate',
  'tombstone:adventure/create_imbued_arrow',
  'tombstone:adventure/create_magic_scroll',
  'tombstone:adventure/create_magic_tablet',
  'tombstone:adventure/create_smoke_ball',
  'tombstone:adventure/create_spectral_potion',
  'tombstone:adventure/create_strange_scroll',
  'tombstone:adventure/create_strange_tablet',
  'tombstone:adventure/create_voodoo_poppet',
  'tombstone:adventure/crime_in_town',
  'tombstone:adventure/death_master',
  'tombstone:adventure/discreet_search',
  'tombstone:adventure/disenchanter',
  'tombstone:adventure/drink_potion_of_earthly_garden',
  'tombstone:adventure/easter',
  'tombstone:adventure/easy_opening',
  'tombstone:adventure/eat_easter_egg_food',
  'tombstone:adventure/eat_lollipop',
  'tombstone:adventure/enchant_grave_key',
  'tombstone:adventure/enchant_voodoo_poppet',
  
])