import React from "react";
import { Button, View } from "#library/components";
import { useStyles } from "#library/hooks";
import store from "#store";
import { Screen, TextEditor } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const App = ({ style = {}, ...props }) => {
	const { handlers } = useController();
	const { stylesheet } = useStyles(styles);

	window.store = store;

	return (
		<View.Group flex={1} style={[stylesheet.root, style]} {...props}>
			<Screen mr={32} style={stylesheet.screen} />
			<View.Stack justify={"center"}>
				<TextEditor mb={16} mt={16} p={8} style={stylesheet.editor} />
				<Button label={"LOAD / RESET"} onClick={handlers.execute} />
			</View.Stack>
		</View.Group>
	);
};

export default App;
