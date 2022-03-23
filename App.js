//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./db/config";
import Pack from "./components/Pack";
import Packs from "./components/Packs";
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import UserInfo from "./components/UserInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TasksList from "./components/TasksList";

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavigationContainer>
        <UserContext.Provider value={{ user, setUser }}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Packs" component={Packs} />
            <Stack.Screen name="TasksList" component={TasksList} />
            <Stack.Screen name="Pack" component={Pack} />
          </Stack.Navigator>
          <View style={styles.container}>
            {/* <UserInfo />*/}
            {/* <Packs />
      <Pack /> */}
            {/* <StatusBar style="auto" /> */}
          </View>
        </UserContext.Provider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
