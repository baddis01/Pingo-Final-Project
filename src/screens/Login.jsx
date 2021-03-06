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
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import bigDabs from "../assets/bigdabs.png";
import gamify from "../assets/gamify.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const win = Dimensions.get("window");

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userNameInput, setUserNameInput] = useState("");
  const navigation = useNavigation();
  const [loginMessage, setLoginMessage] = useState("");

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const validateUsername = (input) => {
    if (input.length < 3) return false;
    let regex = /^[a-z0-9]+$/i;
    return regex.test(input);
  };

  const formatUsername = (username) => {
    return username.toLowerCase().trim();
  };

  const generateGuestUsername = () => {
    return Math.random().toString(36).substring(2, 7);
  };

  const handleChangeText = (text) => {
    text = formatUsername(text);
    setUserNameInput(text);
    const validUser = validateUsername(text);
    if (validUser) setLoginMessage("");
  };

  const loginGuest = () => {
    const randomUsername = generateGuestUsername();
    const guestUser = {
      username: randomUsername,
    };
    setUser(() => {
      return guestUser;
    });
    setUserNameInput(randomUsername);
    navigation.navigate("Packs");
  };

  const loginUser = () => {
    const validUser = validateUsername(userNameInput);
    if (!validUser) {
      setLoginMessage("invalid username");
      return;
    }
    const newUser = {
      username: formatUsername(userNameInput),
    };
    setUser(() => {
      return newUser;
    });
    navigation.navigate("Packs");
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView contentContainerStyle={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Image source={gamify} style={styles.cameraLogo} />
            <View style={styles.centralPage}>
              <Image source={bigDabs} style={styles.logo} />
              <View style={styles.buttons}>
                <View style={styles.textInputWrapper}>
                  <TextInput
                    value={userNameInput}
                    onChangeText={(text) => {
                      handleChangeText(text);
                    }}
                    style={styles.textInput}
                    placeholder="Name"
                    keyboardType="default"
                    autoComplete="off"
                    clearTextOnFocus
                    maxLength={7}
                    textContentType="username"
                    spellCheck
                    autoCapitalize="none"
                    autoCompleteType="off"
                  />
                  <Text style={styles.loginText}>{loginMessage}</Text>
                  {/* ------buttons------- */}
                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={loginUser} style={styles.button}>
                      <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.space} />
                    <TouchableOpacity
                      onPress={loginGuest}
                      style={styles.button}
                    >
                      <Text style={styles.text}>Guest</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAwareScrollView>
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
    paddingBottom: 10,
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
  loginText: {
    textAlign: "center",
    paddingTop: 10,
    color: "#fc8800",
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
