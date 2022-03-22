//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./db/config";
import Pack from "./components/Pack";
import Packs from "./components/Packs";
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
import { useState } from 'react';
import UserInfo from "./components/UserInfo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <View style={styles.container}>
          <UserInfo />
          <Login />
          {/* <Packs />
      <Pack /> */}
          {/* <StatusBar style="auto" /> */}
        </View>
      </UserContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
