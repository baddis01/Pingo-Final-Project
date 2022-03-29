import { useState, useEffect } from "react";
import TasksList from "../components/TasksList";
import UsersList from "../components/UsersList";
import MapView from "../components/MapView";
import * as db from "../db";
import { Text, View, StyleSheet } from "react-native";
import { useRoute, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

const Pack = () => {
  const Tab = createBottomTabNavigator();
  const [pack, setPack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { packId } = route.params;
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

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

  // return (
  //   <Tab.Navigator screenOptions={{ headerShown: false }}>
  //     <Tab.Screen name="Home" component={UsersList} />
  //     <Tab.Screen name="Settings" component={MapView} />
  //   </Tab.Navigator>
  // );

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
        <Tab.Screen name="Map" component={MapView} />
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
