export default (
	theme,
	{ align, borderRadius, color, ellipsis, highlightable, letterSpacing, lineHeight, size, weight }
) => ({
	root: {
		backgroundColor: color,
		borderRadius: `${borderRadius}px`,
		color: theme.colors.white,
		cursor: "pointer",
		fontSize: `${size}px`,
		fontWeight: weight,
		letterSpacing: `${letterSpacing}px`,
		lineHeight: `${lineHeight}px`,
		textAlign: align,
		...(ellipsis && { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }),
		...(!highlightable && { userSelect: "none" }),
	},
});
