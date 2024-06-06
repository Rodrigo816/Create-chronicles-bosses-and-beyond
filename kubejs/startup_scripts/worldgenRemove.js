WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "iceandfire:silver_ore",
      "iceandfire:deepslate_silver_ore"
    ];
  });
});