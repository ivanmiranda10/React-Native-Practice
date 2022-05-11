import React from "react";
import { View } from "react-native";
import RepositoryList from "../RepositoryList";
import Navbar from "../Navbar";
import LogIn from "../Form/index.jsx";
import { Routes, Route } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RepositoryList />} />
        <Route exact path="/signin" element={<LogIn />} />
      </Routes>
    </View>
  );
};

export default Main;
