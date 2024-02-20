WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "epic_samurai:silver_ore",
      "epic_samurai:deepslate_silver_ore",
    ];
  });
});