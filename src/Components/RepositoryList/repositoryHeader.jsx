import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";
import StyledText from "../../GlobalStyles";
import theme from "../../GlobalStyles/theme";

const RepositoryHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  lenguage,
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 8 }}>
      <View style={{ paddingRight: 10, justifyContent: "center" }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        {/* Con flex 1, ocupa todo el espacio disponible, haciendo un salto de
          linea si este espacio es sobrepasado */}
        <StyledText fontSize="heading" fontWeight="bold">
          {fullName}
        </StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.lenguage}>{lenguage}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "#f64",
      default: "#c90",
    }),
    alignSelf: "flex-start", // si no lo ponemos el backgroundColor ocupa todo el ancho de pantalla
    borderRadius: 10,
    marginVertical: 4, // top y bottom
    // overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryHeader;
