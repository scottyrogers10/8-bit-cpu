export default {
	A0: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			state.y = memory.get(state.pc + 1);
			statusFlags.zero = state.y === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "LDY",
	},
};
