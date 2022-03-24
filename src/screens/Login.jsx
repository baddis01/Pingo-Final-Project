import { React, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import { useState } from 'react';
import logo from "../assets/logo.png";
import cameraButton from '../assets/camera_camera.png'


const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userNameInput, setUserNameInput] = useState(null);
  const navigation = useNavigation();

    function loginGuest() {
        const guestUser = {
            username: 'Guest',
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
        <SafeAreaView contentContainerStyle={styles.container}>
            <View>
                <Image
                    source={cameraButton}
                    style={styles.cameraLogo}
                />
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <View style={styles.textInputWrapper}>
                    <TextInput
                        onChange={(event) => setUserNameInput(event.target.value)}
                        style={styles.textInput}
                        defaultValue='Please login with your username'
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Packs')}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Join</Text>
                    </TouchableOpacity>
                    <View style={styles.space} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Packs')}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Login as Guest</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraLogo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        paddingTop: 25,
        paddingBottom: 100,
        marginLeft: 170,
        marginTop: 10,
    },
    logo: {
        width: 350,
        height: 200,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 20,
        marginLeft: 15,
        // paddingLeft: 10,
    },
    text: {
        paddingTop: 15,
        paddingBottom: 100,
        color: 'white',
        textAlign: 'center',
    },
    tagline: {
        paddingTop: 25,
        paddingLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        width: 270,
        height: 50,
        borderRadius: 35,
        borderColor: '#24112F',
        borderWidth: 1.25,
    },
    button: {
        width: '50%',
        height: 50,
        borderRadius: 35,
        backgroundColor: '#24112F',
    },
    buttonWrapper: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    space: {
        width: 20,
        height: 20,
    },
});

export default Login;
