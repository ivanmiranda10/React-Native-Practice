import React from "react";
import StyledTextInput from "./StyledTextInput";
import StyledText from "../../GlobalStyles";
import { useField } from "formik";
import { StyleSheet } from "react-native";

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => 
        helpers.setValue(value)} 
        error={meta.error}
        {...props}
      />
      {meta.error && 
      <StyledText style={styles.error}>
          {meta.error}
      </StyledText>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
  },
});

export default FormikInputValue;
