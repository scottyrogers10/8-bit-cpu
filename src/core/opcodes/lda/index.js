export default {
	A9: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			state.a = memory.get(state.pc + 1);
			statusFlags.zero = state.a === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "LDA",
	},
};
