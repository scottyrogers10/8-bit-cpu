import React from "react";
import { TextArea } from "#library/components";
import { useStyles } from "#library/hooks";
import { useController } from "./hooks";
import styles from "./styles";

const TextEditor = ({ style = {}, ...props }) => {
	const { handlers, state } = useController();
	const { stylesheet } = useStyles(styles);

	return <TextArea onChange={handlers.change} style={[stylesheet.root, style]} value={state.value} {...props} />;
};

export default TextEditor;
