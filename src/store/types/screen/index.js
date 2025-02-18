import { merge, update } from "#store/actions";

export default {
	actions: { merge, update },
	name: "screen",
	state: { memory: new Uint8Array(8) },
};
