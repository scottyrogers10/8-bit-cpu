export default {
	A2: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			state.x = memory.get(state.pc + 1);
			statusFlags.zero = state.x === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "LDX",
	},
};
