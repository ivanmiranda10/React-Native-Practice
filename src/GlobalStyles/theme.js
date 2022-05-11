import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecundary: "#586069",
    primary: "#0366d6",
    white: "#fefefe",
  },
  fontSizes: {
    body: 14,
    Heading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  navbar: {
    primary: "#24292e",
    primaryText: "#fff",
    secondaryText: "#999",
  },
};

export default theme;
