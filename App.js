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


const app = initializeApp(firebaseConfig);

export default function App() {
const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <View style={styles.container}>
      <UserInfo/>
      <Login/>
      {/* <Packs />
      <Pack /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
    </UserContext.Provider>
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
