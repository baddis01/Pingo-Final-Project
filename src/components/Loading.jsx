import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function Loading() {
  return (
    <AnimatedLoader
      visible={true}
      source={require("../assets/lf30_editor_qngy49ar.json")}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
  },
});
