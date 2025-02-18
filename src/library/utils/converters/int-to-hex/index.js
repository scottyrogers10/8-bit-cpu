export default (int = 0) => {
	const hex = int.toString(16).toUpperCase();
	return hex.length === 1 ? "0" + hex : hex;
};
