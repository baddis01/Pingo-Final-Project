import { useState, useEffect, useContext } from "react";
import TasksList from "../components/TasksList";
import UsersList from "../components/UsersList";
import Maps from "../components/Maps";
import * as db from "../db";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { UserContext } from "../contexts/UserContext";

const Pack = () => {
  const Tab = createBottomTabNavigator();
  const [pack, setPack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { packId } = route.params;
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    db.getPack(packId).then((data) => {
      setPack(data);
      setIsLoading(false);
    });
  }, [route.params]);

  if (isLoading || !fontsLoaded)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  let completedTasks = {};
  //console.log(user.username, pack.users[user.username]);
  if (typeof pack.users[user.username] !== "undefined") {
    completedTasks = pack.users[user.username];
  }

  return (
    <>
      <Text style={styles.packTitle}> {pack.title} </Text>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Tasks"
          children={() => (
            <TasksList
              style={styles.packTitle}
              users={pack.users}
              tasks={pack.tasks}
              packId={packId}
            />
          )}
        />
        <Tab.Screen name="Users" component={UsersList} />
        <Tab.Screen
          name="Map"
          children={() => <Maps completedTasks={completedTasks} />}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  packTitle: {
    fontSize: 60,
    textAlign: "center",
    fontFamily: "BebasNeue_400Regular",
    color: "#24112F",
  },
});

export default Pack;
