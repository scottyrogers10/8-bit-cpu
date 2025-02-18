import hexToInt from "../hex-to-int";
import intToBin from "../int-to-bin";

export default (hex = "00") => {
	return intToBin(hexToInt(hex));
};
