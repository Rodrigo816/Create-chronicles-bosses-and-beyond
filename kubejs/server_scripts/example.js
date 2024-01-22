
// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let CI = (id, x) => MOD("createindustry", id, x)
let IF = (id, x) => MOD("iceandfire", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)
let CRDD = (id, x) => MOD("create_dd", id, x)

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

    /*
    ===============================
    ---->Chapter 1
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
		event.recipes.createDeploying(transitional, [transitional, CR('cogwheel')]),
		event.recipes.createDeploying(transitional, [transitional, 'minecraft:shears'])
	]).transitionalItem(transitional)
		.loops(1)
		.id('kubejs:rotation_mechanism')

    event.shaped(KJ('rotation_mechanism'), [
        'BBB',
        'CDE',
        ' A '
    ], {
        A: '#minecraft:wooden_slabs',
        B: CR('andesite_alloy'),
        C: CR('cogwheel'),
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
    
})