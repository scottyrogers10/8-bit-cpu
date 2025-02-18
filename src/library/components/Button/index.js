import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import theme from "#library/theme";
import styles from "./styles";

const Button = ({
	align = "center",
	borderRadius = 16,
	color = theme.colors.gray[750],
	ellipsis = false,
	highlightable = false,
	label = "",
	letterSpacing = 0,
	lineHeight = 20,
	onClick = () => {},
	size = 18,
	style = {},
	weight = 500,
	...props
}) => {
	const { stylesheet } = useStyles(styles, {
		align,
		borderRadius,
		color,
		ellipsis,
		highlightable,
		letterSpacing,
		lineHeight,
		size,
		weight,
	});

	return (
		<View onClick={onClick} px={8} py={4} style={[stylesheet.root, style]} {...props}>
			{label}
		</View>
	);
};

export default Button;
