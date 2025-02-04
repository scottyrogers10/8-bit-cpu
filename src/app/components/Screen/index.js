import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { Row } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const Screen = ({ style = {}, ...props }) => {
	const { state } = useController();
	const { stylesheet } = useStyles(styles);

	return (
		<View.Stack style={[stylesheet.root, style]} {...props}>
			{state.memory.map((byte, index) => {
				return <Row byte={byte} key={`ROW_${index}`} />;
			})}
		</View.Stack>
	);
};

export default Screen;
