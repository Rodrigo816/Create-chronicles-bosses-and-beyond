
// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let CR = (id, x) => MOD("create", id, x)
let CRA = (id, x) => MOD("createaddition", id, x)
let CRDD = (id, x) => MOD("create_dd", id, x)
let CRTM = (id, x) => MOD("create_things_and_misc", id, x)
let CRSA = (id, x) => MOD("create_sa", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let CI = (id, x) => MOD("createindustry", id, x)
let IF = (id, x) => MOD("iceandfire", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)
let ASTRA = (id, x) => MOD("ad_astra", id, x)
let BS = (id, x) => MOD("blue_skies", id, x)
let TFMG= (id, x) => MOD("tfmg", id, x)
let FA= (id, x) => MOD("forbidden_arcanus", id, x)
let IS= (id, x) => MOD("irons_spellbooks", id, x)
let HNN= (id, x) => MOD("hostilenetworks", id, x)
let CHAOS= (id, x) => MOD("born_in_chaos_v1", id, x)


ServerEvents.recipes(event => {


  let multicut = (outputs, input, remove_old) => {
      outputs.forEach(output => {
          if (remove_old) {
              event.remove({ output: output })
          };
          event.stonecutting(output, input)
      });
  };

    //smithin
  let machine_shape = (recipes, machine, remove_old) => {
      recipes.forEach(entry => {
          console.log(`Attempting to Create ${Item.of(entry[0])} to ${Item.of(entry[1])} from ${machine}`)
          if (remove_old) {
              event.remove({ output: entry[1] })
          };
          event.shapeless(entry[1], [entry[0],machine])
      });
  };   

  // irons and spells
  event.recipes.createMixing("7x "+IS("arcane_essence"),["2x "+MC('lapis_lazuli'), "2x "+MC('blaze_powder'),CR('experience_nugget')]).superheated()
  event.shapeless('dimdungeons:block_key_charger', ['quark:ender_watcher',MC('gold_block')])
  event.replaceInput(
    { id: 'waystones:warp_stone' }, 
    MC('ender_pearl'),               
    'waystones:warp_dust'         
  )
  event.replaceInput(
    { id: 'waystones:warp_stone' }, 
    MC('emerald'),               
    AE2('sky_stone_block')         
  )

  event.recipes.createCrushing([
    Item.of(CR('crushed_raw_zinc')).withChance(0.30),
    Item.of(CR('zinc_nugget')).withChance(0.15),
    Item.of(CR('zinc_nugget')).withChance(0.10),
    Item.of(MC('lapis_lazuli')).withChance(0.20),
    Item.of(MC('lapis_lazuli')).withChance(0.05),
  ], CR('asurine'))

  event.recipes.createCrushing([
    Item.of(CRDD('potassic_cobble')).withChance(0.70),
    Item.of(CR('crushed_raw_silver')).withChance(0.20),
    Item.of('enlightened_end:adamantite_nugget').withChance(0.70),
    Item.of('enlightened_end:bismuth_nugget').withChance(0.70),
    Item.of('enlightened_end:adamantite_nugget').withChance(0.50),
    Item.of('enlightened_end:bismuth_nugget').withChance(0.50),
  ], CR('scoria'))
/*
===============================
  ---->Chapter 1 Andesite Rotation
==============================
*/


  event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(900)

  // Define a mapping from planks to slabs
  const plankToSlabMap = {
    'minecraft:oak_planks': 'minecraft:oak_slab',
    'minecraft:spruce_planks': 'minecraft:spruce_slab',
    'minecraft:birch_planks': 'minecraft:birch_slab',
    // Add other mappings as needed
  };

  // Iterate over the mapping to create a cutting recipe for each pair
  Object.entries(plankToSlabMap).forEach(([plank, slab]) => {
    event.recipes.createCutting(`2x ${slab}`, plank).processingTime(90);
  });

  // Rotation Mechanism
  let transitional = KJ('incomplete_rotation_mechanism')
  event.recipes.createSequencedAssembly([
    'kubejs:rotation_mechanism',
  ], '#minecraft:wooden_slabs', [
    event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
    event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
    event.recipes.createDeploying(transitional, [transitional, ASTRA('hammer')])
  ]).transitionalItem(transitional)
    .loops(1)
    .id(KJ('rotation_mechanism'))

  event.shaped(KJ('rotation_mechanism'), [
    'BBB',
    'EDE',
    'EAE'
  ], {
      A: '#minecraft:wooden_slabs',
      B: CR('andesite_alloy'),
      D: Item.of(ASTRA('hammer')).ignoreNBT(),
      E: 'minecraft:iron_nugget'
  }).damageIngredient(4).keepIngredient(4)

  event.replaceInput(
    { id: 'handcrafted:hammer' }, 
    MC('iron_ingot'),               
    '#forge:ingots/silver'         
)

  // Rotation Machine
  event.shaped(KJ('andesite_machine'), [
      'SSS',
      'SCS',
      'SSS'
  ], {
      C: CR('andesite_casing'),
      S: KJ('rotation_mechanism')
  })


  const andesite_machines_cutting = [
      Item.of(CR('large_water_wheel'), 1),
      Item.of(CR('water_wheel'), 3),
      Item.of(CR('cart_assembler'), 1),
      Item.of(CR('andesite_tunnel'), 4),
      Item.of(CR('radial_chassis'), 4),
      Item.of(CR('linear_chassis'), 4),
      Item.of(CR('andesite_funnel'), 4),
      Item.of(CR('basin'), 2),
      Item.of(CR('sticky_mechanical_piston'), 4),
      Item.of(CR('mechanical_piston'), 4),
      Item.of(CR('rope_pulley'), 2),
      Item.of(CR('weighted_ejector'), 4),
      Item.of(CR('mechanical_harvester'), 1),
      Item.of(CR('mechanical_plough'), 1),
      Item.of(CR('mechanical_saw'), 1),
      Item.of(CR('mechanical_drill'), 1),
      Item.of(CR('encased_chain_drive'), 3),
      Item.of(CR('adjustable_chain_gearshift'), 2),
      Item.of(CR('gearshift'), 2),
      Item.of(CR('clutch'), 2),
      Item.of(CR('gearbox'), 4),
      Item.of(CR('gantry_carriage'), 2),
      Item.of(CR('chute'), 3),
      Item.of(CR('empty_blaze_burner'), 2),
      Item.of(CR('depot'), 4),
      Item.of(CRA('rolling_mill'), 2),
      Item.of(CR('windmill_bearing'), 2),
      Item.of(CR('mechanical_bearing'), 2),
      Item.of(CR('portable_storage_interface'), 2),
      Item.of(CR('analog_lever'), 2),
      Item.of(CRDD('reversed_gearshift'), 1),
      Item.of(CRDD('kinetic_motor'), 1),
      Item.of('create_connected:freewheel_clutch', 1),
  ];
  const andesite_shapes = [
      //["thermal:drill_head", "create:mechanical_drill"],
      //["thermal:saw_blade", "create:mechanical_saw"],r
      [CR('propeller'), CR('encased_fan')],
      [MC('iron_block'), CR('mechanical_press')],
      [CR('whisk'), CR('mechanical_mixer')],
      [CR('brass_hand'), CR('deployer')],
      [MC('diamond_block'),  CR('schematicannon')],
      [MC('obsidian'),  'create_connected:brake'],
  ];
  multicut(andesite_machines_cutting, "kubejs:andesite_machine", true);
  machine_shape(andesite_shapes, "kubejs:andesite_machine", true);

  event.shapeless(CR('gearbox'), [CR('vertical_gearbox')])


  /*
  ===============================
  ---->Chapter 2 Cooper Valve
  ==============================
  */
  // Valve Mechanism
  transitional = CRSA('incomplete_hydraulic_engine')
  event.recipes.createSequencedAssembly([
    CRSA('hydraulic_engine'),
  ], KJ('rotation_mechanism'), [
        event.recipes.createDeploying(transitional, [transitional, CR('copper_sheet')]),
        event.recipes.createDeploying(transitional, [transitional, MC('glass')]),
        event.recipes.createDeploying(transitional, [transitional, SP('wrench')]),
        event.recipes.createPressing(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(1)
    .id(CRSA('hydraulic_engine_recipe'))


    // Machine
    event.shaped(KJ('copper_machine'), [
      'SSS',
      'SCS',
      'SSS'
    ], {
      C: CR('copper_casing'),
      S: CRSA('hydraulic_engine')
    })

    const copper_machines_cutting = [
        Item.of(CR('fluid_pipe'), 12),
        Item.of(CR('mechanical_pump'), 2),
        Item.of(CR('fluid_valve'), 3),
        Item.of(CR('hose_pulley'), 2),
        Item.of(CR('portable_fluid_interface'), 2),
        Item.of(CR('steam_engine'), 1),
        Item.of(CR('copper_valve_handle'), 6),
        Item.of(CR('steam_whistle'), 4),
    ];
    const copper_shapes = [
        [MC('iron_bars'), CR('item_drain')],
        [MC('bucket'), CR('spout')],
        [MC('glass'), CR('fluid_tank')],
        [MC('copper_block'), CR('copper_backtank')],
        [CRTM('sprinkler_head'), CRTM('sprinkler')],
        [MC('slime_block'), CRTM('sticky_launcher')],
        //[CRSA('copper_magnet'), CRSA('block_picker')],
        [BS('pyrope_gem'), CRSA('copper_jetpack_chestplate')],
        [MC('emerald_block'), CRSA('copper_exoskeleton_chestplate')],
    ];
    
    multicut(copper_machines_cutting, KJ('copper_machine'), true);
    machine_shape(copper_shapes, KJ('copper_machine'), true);


    /*
    ===============================
    ---->Chapter 3 Brass
    ==============================
    */

    event.replaceInput(
      { id: 'toms_storage:storage_terminal' },             
      MC('glowstone'),
      CR('precision_mechanism')         
    )
    event.replaceInput(
        { id: 'create:crafting/kinetics/brass_hand' }, 
        CR('brass_sheet'),               
        CR('golden_sheet')         
    )

    event.replaceInput(
      { id: 'buildinggadgets2:gadget_building' }, 
      MC('redstone'),               
      CR('precision_mechanism')         
    )

    event.replaceInput(
      { id: 'buildinggadgets2:template_manager' }, 
      MC('redstone'),               
      CR('precision_mechanism')         
    )

    event.replaceInput(
      { id: 'buildinggadgets2:gadget_exchanging' }, 
      MC('redstone'),               
      CR('precision_mechanism')         
    )

    event.replaceInput(
      { id: 'buildinggadgets2:gadget_cut_paste' }, 
      MC('redstone'),               
      CR('precision_mechanism')         
    )

    event.replaceInput(
      { id: 'buildinggadgets2:gadget_destruction' }, 
      MC('redstone'),               
      CR('precision_mechanism')         
    )

    event.recipes.createDeploying(CR('electron_tube'), [CR('iron_sheet'), CR('polished_rose_quartz')])

    
    // Soul Sand Procesing
    event.recipes.createHaunting(FA('soulless_sand'), MC('sand'))
    event.recipes.createDeploying(MC('soul_sand'), [FA('soulless_sand'), 'quark:soul_bead'])
    event.recipes.createDeploying(MC('soul_sand'), [FA('soulless_sand'), CHAOS('ethereal_spirit')])
 
    event.recipes.createMixing(AE2('small_quartz_bud'),[Fluid.water(100),MC('sand'), "9x "+MC('sugar'), MC('quartz')])
    
    transitional = AE2('small_quartz_bud')
    event.recipes.createSequencedAssembly([
      AE2('medium_quartz_bud'),
    ], AE2('small_quartz_bud'), [
      event.recipes.createFilling(transitional, [transitional, Fluid.of(MC("water"), 100)]),
    ]).transitionalItem(transitional)
      .loops(3)
      .id(AE2('medium_quartz_bud'))

    transitional = AE2('medium_quartz_bud')
    event.recipes.createSequencedAssembly([
      AE2('large_quartz_bud'),
    ], AE2('medium_quartz_bud'), [
      event.recipes.createFilling(transitional, [transitional, Fluid.of(MC("water"), 100)]),
    ]).transitionalItem(transitional)
      .loops(3)
      .id(AE2('large_quartz_bud'))

    transitional = AE2('large_quartz_bud')
    event.recipes.createSequencedAssembly([
      AE2('quartz_cluster'),
    ], AE2('large_quartz_bud'), [
      event.recipes.createFilling(transitional, [transitional, Fluid.of(MC("water"), 100)]),
    ]).transitionalItem(transitional)
      .loops(3)
      .id(AE2('quartz_cluster'))

  event.recipes.createMilling([AE2('certus_quartz_crystal'), AE2('certus_quartz_crystal')], AE2('quartz_cluster'))

  event.recipes.createMixing(Fluid.of(KJ("destabilized_redstone"), 600),["3x "+MC('redstone'), "4x "+MC('nether_wart')]).heated()

  transitional = AE2('certus_quartz_crystal')
	event.recipes.createSequencedAssembly([
		CR('rose_quartz'),
	], AE2('certus_quartz_crystal'), [
		event.recipes.createFilling(transitional, [transitional, Fluid.of(KJ("destabilized_redstone"), 50)]),
	]).transitionalItem(transitional)
		.loops(3)
		.id(CR('rose_quartz'))
    

  // Precission Mechanism
  transitional = CR('incomplete_precision_mechanism')
	event.recipes.createSequencedAssembly([
		Item.of(CR('precision_mechanism')).withChance(100.0),
		Item.of('create:brass_sheet').withChance(6.0),
		Item.of('create:rose_quartz').withChance(6.0),
    Item.of('minecraft:quartz').withChance(6.0),
	], CRSA('hydraulic_engine'), [
      event.recipes.createDeploying(transitional, [transitional, CR('brass_sheet')]),
      event.recipes.createDeploying(transitional, [transitional, CR('electron_tube')]),
      event.recipes.createDeploying(transitional, [transitional, CR('cogwheel')]),
      event.recipes.createPressing(transitional, transitional)
	]).transitionalItem(transitional)
		.loops(3)
		.id(CR('precision_mechanism'))

  // Brass Machine
  event.shaped(KJ('brass_machine'), [
    'SSS',
    'SCS',
    'SSS'
  ], {
    C: CR('brass_casing'),
    S: CR('precision_mechanism')
  })

  const brass_machines_cutting = [
    Item.of(CR('sequenced_gearshift'), 2),
    Item.of(CR('rotation_speed_controller'), 1),
    Item.of(CR('mechanical_arm'), 1),
    Item.of(CR('content_observer'), 2),
    Item.of(CR('stockpile_switch'), 2),
    Item.of(CR('brass_funnel'), 4),
    Item.of(CR('brass_tunnel'), 4),
    Item.of(CR('display_link'), 2),
    Item.of(CR('display_board'), 6),
    Item.of(CR('redstone_link'), 4),
    Item.of(CR('powered_toggle_latch'), 2),
    Item.of(CR('powered_latch'), 2),
    Item.of(CR('pulse_extender'), 2),
    Item.of(CR('pulse_repeater'), 2),
    Item.of(CR('linked_controller'), 1),
    Item.of(MC('repeater'), 4),
    Item.of(MC('comparator'), 4),
    Item.of(MC('daylight_detector'), 1),
    Item.of(CR('smart_chute'), 2),
    Item.of(CR('smart_fluid_pipe'), 2),
    Item.of(CR('clockwork_bearing'), 2),
    Item.of(CR('elevator_pulley'), 2),
    Item.of(CR('contraption_controls'), 2),
    Item.of(CR('redstone_contact'), 2),
    Item.of(CR('nixie_tube'), 2),
    Item.of(CRA('redstone_relay'), 1),
    Item.of(CRA('portable_energy_interface'), 1),
    Item.of(CRDD('accelerator_motor'), 1),
    Item.of(CRDD('flywheel'), 1),
    Item.of('create_connected:overstress_clutch', 1),
    Item.of('create_connected:sequenced_pulse_generator', 1),
    Item.of('create_connected:empty_fan_catalyst', 2),


    

    Item.of('quark:redstone_randomizer', 2),
  ];

  const brass_shapes = [
      [MC('crafting_table'), Item.of('create:mechanical_crafter', 3)],
      [MC('glowstone_dust'), 'torchmaster:feral_flare_lantern'],
      [MC('compass'), CR('speedometer')],
      [CR('crushing_wheel'), CR('mechanical_roller')],
      [CR('speedometer'),'create_connected:centrifugal_clutch'],


     // ['#ae2:all_fluix', 'createaddition:tesla_coil'],
    //  ["createaddition:capacitor", "createaddition:modular_accumulator"],
    //  ['createaddition:connector', "createaddition:portable_energy_interface"],
    //  ['create:rotation_speed_controller', "createaddition:electric_motor"],
  ];

  multicut(brass_machines_cutting, KJ('brass_machine'), true);
  machine_shape(brass_shapes, KJ('brass_machine'), true);

  /*
    ===============================
    ---->LOCOMOTIVE 4 Brass
    ==============================
  */
  event.replaceInput(
      { id: 'alexscaves:metal_swarf' }, 
      MC('raw_iron'),               
      MC('iron_ingot')         
  )
  
  event.replaceInput(
    { id: HNN('framework') }, 
    MC('smooth_stone'),               
    TFMG('concrete')         
  )

  event.replaceInput(
    { id: HNN('loot_fabricator') }, 
    MC('netherite_ingot'),               
    CR('precision_mechanism')         
  )

  event.replaceInput(
    { id:'travelanchors:travel_anchor' },               
    MC('iron_ingot'),
    KJ('locomotive_mechanism')         
  )

  event.replaceInput(
    { id: 'travelanchors:travel_staff' },
    MC('iron_ingot'), 
    KJ('locomotive_mechanism')                    
  )

  event.recipes.createCutting('2x alexscaves:metal_rebar', 'alexscaves:scrap_metal').processingTime(500);

    // Locomotive Mechanism
   transitional = KJ('incomplete_locomotive_mechanism')
    event.recipes.createSequencedAssembly([
      Item.of(KJ('locomotive_mechanism')).withChance(100.0),
      Item.of(MC('smile_ball')).withChance(8.0),
      Item.of('alexscaves:metal_rebar').withChance(8.0),
      Item.of('alexscaves:ferrousslime_ball').withChance(8.0),
      Item.of(CR('powdered_obsidian')).withChance(8.0),
    ], CR('precision_mechanism'), [
      event.recipes.createDeploying(transitional, [transitional, CR('sturdy_sheet')]),
      event.recipes.createDeploying(transitional, [transitional, MC('slime_ball')]),
      event.recipes.createDeploying(transitional, [transitional, 'alexscaves:metal_rebar']),
      event.recipes.createDeploying(transitional, [transitional, 'alexscaves:metal_rebar']),
      event.recipes.createPressing(transitional, transitional)
    ]).transitionalItem(transitional)
      .loops(3)
      .id(KJ('locomotive_mechanism'))
  
  
  
    // Locomotive Machine
    event.shaped(KJ('obsidian_machine'), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: CR('railway_casing'),
        S: KJ('locomotive_mechanism')
    })
    
    const locomotive_machines_cutting = [
      Item.of('railways:track_coupler', 2),
      Item.of('railways:semaphore', 2),
      Item.of('railways:remote_lens', 1),
      Item.of('railways:track_switch_brass', 2),
      Item.of(CR('track_observer'), 2),
      Item.of(CR('track_station'), 2),
      Item.of(CR('track_signal'), 2),
      Item.of(CR('schedule'), 4),
      Item.of(CR('controls'), 1),
      Item.of('railways:track_switch_andesite', 2),
      Item.of('railways:portable_fuel_interface', 2),
      Item.of('railways:fuel_tank', 2),
    ];
  
    multicut(locomotive_machines_cutting, KJ('obsidian_machine'), true);

  //adv wireless terminal
  event.recipes.createMechanicalCrafting('toms_storage:ts.adv_wireless_terminal', [
    'A',
    'B',
    'C',
  ], {
    A: KJ('locomotive_mechanism'),
    B: 'toms_storage:ts.wireless_terminal',
    C: MC('netherite_ingot'),
  }) 



   
  /*
    ===============================
    ---->Chp 5 Steel Mechanism
    ==============================
  */
     // bauxite renew
     event.recipes.createMechanicalCrafting(TFMG('bauxite'), [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: CR('cinder_flour'),
      B: MC('red_sand')
  })

    // Steel Mechanism
    transitional = TFMG('unfinished_steel_mechanism')
    event.recipes.createSequencedAssembly([
      Item.of(TFMG('steel_mechanism')).withChance(100.0),
      Item.of(TFMG('screw')).withChance(20.0),
    ], KJ('locomotive_mechanism'), [
      event.recipes.createDeploying(transitional, [transitional, TFMG('steel_ingot')]),
      event.recipes.createDeploying(transitional, [transitional, TFMG('aluminum_ingot')]),
      event.recipes.createDeploying(transitional, [transitional, TFMG('screw')]),
      event.recipes.createDeploying(transitional, [transitional, TFMG('screwdriver')]),
    ]).transitionalItem(transitional)
      .loops(2)
      .id(TFMG('steel_mechanism'))



  /*
    ===============================
    ---->Chp 6 Rocket Fuel
    ==============================
  */
  event.recipes.createMixing(Fluid.of(ASTRA('fuel'), 400),[Fluid.of(TFMG('diesel'), 700),Fluid.of(CRA('bioethanol'), 400)]).superheated()

  /*
    ===============================
    ---->Chp 7 Infernal
    ==============================
  */

    transitional = MC('coal_block')
    event.recipes.createSequencedAssembly([
		KJ('mystic_coal_block'),
	], MC('coal_block'), [
		event.recipes.createDeploying(transitional, [transitional, 'forbidden_arcanus:arcane_crystal_dust']),
		event.recipes.createDeploying(transitional, [transitional, MC('prismarine_crystals')]),
    event.recipes.createDeploying(transitional, [transitional, MC('glow_ink_sac')]),
	]).transitionalItem(transitional)
		.loops(1)
    event.recipes.createCrushing('9x '+KJ('dormant_dust_mystic_coal'), KJ('mystic_coal_block')).processingTime(500)
    event.custom(
        {
            "type": TFMG('industrial_blasting'),
            "ingredients": [
              {
                "count": 1,
                "item": KJ('dormant_dust_mystic_coal')
              }
            ],
            "processingTime": 320,
            "results": [
              {
                "fluid": KJ('mystic_coal_liquid'),
                "amount": 333
              },
              {
                "fluid": TFMG('molten_slag'),
                "amount": 65
              }
            ]
        }
	)
    event.custom(
        {
            "type": TFMG('casting'),
            "ingredients": [
              {
                "fluid": KJ('mystic_coal_liquid'),
                "amount": 1
              }
            ],
            "processingTime": 150,
            "results": [
              {
                "count": 1,
                "item": KJ('ingot_mystic_coal')
              },
              {
                "count": 1,
                "item": KJ('mystic_coal_block')
              }
            ]
        }
	)
    event.custom({
        "type": CRA('rolling'),
        "input": {
              "item": KJ('ingot_mystic_coal')
        },
        "result": {
            "item": KJ('rod_mystic_coal'),
            "count": 3
        }
    })
    transitional = MC('blaze_rod')
	event.recipes.createSequencedAssembly([
		MC('blaze_rod'),
	], KJ('rod_mystic_coal'), [
        event.recipes.createDeploying(transitional, [transitional, BS('fiery_beans')]),
        event.recipes.createFilling(transitional, [transitional,Fluid.of('minecraft:lava', 250)]),
        event.recipes.createFilling(transitional, [transitional,Fluid.of('minecraft:lava', 250)]),
        event.recipes.createPressing(transitional, transitional)
	]).transitionalItem(transitional)
		.loops(1)
		.id(KJ('rod_mystic_coal'))


    // Infernal Mechanism
   transitional = CRDD('incomplete_infernal_mechanism')
   event.recipes.createSequencedAssembly([
     Item.of(CRDD('infernal_mechanism')).withChance(100.0),
     Item.of(KJ('rod_mystic_coal')).withChance(10.0),
     Item.of(KJ('dormant_dust_mystic_coal')).withChance(5.0),
     Item.of(CRTM('crushed_magma')).withChance(10.0),
     Item.of(CR('cinder_flour')).withChance(10.0),
   ], TFMG('steel_mechanism'), [
     event.recipes.createDeploying(transitional, [transitional, CRTM('crushed_magma')]),
     event.recipes.createDeploying(transitional, [transitional, CRDD('ember_alloy')]),
     event.recipes.createFilling(transitional, [transitional,Fluid.of('minecraft:lava', 250)]),
     event.recipes.createPressing(transitional, transitional)
   ]).transitionalItem(transitional)
     .loops(2)
     .id(CRDD('infernal_mechanism'))


       /*
    ===============================
    ---->Chp 8 NASA
    ==============================
  */

    event.replaceInput(
      { id: ASTRA('recipes/oxygen_loader') }, 
      MC('redstone_block'),               
      CRDD('infernal_mechanism')          
  )
    // NASA pro
    event.replaceInput(
        { id: ASTRA('recipes/rocket_nose_cone') }, 
        MC('lightning_rod'),               
        FA('whirlwind_prism')         
    )

    event.replaceInput(
      { id: ASTRA('recipes/steel_engine') }, 
      '#forge:plates/steel',               
      CRDD('infernal_mechanism')         
  )

  // t1 plate
  transitional = CRDD('infernal_mechanism')
  event.recipes.createSequencedAssembly([
    KJ('tier_1_plating')
  ], CRDD('infernal_mechanism'), [
    event.recipes.createDeploying(transitional, [transitional, 'forbidden_arcanus:mundabitur_dust']),
    event.recipes.createDeploying(transitional, [transitional, 'forbidden_arcanus:mundabitur_dust']),
    event.recipes.createDeploying(transitional, [transitional, 'forbidden_arcanus:corrupti_dust']),
    event.recipes.createDeploying(transitional, [transitional, 'forbidden_arcanus:corrupti_dust']),
    event.recipes.createDeploying(transitional, [transitional, TFMG('heavy_plate')]),
    event.recipes.createPressing(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(1)
    .id(KJ('tier_1_plating'))


      event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
        '   N   ',
        '  BBB  ',
        '  BTB  ',
        '  BTB  ',
        '  BSB  ',
        '  BXB  ',
        ' FRXRF ',
        ' F E F ',
        ], {
        F: ASTRA('rocket_fin'),
        T: ASTRA('steel_tank'),
        R: TFMG('radial_engine'),
        X: TFMG('turbine_engine'),
        E: ASTRA('steel_engine'),
        B: KJ('tier_1_plating'),
        S: '#create:seats',
        N: ASTRA('rocket_nose_cone')
       
        })
      /*  event.recipes.createMechanicalCrafting('ad_astra:tier_2_rocket', [
        '   N   ',
        '  BBB  ',
        '  BCB  ',
        '  BGB  ',
        '  BSB  ',
        '  BWB  ',
        ' FTBTF ',
        ' F E F ',
        ], {
        F: 'ad_astra:rocket_fin',
        E: 'ad_astra:desh_engine',
        T: 'ad_astra:desh_tank',
        B: 'kubejs:tier_2_plating',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: '#forge:glass',
        W: 'kubejs:guidance_mechanism',
        N: 'ad_astra:rocket_nose_cone'
        })
        event.recipes.createMechanicalCrafting('ad_astra:tier_3_rocket', [
        '   N   ',
        '  BBB  ',
        '  BCB  ',
        '  BGB  ',
        ' TBSBT ',
        ' TBWBT ',
        ' TCCCT ',
        ' FTBTF ',
        ' E E E ',
        ], {
        F: 'ad_astra:rocket_fin',
        E: 'ad_astra:ostrum_engine',
        T: 'ad_astra:ostrum_tank',
        B: 'kubejs:tier_3_plating',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: 'mekanism:structural_glass',
        W: 'kubejs:guidance_mechanism',
        N: 'ad_astra:rocket_nose_cone'
        })
        event.recipes.createMechanicalCrafting('ad_astra:tier_4_rocket', [
        '   N   ',
        '  BBB  ',
        '  BGB  ',
        '  BSB  ',
        'N BWB N',
        'TPBABPT',
        'BPBBBPB',
        'T CBC T',
        'E  E  E',
        ], {
        E: 'ad_astra:calorite_engine',
        T: 'ad_astra:calorite_tank',
        B: 'kubejs:tier_4_plating',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: 'mekanism:structural_glass',
        W: 'kubejs:guidance_mechanism',
        N: 'ad_astra:rocket_nose_cone',
        P: 'ad_astra:steel_plate',
        A: 'mekanism:pellet_antimatter'
        })
        event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
        ' BPB ',
        ' PSP ',
        ' BPB ',
        ], {
        B: 'mekanism:block_steel',
        S: 'create:shadow_steel',
        P: 'create:iron_sheet'
        })*/


  /*
    ===============================
    ---->Chp 9 Calculation Mechanism
    ==============================
  */

  event.custom({
    "type": "create_dd:superheating",
    "ingredients": [
      {
        "item": "minecraft:blackstone"
      }
    ],
    "results": [
      {
        "item": "forbidden_arcanus:darkstone",
        "count": 1
      }
    ]
  })

  event.recipes.createCrushing([
    Item.of(AE2('singularity')).withChance(0.40),
  ], 'forbidden_arcanus:arcane_crystal_obelisk').processingTime(800)

  //shimmer
  event.recipes.createMixing(Fluid.of(CRDD("shimmer"), 500),[
    'quark:red_corundum_cluster',
    'quark:orange_corundum_cluster',
    'quark:yellow_corundum_cluster',
    'quark:green_corundum_cluster',
    'quark:blue_corundum_cluster',
    'quark:indigo_corundum_cluster',
    'quark:violet_corundum_cluster',
    'quark:white_corundum_cluster',
    'quark:black_corundum_cluster',
  ]).superheated()

  const chance = 0.06
  event.recipes.createCrushing([
    Item.of(AE2('white_paint_ball')).withChance(chance),
    Item.of(AE2('light_gray_paint_ball')).withChance(chance),
    Item.of(AE2('gray_paint_ball')).withChance(chance),
    Item.of(AE2('pink_paint_ball')).withChance(chance),
    Item.of(AE2('red_paint_ball')).withChance(chance),
    Item.of(AE2('orange_paint_ball')).withChance(chance),
    Item.of(AE2('yellow_paint_ball')).withChance(chance),
    Item.of(AE2('lime_paint_ball')).withChance(chance),
    Item.of(AE2('green_paint_ball')).withChance(chance),
    Item.of(AE2('cyan_paint_ball')).withChance(chance),
    Item.of(AE2('light_blue_paint_ball')).withChance(chance),
    Item.of(AE2('blue_paint_ball')).withChance(chance),
    Item.of(AE2('purple_paint_ball')).withChance(chance),
    Item.of(AE2('magenta_paint_ball')).withChance(chance),
    Item.of(AE2('brown_paint_ball')).withChance(chance),
    Item.of(AE2('black_paint_ball')).withChance(chance)
  ], AE2('quantum_entangled_singularity'))

  event.recipes.createMixing(AE2('white_lumen_paint_ball'),[AE2('white_paint_ball'),MC('white_dye'),Fluid.of(CRDD("shimmer"), 185)]).superheated()
  event.recipes.createMixing(AE2('light_gray_lumen_paint_ball'),[AE2('light_gray_paint_ball'),MC('light_gray_dye'),Fluid.of(CRDD("shimmer"), 150)]).superheated()
  event.recipes.createMixing(AE2('gray_lumen_paint_ball'),[AE2('gray_paint_ball'),MC('gray_dye'),Fluid.of(CRDD("shimmer"), 129)]).superheated()
  event.recipes.createMixing(AE2('pink_lumen_paint_ball'),[AE2('pink_paint_ball'),MC('pink_dye'),Fluid.of(CRDD("shimmer"), 180)]).superheated()
  event.recipes.createMixing(AE2('red_lumen_paint_ball'),[AE2('red_paint_ball'),MC('red_dye'),Fluid.of(CRDD("shimmer"), 125)]).superheated()
  event.recipes.createMixing(AE2('orange_lumen_paint_ball'),[AE2('orange_paint_ball'),MC('orange_dye'),Fluid.of(CRDD("shimmer"), 175)]).superheated()
  event.recipes.createMixing(AE2('yellow_lumen_paint_ball'),[AE2('yellow_paint_ball'),MC('yellow_dye'),Fluid.of(CRDD("shimmer"), 194)]).superheated()
  event.recipes.createMixing(AE2('lime_lumen_paint_ball'),[AE2('lime_paint_ball'),MC('lime_dye'),Fluid.of(CRDD("shimmer"), 111)]).superheated()
  event.recipes.createMixing(AE2('green_lumen_paint_ball'),[AE2('green_paint_ball'),MC('green_dye'),Fluid.of(CRDD("shimmer"), 187)]).superheated()
  event.recipes.createMixing(AE2('cyan_lumen_paint_ball'),[AE2('cyan_paint_ball'),MC('cyan_dye'),Fluid.of(CRDD("shimmer"), 159)]).superheated()
  event.recipes.createMixing(AE2('light_blue_lumen_paint_ball'),[AE2('light_blue_paint_ball'),MC('light_blue_dye'),Fluid.of(CRDD("shimmer"), 159)]).superheated()
  event.recipes.createMixing(AE2('blue_lumen_paint_ball'),[AE2('blue_paint_ball'),MC('blue_dye'),Fluid.of(CRDD("shimmer"), 189)]).superheated()
  event.recipes.createMixing(AE2('purple_lumen_paint_ball'),[AE2('purple_paint_ball'),MC('purple_dye'),Fluid.of(CRDD("shimmer"), 123)]).superheated()
  event.recipes.createMixing(AE2('magenta_lumen_paint_ball'),[AE2('magenta_paint_ball'),MC('magenta_dye'),Fluid.of(CRDD("shimmer"), 90)]).superheated()
  event.recipes.createMixing(AE2('brown_lumen_paint_ball'),[AE2('brown_paint_ball'),MC('brown_dye'),Fluid.of(CRDD("shimmer"), 112)]).superheated()
  event.recipes.createMixing(AE2('black_lumen_paint_ball'),[AE2('black_paint_ball'),MC('black_dye'),Fluid.of(CRDD("shimmer"), 70)]).superheated()
  
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('light_gray_lumen_paint_ball')],  AE2('white_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('gray_lumen_paint_ball')],  AE2('light_gray_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('pink_lumen_paint_ball')],  AE2('gray_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('red_lumen_paint_ball')],  AE2('pink_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('orange_lumen_paint_ball')],  AE2('red_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('yellow_lumen_paint_ball')],  AE2('orange_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('lime_lumen_paint_ball')],  AE2('yellow_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('green_lumen_paint_ball')],  AE2('lime_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('cyan_lumen_paint_ball')],  AE2('green_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('light_blue_lumen_paint_ball')],  AE2('cyan_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('blue_lumen_paint_ball')],  AE2('light_blue_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('purple_lumen_paint_ball')],  AE2('blue_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('magenta_lumen_paint_ball')],  AE2('purple_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('brown_lumen_paint_ball')],  AE2('magenta_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('black_lumen_paint_ball')],  AE2('brown_lumen_paint_ball'))
  event.recipes.createEmptying([Fluid.of(CRDD("chromatic_waste"),100),AE2('matter_ball')],  AE2('black_lumen_paint_ball'))


  event.recipes.createMixing('2x '+CRDD('chromatic_compound'),[
    CRDD('polished_spectral_ruby'),
    AE2('matter_ball'),
    Fluid.of(CRDD("chromatic_waste"),500)
  ]).superheated()


  transitional = CRDD('incomplete_calculation_mechanism')
  event.recipes.createSequencedAssembly([
    Item.of(CRDD('calculation_mechanism')).withChance(100.0),
    Item.of(CRA('copper_spool')).withChance(50.0),
  ], CRDD('infernal_mechanism'), [
    event.recipes.createDeploying(transitional, [transitional, CRDD('refined_radiance_sheet')]),
    event.recipes.createDeploying(transitional, [transitional, CRDD('tin_sheet')]),
    event.recipes.createDeploying(transitional, [transitional, CRA('copper_spool')]),
    event.recipes.createDeploying(transitional, [transitional, CR('electron_tube')]),
    event.recipes.createPressing(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(10)
    .id(CRDD('calculation_mechanism'))

  
    transitional = CRDD('incomplete_integrated_circuit')
    event.recipes.createSequencedAssembly([
      Item.of(CRDD('integrated_circuit')).withChance(100.0),
      Item.of(MC('glowstone_dust')).withChance(15.0),
      Item.of(CRA('copper_wire')).withChance(15.0),
      Item.of(CR('brass_nugget')).withChance(15.0),
      Item.of(CRA('electrum_nugget')).withChance(15.0),
      Item.of('create_connected:control_chip').withChance(15.0),
    ], CRDD('calculation_mechanism'), [
      event.recipes.createDeploying(transitional, [transitional, CRDD('overcharge_alloy_sheet')]),
      event.recipes.createDeploying(transitional, [transitional, 'create_connected:control_chip']),
      event.recipes.createDeploying(transitional, [transitional, MC('glowstone_dust')]),
      event.recipes.createDeploying(transitional, [transitional, CR('electron_tube')]),
      event.recipes.createDeploying(transitional, [transitional, CRA('electrum_wire')]),
    ]).transitionalItem(transitional)
      .loops(10)
      .id(CRDD('integrated_circuit'))


    transitional = 'create_connected:incomplete_control_chip'
    event.recipes.createSequencedAssembly([
      Item.of('create_connected:control_chip').withChance(100.0)
    ], CR('golden_sheet'), [
      event.recipes.createDeploying(transitional, [transitional, CR('brass_nugget')]),
      event.recipes.createDeploying(transitional, [transitional, CRA('electrum_nugget')]),
    ]).transitionalItem(transitional)
      .loops(64)
      .id('create_connected:control_chip')

    // readd crushed raw zinc washing
    event.recipes.createSplashing('9x '+CR('zinc_nugget'),CR('crushed_raw_zinc'))

  /*
    ===============================
    ----AE2
    ==============================
  */
  transitional ='createappliedkinetics:incomplete_printed_calculation_circuit'
  event.recipes.createSequencedAssembly([
    AE2('printed_calculation_processor')
  ], CRDD('integrated_circuit'), [
    event.recipes.createDeploying(transitional, [transitional, AE2('charged_certus_quartz_crystal')]),
    event.recipes.createDeploying(transitional, [transitional, AE2('calculation_processor_press')]).keepHeldItem(),
    event.recipes.createPressing(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(1)
    .id(AE2('printed_calculation_processor'))

  transitional ='createappliedkinetics:incomplete_printed_engineering_circuit'
  event.recipes.createSequencedAssembly([
    AE2('printed_engineering_processor')
  ], CRDD('integrated_circuit'), [
    event.recipes.createDeploying(transitional, [transitional, MC('diamond')]),
    event.recipes.createDeploying(transitional, [transitional, CRA('diamond_grit')]),
    event.recipes.createDeploying(transitional, [transitional, CRA('diamond_grit')]),
    event.recipes.createDeploying(transitional, [transitional, CRA('diamond_grit')]),
    event.recipes.createDeploying(transitional, [transitional, AE2('engineering_processor_press')]).keepHeldItem(),
    event.recipes.createPressing(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(1)
    .id(AE2('printed_engineering_processor'))

  transitional ='createappliedkinetics:incomplete_printed_logic_circuit'
  event.recipes.createSequencedAssembly([
    AE2('printed_logic_processor')
  ], CRDD('integrated_circuit'), [
    event.recipes.createDeploying(transitional, [transitional, CR('golden_sheet')]),
    event.recipes.createDeploying(transitional, [transitional, AE2('logic_processor_press')]).keepHeldItem(),
    event.recipes.createPressing(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(1)
    .id(AE2('printed_logic_processor'))


  event.recipes.createMixing(KJ('siliceous_compound'),['#forge:sand',MC('clay_ball')])
  event.blasting(AE2('silicon'),KJ('siliceous_compound'))

  event.recipes.createCrushing([
    Item.of(AE2('sky_dust')).withChance(1),
    Item.of(AE2('sky_dust')).withChance(0.10),
  ], AE2('sky_stone_block')).processingTime(800)


  /*
    ===============================
    ----Misc
    ==============================
  */
  event.recipes.createMechanicalCrafting(MC('gilded_blackstone'), [
      ' G ',
      'GBG',
      'GGG'
    ], {
      G: MC('gold_nugget'),
      B: MC('blackstone')
  })

  event.recipes.createMechanicalCrafting('waystones:warp_stone', [
    ' ABA ',
    'ACBCA',
    'BCDCB',
    'ACBCA',
    ' ABA '
  ], {
    A: MC('amethyst_shard'),
    B: 'waystones:warp_dust',
    C: MC('ender_pearl'),
    D: MC('blaze_powder')
  })

})