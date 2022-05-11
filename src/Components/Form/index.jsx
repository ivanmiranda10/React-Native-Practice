import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikInputValue from "./formikInput";
import loginValidationSchema from "./validationSchema";

// Formik lo primero que necesita saber es cuales son los valores iniciales que va a tener nuestro formulario.
const LogIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      // Tambien necesita un metodo para saber que es lo que tiene que hacer cuando se haga el submit de dicho form
      onSubmit={(values) => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ /* handleChange, */ handleSubmit /* values */ }) => {
        return (
          <View style={styles.form}>
            {/* Le pasamos los nombres de los campos al componente, con esto ya no necesitamos el handleChange ni los values */}
            <FormikInputValue
              name="email"
              placeholder="E-mail"
              //   value={values.email}
              //   onChangeText={handleChange("email")}
              // este handleChange recibe el campo que cambiara internamente
            />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry // prop del componente de react native 'TextInput'
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
      {/* Render Children - En formik se devuelve una funcion que contiene todos los elementos de mi formulario */}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

export default LogIn;
