import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import pingodone from "../assets/pingodone.png";
import Confetti from "../components/Confetti";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

const win = Dimensions.get("window");

const Celebrate = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.MainContainer}>
        <View style={styles.cardView}>
          <Image source={pingodone} style={styles.logo} />
          <Text style={styles.text}>YOU DID IT!</Text>
        </View>
        <Confetti />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#24112F",
  },
  cardView: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  logo: {
    width: win.width / 1.2,
    height: win.width / 3.5,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    padding: 10,
    color: "#F7Efe7",
    textAlign: "center",
    fontFamily: "BebasNeue_400Regular",
    fontSize: 50,
  },
});

export default Celebrate;
