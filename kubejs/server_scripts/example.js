
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

ServerEvents.recipes(event => {

    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
    
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

    event.replaceInput(
        { id: 'create:crafting/kinetics/mechanical_mixer' }, 
        'create:whisk',            
        'minecraft:diamond'         
    )
    // Blast 1 iron ingot into 10 nuggets in a Blast Furnace: 
    //event.blasting('minecraft:andesite', 'minecraft:gravel')
    event.smoking('minecraft:andesite', 'minecraft:gravel')
    // Cook 1 stone into 3 gravel in a Furnace:
    event.smelting('3x minecraft:gravel', 'minecraft:stone')

    // Blast 1 iron ingot into 10 nuggets in a Blast Furnace: 
    event.blasting('minecraft:tinted_glass', 'minecraft:glass')

    // Smoke glass into tinted glass in the Smoker:
    event.smoking('minecraft:tinted_glass', 'minecraft:glass')

    // Burn sticks into torches on the Campfire:
    event.campfireCooking('minecraft:torch', 'minecraft:diamond')
   // event.smelting("minecraft:leather", "minecraft:rotten_flesh");
    //event.smoking("minecraft:leather", "minecraft:rotten_flesh");

    //Magma Rotten Flesh to Leather
    //event.smelting("minecraft:leather", "rottencreatures:magma_rotten_flesh");
    //event.smoking("minecraft:leather", "rottencreatures:magma_rotten_flesh");


    // Rotation Mechanism
	let transitional = 'kubejs:incomplete_rotation_mechanism'
	event.recipes.createSequencedAssembly([
		'kubejs:rotation_mechanism',
	], '#minecraft:wooden_slabs', [
		event.recipes.createDeploying(transitional, [transitional, CR('cogwheel')]),
		event.recipes.createDeploying(transitional, [transitional, CR('large_cogwheel')]),
		event.recipes.createDeploying(transitional, [transitional, F('#saws')])
	]).transitionalItem(transitional)
		.loops(1)
		.id('kubejs:rotation_mechanism')

    event.shapeless(KJ('rotation_mechanism'), [F('#saws'), CR('cogwheel'), CR('andesite_alloy'), '#minecraft:logs']).id("kubejs:rotation_mechanism_manual_only")
        .damageIngredient(Item.of(KJ('stone_saw')))
        .damageIngredient(Item.of(KJ('iron_saw')))
        .damageIngredient(Item.of(KJ('diamond_saw')))   



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