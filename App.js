import Pack from "./src/screens/Pack";
import Packs from "./src/screens/Packs";
import Login from "./src/screens/Login";
import Camera from "./src/screens/Camera";
import Photo from "./src/screens/Photo";
import Celebrate from "./src/screens/Celebrate";
import { UserContext } from "./src/contexts/UserContext";
import { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  Button,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions, Text } from "react-native";
import TasksList from "./src/components/TasksList";

console.disableYellowBox = true;

const Stack = createNativeStackNavigator();
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function App() {
  const [user, setUser] = useState({ username: "" });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#F7Efe7",
    },
  };

  const headerOptions = {
    headerRight: () => {
      return <Text>{user.username}</Text>;
    },
  };

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <UserContext.Provider value={{ user, setUser }}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Packs"
              component={Packs}
              options={headerOptions}
            />
            <Stack.Screen name="TasksList" component={TasksList} />
            <Stack.Screen name="Pack" component={Pack} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="Photo" component={Photo} />
            <Stack.Screen name="Celebrate" component={Celebrate} />
          </Stack.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    </>
  );
}
