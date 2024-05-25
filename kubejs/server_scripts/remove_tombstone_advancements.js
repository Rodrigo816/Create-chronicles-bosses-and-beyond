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
  'tombstone:adventure/ambush',
  'tombstone:adventure/enchanted_bundle',
  'tombstone:adventure/exorcism',
  'tombstone:adventure/find_grave_dust',
  'tombstone:adventure/first_grave',
  'tombstone:adventure/first_knowledge',
  'tombstone:adventure/first_pray',
  'tombstone:adventure/fortuitous_militia',
  'tombstone:adventure/funeral_theft',
  'tombstone:adventure/great_protector',
  'tombstone:adventure/guardian_of_eternity',
  'tombstone:adventure/halloween',
  'tombstone:adventure/impregnated_bone_needle',
  'tombstone:adventure/impregnated_receptacle',
  'tombstone:adventure/limbo',
  'tombstone:adventure/magic_siphoner',
  'tombstone:adventure/master_ally_enchancer',
  'tombstone:adventure/master_of_escape',
  'tombstone:adventure/master_of_exorcism',
  'tombstone:adventure/master_of_zombify',
  'tombstone:adventure/master_siphoner',
  'tombstone:adventure/naster_wololo',
  'tombstone:adventure/mastery_1',
  'tombstone:adventure/mastery_2',
  'tombstone:adventure/mutual_aid',
  'tombstone:adventure/neighborhood_brawl',
  'tombstone:adventure/pass_april_fool',
  'tombstone:adventure/pray_of_protection',
  'tombstone:adventure/prayer_of_empathy',
  'tombstone:adventure/prayer_of_undead',
  'tombstone:adventure/root',
  'tombstone:adventure/servant_of_rest',
  'tombstone:adventure/stolen_magic',
  'tombstone:adventure/strange_mount',
  'tombstone:adventure/strong_or_careful',
  'tombstone:adventure/subterfuge_and_discretion',
  'tombstone:adventure/tomb_raiding',
  'tombstone:adventure/trade_10_lollipop',
  'tombstone:adventure/trade_50_lollipop',
  'tombstone:adventure/trade_lollipop',
  'tombstone:adventure/trade_lollipop_for_essence',
  'tombstone:adventure/vanishing',
  'tombstone:adventure/village_defender',
  'tombstone:adventure/wololo',
  'tombstone:adventure/zombify',
])