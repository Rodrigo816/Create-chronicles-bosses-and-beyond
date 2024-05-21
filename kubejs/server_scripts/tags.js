ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('ad_astra:has_structure/meteor_biomes')
    event.removeAll('ad_astra:has_structure/oil_well_biomes')
    event.removeAll('ae2:has_meteorites')
    event.removeAllTagsFrom('ad_astra:steel_plate')
})

// disable drygm
ServerEvents.tags("entity_type", (event) => {
    event.add("ars_nouveau:drygmy_blacklist", [/.*/]);
    event.add("ars_nouveau:jar_blacklist", ["#forge:bosses"]);
});

ServerEvents.tags("entity_type", (event) => {
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", ["#forge:bosses"]);
});
 /*ServerEvents.tags("entity_type", (event) => {
    event.add("ars_nouveau:drygmy_blacklist", [/minecraft:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/cataclysm:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", ["artifacts:mimic"]);
    event.add("ars_nouveau:drygmy_blacklist", [/iceandfire:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/graveyard:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/bosses_of_mass_destruction:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/twilightforest:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/irons_spellbooks:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/mutantmonsters:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/alexscaves:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aether:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/blue_skies:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aquamirae:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/conjurer_illager:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aquamirae:.+/]);
    event.add("ars_nouveau:drygmy_blacklist", [/aquamirae:.+/]);
  });*/
