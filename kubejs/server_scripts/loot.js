LootJS.modifiers((event) => {
    event
        .addLootTableModifier("ad_astra:chests/dungeon/moon/dungeon_chest")
        .addWeightedLoot(
          [1],
          [
						Item.of("ae2:sky_stone_block").withChance(8),
						Item.of("ae2:engineering_processor_press").withChance(15),
						Item.of("ae2:calculation_processor_press").withChance(15),
						Item.of("ae2:logic_processor_press").withChance(15),
						Item.of("ae2:silicon_press").withChance(15)
          ]
      );
  });
