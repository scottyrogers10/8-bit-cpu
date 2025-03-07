export default {
	D0: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const offset = memory.get(state.pc + 1);

			if (statusFlags.zero === 0) {
				state.pc += offset > 127 ? offset - 256 : offset;
			}

			state.pc += 2;
		},
		mode: "relative",
		name: "BNE",
	},
};
