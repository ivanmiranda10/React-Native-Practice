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
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 15,
  },
});

export default RepositoryItems;
