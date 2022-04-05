import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

import * as db from "../db";
import Loading from "../components/Loading";

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

  if (isLoading) return <Loading />;

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
