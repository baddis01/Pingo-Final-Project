import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import AnimatedLoader from "react-native-animated-loader";

import * as db from "../db";

const Photo = () => {
  const {
    params: { packId, taskId, username },
  } = useRoute();

  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const win = Dimensions.get("window");

  useEffect(() => {
    setIsLoading(true);
    db.getTaskPhoto(packId, username, taskId).then((image) => {
      setImage(image);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <Text>
        <AnimatedLoader
          visible={true}
          source={require("../assets/lf30_editor_qngy49ar.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
      </Text>
    );

  return (
    <View style={styles.imgContainer}>
      <Image style={styles.imagestyle} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 0.55,
  },
  imgContainer: {
    flexDirection: "row",
  },
});

export default Photo;
