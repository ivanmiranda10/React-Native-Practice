import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "./theme";

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecundary,
    fontSize === "heading" && styles.Heading,
    fontWeight === "bold" && styles.boldText,
    align === "center" && styles.textAlignCenter,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecundary: {
    color: theme.colors.textSecundary,
  },
  boldText: {
    fontWeight: theme.fontWeights.bold,
  },
  Heading: {
    fontSize: theme.fontSizes.Heading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default StyledText;
