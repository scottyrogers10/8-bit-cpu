import { gpu, memory, opcodes } from "#core";
import { intToHex } from "#library/utils/converters";

const frame = { id: null };
const state = { a: 0, pc: 0, x: 0, y: 0 };
const statusFlags = { carry: 0, negative: 0, zero: 0 };

const loop = () => {
	const opcode = intToHex(memory.get(state.pc));
	const { execute } = opcodes[opcode];

	execute({ memory, state, statusFlags });
	gpu.render(memory);
	frame.id = requestAnimationFrame(loop);
};

const init = (prg = "") => {
	cancelAnimationFrame(frame.id);

	state.a = 0;
	state.x = 0;
	state.y = 0;
	state.pc = 4096;

	statusFlags.carry = 0;
	statusFlags.negative = 0;
	statusFlags.zero = 0;

	memory.reset();
	memory.load(state.pc, prg);

	loop();
};

export default { init };
