LootJS.modifiers((event) => {
  event
      .addLootTableModifier("ad_astra:chests/dungeon/moon/dungeon_chest")
      .randomChance(0.30)
      .addLoot(
          LootEntry.of('minecraft:beacon'),
      );
});