import store from "#store";

const render = (memory) => {
	const screenMemory = memory.getSubsection(1024, 8);
	store.dispatch("screen.merge", { memory: screenMemory });
};

export default { render };
