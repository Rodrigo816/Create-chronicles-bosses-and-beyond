
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


ServerEvents.recipes(event => {

    //Twilight Forest
    event.remove({id:'twilightforest:uncrafting_table'})
    
    let multicut = (outputs, input, remove_old) => {
        outputs.forEach(output => {
            if (remove_old) {
                event.remove({ output: output })
            };
            event.stonecutting(output, input)
           /* if (remove_old) {
                event.recipes.createCompacting(input, [output, "kubejs:radiant_mechanism"])
            }
            if (output.toString().startsWith("x ", 1)) { output = output.slice(3) }
            wrencharray.push(Item.of(output))*/
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
            
          /*  if (remove_old) {
                event.recipes.createCompacting([machine, Item.of(entry[0]).withChance(0.4)], [entry[1], "kubejs:radiant_mechanism"])
            }*/
           /* if (!entry[1].toString().startsWith("x ", 1) && !entry[1].toString().startsWith("x ", 2)) {
                if (Item.of(entry[1]).isBlock()) {
                    event.recipes.create.itemApplication(entry[1], [machine, entry[0]])
                }
            }
            if (entry[1].toString().startsWith("x ", 1) || entry[1].toString().startsWith("x ", 2)) {

                event.recipes.create.deploying(entry[1], [machine, entry[0]])

            }

            if (entry[1].toString().startsWith("x ", 1)) { entry[1] = entry[1].slice(3) }
            wrencharray.push(Item.of(entry[1]))*/

        });
    };   

    /*
    ===============================
    ---->Chapter 1 Andesite Rotation
    ==============================
    */
    event.remove({ id: CR('crafting/materials/andesite_alloy_from_zinc') })
    event.remove({ id: CR('compacting/andesite_from_flint') })
    event.remove({ id: IF('crackled_to_gravel') })
    event.remove({ id: IF('furnace/frozen_gravel') })
    event.remove({ id: MC('andesite') })
    event.remove({ id: ARS('manipulation_essence_to_andesite') })
    event.remove({ id: CRDD('industrial_iron/andesite_alloy_mixing') })
 

    //event.smoking('minecraft:andesite', 'minecraft:gravel')
    event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(900)
    
    // Rotation Mechanism
	let transitional = 'kubejs:incomplete_rotation_mechanism'
	event.recipes.createSequencedAssembly([
		'kubejs:rotation_mechanism',
	], '#minecraft:wooden_slabs', [
		event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitional, [transitional, ASTRA('hammer')])
	]).transitionalItem(transitional)
		.loops(1)
		.id('kubejs:rotation_mechanism')

    event.shaped(KJ('rotation_mechanism'), [
        'BBB',
        'BDE',
        ' A '
    ], {
        A: '#minecraft:wooden_slabs',
        B: CR('andesite_alloy'),
        D: ASTRA('hammer'),
        E: 'minecraft:iron_ingot'
    })

    // Rotation Machine
    transitional = 'kubejs:incomplete_rotation_machine'

    event.recipes.createSequencedAssembly([
        'kubejs:andesite_machine',
    ], 'create:andesite_casing', [
        event.recipes.createDeploying(transitional, [transitional, KJ('rotation_mechanism')])
    ])	.transitionalItem(transitional)
        .loops(8)
        .id('kubejs:rotation_machine_by_deployer') 

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
        Item.of(CR('encased_chain_drive'), 2),
        Item.of(CR('adjustable_chain_gearshift'), 2),
        Item.of(CR('gearshift'), 2),
        Item.of(CR('clutch'), 2),
        Item.of(CR('gearbox'), 4),
        Item.of(CR('gantry_carriage'), 2),
        Item.of(CR('chute'), 3),
        Item.of(CR('empty_blaze_burner'), 2),
        Item.of(CRA('rolling_mill'), 2)
    ];
    const andesite_shapes = [
        //["thermal:drill_head", "create:mechanical_drill"],
        //["thermal:saw_blade", "create:mechanical_saw"],r
        [CR('propeller'), CR('encased_fan')],
        [MC('iron_block'), CR('mechanical_press')],
        [CR('whisk'), CR('mechanical_mixer')],
        [CR('brass_hand'), CR('deployer')],
        [MC('diamond_block'),  CR('schematicannon')],
    ];
    multicut(andesite_machines_cutting, "kubejs:andesite_machine", true);
    machine_shape(andesite_shapes, "kubejs:andesite_machine", true);



    /*
    ===============================
    ---->Chapter 2 Cooper Valve
    ==============================
    */
     // Valve Mechanism
    event.remove({ id: CRSA('hydraulic_engine_recipe') })
	let transitionalValve = 'kubejs:incomplete_rotation_machine' // está mal
	event.recipes.createSequencedAssembly([
		, CRSA('hydraulic_engine'),
	], 'kubejs:rotation_mechanism', [
		event.recipes.createDeploying(transitionalValve, [transitionalValve, CR('copper_sheet')]),
        event.recipes.createDeploying(transitionalValve, [transitionalValve, CR('copper_sheet')]),
        /*event.recipes.createFilling(transitionalValve, [
            transitionalValve,
            Fluid.of('minecraft:water', 250)
          ]),*/
       // event.recipes.createPressing(transitionalValve, 'coal_block'),
	]).transitionalItem(transitionalValve)
		.loops(1)
		.id(CRSA('hydraulic_engine'))
    

    event.shapeless(KJ('copper_machine'), [KJ('valve_mechanism'),KJ('valve_mechanism')])

    const copper_machines_cutting = [
        Item.of(CR('fluid_pipe'), 12),
        Item.of(CR('mechanical_pump'), 2),
        Item.of(CR('fluid_valve'), 2),
        Item.of(CR('hose_pulley'), 2),
        Item.of(CR('portable_fluid_interface'), 2),
        Item.of(CR('steam_engine'), 1),
        Item.of(CR('copper_valve_handle'), 6),
        Item.of(CR('copper_casing'), 10),
    ];
    const copper_shapes = [
        [MC('iron_bars'), CR('item_drain')],
        [MC('bucket'), CR('spout')],
        [MC('glass'), CR('fluid_tank')],
        [MC('copper_block'), CR('copper_backtank')],
        [CRTM('sprinkler_head'), CRTM('sprinkler')],
        [MC('slime_block'), CRTM('sticky_launcher')],
    ];
    
    multicut(copper_machines_cutting, KJ('copper_machine'), true);
    machine_shape(copper_shapes, KJ('copper_machine'), true);


    /*
    ===============================
    ---->Chapter 3 Brass
    ==============================
    */
    event.replaceInput(
        { id: 'create:crafting/kinetics/brass_hand' }, 
        CR('brass_sheet'),               
        CR('golden_sheet')         
    )
    event.remove({ id: CRDD('industrial_iron/andesite_alloy_mixing') })
    let transitionalPrecision = 'kubejs:incomplete_valve_mechanism'
	event.recipes.createSequencedAssembly([
		KJ('precision_mechanism'),
	], KJ('rotation_mechanism'), [
		event.recipes.createDeploying(transitionalValve, [transitionalValve, CR('copper_sheet')]),
        event.recipes.createDeploying(transitionalValve, [transitionalValve, CR('copper_sheet')]),
        /*event.recipes.createFilling(transitionalValve, [
            transitionalValve,
            Fluid.of('minecraft:water', 250)
          ]),*/
        event.recipes.createPressing(transitionalValve, 'coal_block'),
	]).transitionalItem(transitionalValve)
		.loops(1)
		.id(KJ('precision_mechanism'))

})