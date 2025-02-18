import { gpu, memory, opcodes } from "#core";
import { intToHex } from "#library/utils/converters";

const state = { a: 0, pc: 0, x: 0, y: 0 };

const loop = () => {
	const opcode = intToHex(memory.get(state.pc));
	const instruction = opcodes[opcode];

	instruction.execute({ memory, state });
	state.pc += instruction.bytes;

	gpu.render(memory);

	requestAnimationFrame(loop);
};

const init = (prg = "") => {
	state.a = 0;
	state.x = 0;
	state.y = 0;

	state.pc = 4096;

	memory.reset();
	memory.load(state.pc, prg);

	loop();
};

export default { init };
