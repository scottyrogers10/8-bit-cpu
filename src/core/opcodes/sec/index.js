export default {
	38: {
		bytes: 1,
		execute: ({ state, statusFlags }) => {
			statusFlags.carry = 1;
			state.pc += 1;
		},
		mode: "implied",
		name: "SEC",
	},
};
