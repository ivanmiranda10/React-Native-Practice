import React from "react";
import { View, StyleSheet, Image } from "react-native";
import RepositoryStats from "./repositoryStats";
import RepositoryHeader from "./repositoryHeader";

const RepositoryItems = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryHeader {...props} styles={styles} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  // Unidad de medida utilizada --> 'Ninguna' (son pixeles que representa cada dispositivo)
  // Sucedera lo mismo con todos los valores que representen dimensiones o espacios (width, height, margin, padding, fonts, etc)
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 15,
  },
});
// las StyleSheet emulan ser como CSS sin ser globales para usarlas fuera de los componentes, lo que hace que tengan mayor rendimiento

export default RepositoryItems;
