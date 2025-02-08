import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { Screen, TextEditor } from "./components";
import styles from "./styles";

const App = ({ style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<Screen style={stylesheet.screen} />
			<TextEditor mt={16} p={8} style={stylesheet.editor} />
		</View>
	);
};

export default App;
