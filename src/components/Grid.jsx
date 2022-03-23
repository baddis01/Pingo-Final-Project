import React from "react";

import { View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

export default function Grid({ tasks }) {
  const GridView = ({ description }) => (
    <View style={styleSheet.gridStyle}>
      <Text style={styleSheet.gridText}>{description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <GridView description={item.description} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        key={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
