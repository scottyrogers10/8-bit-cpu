import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Cell = ({ bit = "0", style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles, { bit });

	return <View style={[stylesheet.root, style]} {...props} />;
};

export default Cell;
