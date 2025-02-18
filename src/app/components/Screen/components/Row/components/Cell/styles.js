export default (_theme, { bit }) => {
	return {
		root: {
			backgroundColor: bit === "1" ? "#0eca09" : "#000",
			height: "50px",
			width: "50px",
		},
	};
};
