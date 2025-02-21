import rom from "#roms/demo";
import { merge, update } from "#store/actions";

export default {
	actions: { merge, update },
	name: "text-editor",
	state: { prg: rom },
};
