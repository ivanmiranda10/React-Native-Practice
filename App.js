import React from "react";
import Main from "./src/Components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
// NativeRouter suplanta al BrowserRouter que conocemos

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* El valor de style puede ser cambiado a traves de estados de ser necesario */}
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
