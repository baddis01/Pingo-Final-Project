import { React, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userNameInput, setUserNameInput] = useState(null);

  function loginGuest() {
    const guestUser = {
      username: "Guest",
    };
    setUser(() => {
      return guestUser;
    });
  }

  function loginUser() {
    const newUser = {
      username: userNameInput,
    };
    setUser(() => {
      return newUser;
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Welcome to Pingo</Text>
      <View>
        <Text>Please login with your username or join as a guest</Text>
        <Image
          source={{
            uri: "https://i2-prod.manchestereveningnews.co.uk/incoming/article20618099.ece/ALTERNATES/s615/1_TMR_MEN_170521bingo_02.jpg",
          }}
          style={{
            width: 350,
            height: 200,
          }}
        />
        <TextInput
          onChange={(event) => setUserNameInput(event.target.value)}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="Name"
        />
        <Button onPress={loginUser} style={styles.button} title="Join" />
        <View style={styles.space} />
        <Button
          onPress={loginGuest}
          style={styles.button}
          title="Login as Guest"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 10,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Login;
