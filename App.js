import Pack from "./src/screens/Pack";
import Packs from "./src/screens/Packs";
import Login from "./src/screens/Login";
import Camera from "./src/screens/Camera";
import Photo from "./src/screens/Photo";
import Celebrate from "./src/screens/Celebrate";
import { UserContext } from "./src/contexts/UserContext";
import { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, LogBox, View } from "react-native";
import TasksList from "./src/components/TasksList";
import { FontAwesome5 } from "@expo/vector-icons";

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({ username: "" });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#F7Efe7",
    },
  };

  const header = {
    headerRight: () => {
      return (
        <>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text>{user.username} </Text>
          </View>
          <FontAwesome5 name="user-circle" size={24} color="#24112F" />
        </>
      );
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Packs" component={Packs} options={header} />
          <Stack.Screen name="Pack" component={Pack} options={header} />
          <Stack.Screen name="Camera" component={Camera} options={header} />
          <Stack.Screen name="Photo" component={Photo} options={header} />
          <Stack.Screen
            name="Celebrate"
            component={Celebrate}
            options={header}
          />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profileText: {
    alignItems: "center",
  },
});
