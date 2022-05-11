import React from "react";
import { View } from "react-native";
import RepositoryList from "../RepositoryList";
import Navbar from "../Navbar";
import LogIn from "../Form/index.jsx";
import { Routes, Route } from "react-router-native";

// Ejemplo de como se puede importar un componente a renderizar dependiendo de la plataforma :
// const Navbar = Platform.select({
//   ios: () => require("./NavbarIOS.jsx").default,
//   android: () => require("./NavbarAndroid.jsx").default,
//   default: () => require("./NavbarWeb.jsx").default,
// })();
// Esta opcion es recomendada cuando NO somos nosotros quienes creamos lo que queremos importar
// (Por ejemplo para componentes ya hechos de cualquier libreria, etc)

// Para ficheros locales, osea archivos creados por mi, hay una forma mas facil :
// Tan simple como al importar Navbar (en este caso) no ponerle la extension .jsx (como actualmente esta)
// Crear los archivos correspondientes a la navbar para iOS, para android y/o para web (default)
// Bajo el nombre de archivo Navbar.ios.jsx // Navbar.android.jsx // Navbar.default.jsx
// De esta manera, y de forma automatica, react-native se encargara de aplicar los componentes que correspondan segun las plataformas indicadas

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
  {
    /* Rutas en memoria, no necesariamente se refiere a URL's */
  }
};

export default Main;
