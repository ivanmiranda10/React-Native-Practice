import React from "react";
import Main from "./src/Components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
