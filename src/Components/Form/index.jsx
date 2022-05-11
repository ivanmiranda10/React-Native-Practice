import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikInputValue from "./formikInput";
import loginValidationSchema from "./validationSchema";

const LogIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ /* handleChange, */ handleSubmit /* values */ }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

export default LogIn;
