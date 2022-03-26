import { React, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import bigDabs from "../assets/bigdabs.png";
import gamify from "../assets/gamify.png";

const win = Dimensions.get("window");

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userNameInput, setUserNameInput] = useState(null);
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function loginGuest() {
    const guestUser = {
      username: "Guest",
    };
    setUser(() => {
      return guestUser;
    });
    navigation.navigate("Packs");
  }

  function loginUser() {
    const newUser = {
      username: userNameInput,
    };
    setUser(() => {
      return newUser;
    });
    navigation.navigate("Packs");
  }
  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <View>
        <Image source={gamify} style={styles.cameraLogo} />
        <View style={styles.centralPage}>
          <Image source={bigDabs} style={styles.logo} />
          <View style={styles.buttons}>
            <View style={styles.textInputWrapper}>
              <TextInput
                onChangeText={setUserNameInput}
                style={styles.textInput}
                defaultValue="Name"
              />
              {/* ------buttons------- */}
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={loginUser} style={styles.button}>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity onPress={loginGuest} style={styles.button}>
                  <Text style={styles.text}>Guest</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  centralPage: {
    height: win.height / 1.65,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
  },
  space: {
    width: 20,
    height: 20,
  },
  cameraLogo: {
    width: win.height / 6.5,
    height: win.height / 6.5,
    margin: 20,
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  logo: {
    width: win.width / 1.1,
    height: win.width / 2,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    padding: 10,
    paddingBottom: 100,
    color: "#F7Efe7",
    textAlign: "center",
    fontFamily: "BebasNeue_400Regular",
    fontSize: 20,
  },
  textInputWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: win.width / 1.4,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 35,
    borderColor: "#24112F",
    borderWidth: 1.25,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  button: {
    width: win.width / 1.4,
    height: 44,
    borderRadius: 35,
    backgroundColor: "#24112F",
    color: "#F7Efe7",
    fontFamily: "BebasNeue_400Regular",
  },
  buttonWrapper: {
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    width: 10,
    height: 10,
  },
});

export default Login;
