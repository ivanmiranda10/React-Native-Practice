import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../../GlobalStyles/theme";
import NavbarLink from "./links";

const Navbar = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal> --> Si tuvieramos muchos items en el navbar */}
      <NavbarLink to="/">Repositories</NavbarLink>
      <NavbarLink to="/signin">Sign In</NavbarLink>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.navbar.primary,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
  },
});

export default Navbar;
