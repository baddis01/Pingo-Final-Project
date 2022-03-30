import { Text, Dimensions, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

const screenWidth = Dimensions.get("screen").width;

const UserProgress = ({ user, username, packSize }) => {
  let completedTasksCount = Object.keys(user).length;

  return (
    <View style={styleSheet.MainContainer}>
      <Text style={styleSheet.names}>
        '{username}' has completed : {completedTasksCount}/{packSize}
      </Text>
      <Progress.Bar
        progress={completedTasksCount / packSize}
        width={screenWidth / 1.15}
        height={20}
        borderRadius={25}
        color={"#24112F"}
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  names: {
    fontSize: 14,
    color: "#24112F",
    fontFamily: "BebasNeue_400Regular",
    textAlign: "center",
  },
});

export default UserProgress;
