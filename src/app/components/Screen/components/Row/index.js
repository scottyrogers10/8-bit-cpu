import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { Cell } from "./components";
import styles from "./styles";

const Row = ({ byte = "00000000", style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View.Group style={[stylesheet.root, style]} {...props}>
			{byte.split("").map((bit, index) => {
				return <Cell bit={bit} key={`CELL_${index}`} />;
			})}
		</View.Group>
	);
};

export default Row;
