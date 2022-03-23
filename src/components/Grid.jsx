import React from "react";

import { View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

export default function Grid({ tasks }) {
  const GridView = ({ tasks }) => (
    < View style={styleSheet.gridStyle} >
      <Text style={styleSheet.gridText}>{tasks}</Text>
    </View >
  );
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <FlatList
        data={tasks}
        renderItem={(tasks) => < GridView tasks={tasks.item.description} />}
        keyExtractor={(tasks, index) => "task" + index}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    backgroundColor: "white",
  },
  gridStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    margin: 2,
    backgroundColor: "pink",
    padding: 10,
    textAlign: "center",
  },

  gridText: {
    fontSize: 12,
    color: "white",
  },
});
