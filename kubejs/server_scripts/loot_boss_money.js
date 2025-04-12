LootJS.modifiers((event) => {

  // Define a map of boss entity IDs and their respective reward range
  const bossRewards = {
    "twilightforest:snow_queen": [2, 5],
    "twilightforest:hydra": [2, 5],
    "twilightforest:naga": [2, 5],
    "minecraft:ender_dragon": [6, 12],
    "cataclysm:the_leviathan": [12, 20],
    "cataclysm:netherite_monstrosity": [6, 14],
    "alexscaves:hullbreaker": [2, 8],
    "alexscaves:forsaken": [2, 8],
    "born_in_chaos_v1:lord_pumpkinhead_head": [2, 6],
    "conjurer_illager:conjurer": [2, 4],
    "graveyard:lich": [20, 40],
    "cataclysm:ender_guardian": [6, 12],
    "cataclysm:ancient_remnant": [12, 33],
    "cataclysm:the_harbinger": [5, 9],
    "cataclysm:ignis": [20, 40],
    "cataclysm:maledictus": [10, 30],
    "mutantmonsters:mutant_skeleton": [1, 4],
    "mutantmonsters:mutant_creeper": [1, 4],
    "mutantmonsters:mutant_zombie": [1, 4],
    "bosses_of_mass_destruction:void_blossom": [2, 8],
    "bosses_of_mass_destruction:lich": [6, 14],
    "bosses_of_mass_destruction:obsidilith": [6, 14],
    "bosses_of_mass_destruction:gauntlet": [6, 12],
    "alexscaves:luxtructosaurus": [6, 12],
    "minecraft:wither": [2, 4],
    "ars_nouveau:wilden_boss": [6, 12],
    "minecraft:warden": [2, 4],
    "blue_skies:arachnarch": [2, 8],
    "blue_skies:starlit_crusher": [2, 8],
    "blue_skies:summoner": [2, 4],
    "blue_skies:alchemist": [2, 4],
    "aether:valkyrie_queen": [2, 6],
    "aether:slider": [2, 5],
    "aether:sun_spirit": [2, 8],
    "iceandfire:lightning_dragon": [12, 25],
    "iceandfire:fire_dragon": [12, 25],
    "iceandfire:ice_dragon": [12, 25],
    "illageandspillage:magispeller": [20, 40],
    "illageandspillage:spiritcaller": [20, 40],
    "illageandspillage:ragno": [20, 40]
  };

  // Iterate over the bossRewards object to dynamically create weighted loot modifiers
  Object.keys(bossRewards).forEach(function (bossId) {
    var min = bossRewards[bossId][0];
    var max = bossRewards[bossId][1];

    event.addEntityLootModifier(bossId)
      .addWeightedLoot(
        [min, max],  // Pass the range directly from the object
        [
          Item.of("5x numismatics:spur").withChance(5)  // Fixed chance for the loot
        ]
      );
  });


});