export default (int = 0) => {
	return int.toString(2).padStart(8, "0");
};
