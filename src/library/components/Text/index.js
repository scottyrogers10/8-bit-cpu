import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import theme from "#library/theme";
import styles from "./styles";

const Text = ({
	align = "left",
	color = theme.colors.gray[750],
	ellipsis = false,
	highlightable = false,
	letterSpacing = 0,
	lineHeight = 16,
	size = 14,
	style = {},
	weight = 400,
	...props
}) => {
	const { stylesheet } = useStyles(styles, {
		align,
		color,
		ellipsis,
		highlightable,
		letterSpacing,
		lineHeight,
		size,
		weight,
	});

	return <View style={[stylesheet.root, style]} {...props} />;
};

export default Text;
