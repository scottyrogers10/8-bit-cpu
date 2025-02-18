import { hexToInt } from "#library/utils/converters";

const memory = new Uint8Array(65536);

const get = (address = 0) => {
	return memory[address];
};

const getSubsection = (address = 0, length = 1) => {
	return memory.slice(address, address + length);
};

const load = (address = 4096, prg = "") => {
	prg.split(" ").forEach((byte, i) => {
		memory[i + address] = hexToInt(byte);
	});
};

const reset = () => {
	memory.fill(0);
};

const set = (address = 0, value = 0) => {
	memory[address] = value;
};

export default { get, getSubsection, load, reset, set };
