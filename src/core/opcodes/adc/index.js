export default {
	65: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const address = memory.get(state.pc + 1);
			const val = state.a + memory.get(address) + statusFlags.carry;

			if (val > 255) {
				state.a = val - 256;
				statusFlags.carry = 1;
			} else {
				state.a = val;
				statusFlags.carry = 0;
			}

			statusFlags.negative = state.a > 127 ? 1 : 0;
			statusFlags.zero = state.a === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "zeroPage",
		name: "ADC",
	},
	69: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const val = state.a + memory.get(state.pc + 1) + statusFlags.carry;

			if (val > 255) {
				state.a = val - 256;
				statusFlags.carry = 1;
			} else {
				state.a = val;
				statusFlags.carry = 0;
			}

			statusFlags.negative = state.a > 127 ? 1 : 0;
			statusFlags.zero = state.a === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "ADC",
	},
	75: {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const address = memory.get(state.pc + 1);
			const val = state.a + memory.get(address + state.x) + statusFlags.carry;

			if (val > 255) {
				state.a = val - 256;
				statusFlags.carry = 1;
			} else {
				state.a = val;
				statusFlags.carry = 0;
			}

			statusFlags.negative = state.a > 127 ? 1 : 0;
			statusFlags.zero = state.a === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "zeroPageX",
		name: "ADC",
	},
};
