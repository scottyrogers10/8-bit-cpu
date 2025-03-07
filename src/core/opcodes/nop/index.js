export default {
	EA: {
		bytes: 1,
		execute: ({ state }) => {
			state.pc += 1;
		},
		mode: "implied",
		name: "NOP",
	},
};
