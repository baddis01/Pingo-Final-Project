import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { dab1, dab2, dab3, blank } from "../assets/dabs/dabindex";

const defaultDabs = [dab1, dab2, dab3];

const screenWidth = Dimensions.get("screen").width;
const numColumns = 3;
const tileSize = screenWidth / numColumns;

export default function TasksList({ tasks, users, packId, packSize }) {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [dabsNum, setDabsNum] = useState(0);
  const [shownCelebration, setShownCelebration] = useState(false);

  const randomDabId = () => {
    return Math.floor(Math.random() * defaultDabs.length);
  };

  useEffect(() => {
    tasks.forEach((task) => {
      if (isTaskCompleted(task.id)) {
        setDabsNum((curr) => curr + 1);
      }
    });
  }, []);

  if (dabsNum >= packSize) {
    if (!shownCelebration) {
      setShownCelebration(true);
      navigation.navigate("Celebrate");
    }
  }
  const isTaskCompleted = (taskId) => {
    if (typeof users === "undefined") return false;
    if (typeof users[user.username] === "undefined") return false;
    if (typeof users[user.username][taskId] === "undefined") return false;
    return true;
  };

  const GridView = ({ task }) => {
    const goToCameraOrPhoto = (taskId) => {
      if (isTaskCompleted(taskId)) {
        navigation.navigate("Photo", {
          taskId: task.item.id,
          packId,
          username: user.username,
        });
      } else {
        navigation.navigate("Camera", {
          taskId: task.item.id,
          packId,
          randomDabId: randomDabId(),
        });
      }
    };

    const dab = isTaskCompleted(task.item.id)
      ? defaultDabs[users[user.username][task.item.id].dab]
      : blank;
    return (
      <TouchableOpacity
        onPress={() => goToCameraOrPhoto(task.item.id)}
        style={styleSheet.gridStyle}
      >
        <ImageBackground
          source={dab}
          resizeMode="contain"
          style={styleSheet.image}
        >
          <Text style={styleSheet.gridText}>{task.item.description}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <FlatList
        data={tasks}
        renderItem={(task) => <GridView task={task} />}
        keyExtractor={(task, index) => "task" + index}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#F7EFE7",
  },
  gridStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: tileSize,
    width: tileSize,
    backgroundColor: "#F7EFE7",
    margin: 0.5,
    padding: 10,
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#24112F",
    borderWidth: 1,
  },

  gridText: {
    fontSize: 14,
    color: "#24112F",
    fontFamily: "BebasNeue_400Regular",
    textAlign: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
