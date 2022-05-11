import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "./theme";

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  ...restOfProps // esto es por si hay otras props pasadas (como inline-styles) que no se controlan desde el array de textStyles
}) => {
  const textStyles = [
    styles.text, // estilo base, el q siempre va a estar
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
  // la prop style ademas de recibir objetos, puede recibir arrays con estilos definidos
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
