import React from "react";

import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//   onPress={() => console.log("pressed task", tasks.item.id)}

export default function TasksList({ tasks }) {
  const navigation = useNavigation();
  const GridView = ({ tasks }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Camera", {
          taskId: tasks.item.id,
        })
      }
      style={styleSheet.gridStyle}
    >
      <Text style={styleSheet.gridText}>{tasks.item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <FlatList
        data={tasks}
        renderItem={(tasks) => <GridView tasks={tasks} />}
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
