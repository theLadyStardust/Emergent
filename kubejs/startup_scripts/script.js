// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// key : [regName : "registry_name", dispName : "Display Name", rarity : "rarity", color : hexcolor/0xFFFFFF]

var researchStage(disp, rar, col){
	return {regName : disp.toLower(), dispName : disp, rarity : rar, color : col, isFluid : false}  
}

var researchStage(disp, rar, col, fluid){
	return {regName : disp.toLower(), dispName : disp, rarity : rar, color : col, isFluid : fluid}  
}

var research_stages = {
	inge : researchStage("Ingenuity", "uncommon", 0xff5967), 
	prod : researchStage("Productivity", "uncommon", 0xd15b00), 
	inve : researchStage("Investigation", "uncommon", 0x8086ff),
	wond : researchStage("Wonder", "uncommon", 0xff33c9),
	indu : researchStage("Industry", "rare", 0xcc875c),
	avar : researchStage("Avarice", "rare", 0xf2c600),
	prec : researchStage("Precision", "rare", 0x36e4ff),
	stim : researchStage("Stimulation", "epic", 0x7908cf)
};

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	for (var key in research_stages) {
		event.create("bottle_of_" + key.regName)
			.displayName("Bottle of " + key.dispName)
			.rarity(key.rarity)
			.glow(true)
			.maxStackSize(16)
	}
})

onEvent('fluid.registry', event => {
	for (var key in research_stages) {
		if (key.isFluid){
			event.create("essence_of_" + key.regName)
				.displayName("Essence of " + key.dispName)
				.thickTexture(key.color)
				.bucketColor(key.color)
				.luminosity(8)
		}
	}
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
