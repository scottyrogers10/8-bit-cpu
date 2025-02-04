import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { Screen } from "./components";
import styles from "./styles";

const App = ({ style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<Screen />
		</View>
	);
};

export default App;
