import binToInt from "../bin-to-int";
import intToHex from "../int-to-hex";

export default (bin = "00000000") => {
	return intToHex(binToInt(bin));
};
