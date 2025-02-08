import React from "react";
import { useLayoutProps, useStyles } from "#library/hooks";
import styles from "./styles";

const TextArea = ({ inlineStyle = {}, style = {}, ...props }) => {
	const { layoutProps, rest } = useLayoutProps(props);
	const { css, stylesheet } = useStyles(styles, { layoutProps });

	return <textarea className={css(stylesheet.root, style)} style={inlineStyle} {...rest} />;
};

export default TextArea;
