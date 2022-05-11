import React from "react";
import StyledText from "../../GlobalStyles";
import { StyleSheet } from "react-native";
import { Link, useLocation } from "react-router-native";
import theme from "../../GlobalStyles/theme";

const NavbarLink = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.linkActive];
  return (
    <Link to={to} activeOpacity={0.5} underlayColor="none">
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.navbar.secondaryText,
    paddingHorizontal: 55,
  },
  linkActive: {
    color: theme.navbar.primaryText,
  },
});

export default NavbarLink;
