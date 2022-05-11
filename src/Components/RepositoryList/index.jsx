import React from "react";
import { Text, FlatList } from "react-native";
import RepositoryItems from "./repositoryItems.jsx";
import repositories from "../../Data/repositories";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>} // hay mejores formas de separar contenido que esta
      renderItem={({ item: RepoItems }) => <RepositoryItems {...RepoItems} />}
    />
  );
};

export default RepositoryList;
