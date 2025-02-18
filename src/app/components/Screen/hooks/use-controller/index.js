import { useStore } from "#hooks";
import { intToBin } from "#library/utils/converters";

export default () => {
	const memory = useStore(
		(store) => Array.from(store.getState("screen").memory).map((byte) => intToBin(byte)),
		["screen"]
	);

	return { state: { memory } };
};
