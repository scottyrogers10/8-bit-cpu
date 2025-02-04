export default () => {
	const memory = ["00", "00", "00", "00", "00", "00"].map((byte) => {
		const hexInt = Number(`0x${byte}`);
		return hexInt.toString(2).padStart(8, "0");
	});

	return { state: { memory } };
};
