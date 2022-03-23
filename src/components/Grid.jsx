import React from "react";

import { View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

export default function Grid() {
  const Tasks = [
    {
      id: 0,
      description: "Snap a pic of a Manchester Bee",
    },
    {
      id: 1,
      description: "Pose moodily outside Salford lad's club",
    },
    {
      id: 2,
      description: "Drink some Vimto by the giant Vimto bottle",
    },
    {
      id: 3,
      description: "Run through Piccadilly gardens fountain",
    },
    {
      id: 4,
      description: "Snap a pic under china towns arch",
    },
    {
      id: 5,
      description: "Do your best Madchester pose in front of the Hacienda",
    },
    {
      id: 6,
      description: "Find a tribute to Manchester City",
    },
    {
      id: 7,
      description: "Do a football pose in front of something MCFC",
    },
    {
      id: 8,
      description: "Pretend to feed a dinosaur in Manchester museum",
    },
    {
      id: 9,
      description: "Have a sit down with Alan Turing in the village",
    },
    {
      id: 10,
      description: "Snap a pic of the mosaics outside Affleck's palace",
    },
    {
      id: 11,
      description: "Get a fancy coffee in an independent coffee shop",
    },
  ];

  const GridView = ({ description }) => (
    <View style={styleSheet.gridStyle}>
      <Text style={styleSheet.gridText}>{description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <FlatList
        data={Tasks}
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
    height: 80,
    margin: 2,
    backgroundColor: "#00C853",
  },

  gridText: {
    fontSize: 12,
    color: "white",
  },
});
