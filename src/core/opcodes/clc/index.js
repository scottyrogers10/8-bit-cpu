export default {
	18: {
		bytes: 1,
		execute: ({ state, statusFlags }) => {
			statusFlags.carry = 0;
			state.pc += 1;
		},
		mode: "implied",
		name: "CLC",
	},
};
