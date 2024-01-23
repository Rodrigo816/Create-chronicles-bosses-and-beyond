
// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let CR = (id, x) => MOD("create", id, x)
let CRA = (id, x) => MOD("createaddition", id, x)
let CRDD = (id, x) => MOD("create_dd", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let CI = (id, x) => MOD("createindustry", id, x)
let IF = (id, x) => MOD("iceandfire", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)


ServerEvents.recipes(event => {

    
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
    event.remove({ id: 'minecraft:andesite' })
    event.remove({ id: ARS('manipulation_essence_to_andesite') })
    event.remove({ id: CRDD('industrial_iron/andesite_alloy_mixing') })
    event.replaceInput(
        { id: 'create:crafting/kinetics/mechanical_mixer' }, 
        'create:whisk',            
        'minecraft:diamond'         
    )

    //event.smoking('minecraft:andesite', 'minecraft:gravel')
    event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(900)
    
    // Rotation Mechanism
	let transitional = 'kubejs:incomplete_rotation_mechanism'
	event.recipes.createSequencedAssembly([
		'kubejs:rotation_mechanism',
	], '#minecraft:wooden_slabs', [
		event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitional, [transitional, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitional, [transitional, 'minecraft:shears'])
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
        D: 'minecraft:shears',
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
        Item.of(CR('portable_storage_interface'), 2),
        Item.of(CR('mechanical_harvester'), 2),
        Item.of(CR('mechanical_plough'), 2),
        Item.of(CR('andesite_funnel'), 4),
        Item.of(CR('andesite_tunnel'), 4),
        Item.of(CR('weighted_ejector'), 2),
        Item.of(CRA('rolling_mill'), 1)
    ];
    const andesite_shapes = [
        //["thermal:drill_head", "create:mechanical_drill"],
        //["thermal:saw_blade", "create:mechanical_saw"],
        //["thermal:rf_coil", "thermal:dynamo_stirling"],
        [CR('propeller'), 'create:encased_fan'],
        //[MC('iron_block'), 'create:mechanical_press'],
        [CR('whisk'), 'create:mechanical_mixer'],
        //['create:brass_hand', 'create:deployer'],
        //[MC('bucket'), TE('device_tree_extractor')],
        //['minecraft:compass', 'ae2:sky_compass'],
        //['createaddition:copper_rod', Item.of('createaddition:connector', 4)],
        //['createaddition:capacitor', 'createaddition:alternator']

    ];
    multicut(andesite_machines_cutting, "kubejs:andesite_machine", true);
    machine_shape(andesite_shapes, "kubejs:andesite_machine", true);



    /*
    ===============================
    ---->Chapter 2 Cooper Valve
    ==============================
    */
     // Valve Mechanism
	let transitionalValve = 'kubejs:incomplete_valve_mechanism'
	event.recipes.createSequencedAssembly([
		'kubejs:valve_mechanism',
	], 'kubejs:rotation_mechanism', [
		event.recipes.createDeploying(transitionalValve, [transitionalValve, CR('copper_sheet')]),
        event.recipes.createDeploying(transitionalValve, [transitionalValve, CR('copper_sheet')]),
        /*event.recipes.createFilling(transitionalValve, [
            transitionalValve,
            Fluid.of('minecraft:water', 250)
          ]),*/
        event.recipes.createPressing(transitionalValve, 'coal_block'),
	]).transitionalItem(transitionalValve)
		.loops(1)
		.id('kubejs:valve_mechanism')
    

    event.shapeless(KJ('copper_machine'), [KJ('valve_mechanism'),KJ('valve_mechanism')])

})