import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as db from "../db";

const Photo = () => {
  const {
    params: { packId, taskId, username },
  } = useRoute();

  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    db.getTaskPhoto(packId, username, taskId).then((image) => {
      setImage(image);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Text>Loading ....</Text>;

  //console.log(image);
  return (
    <View>
      <Image style={styles.imagestyle} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    flex: 1,
    width: null,
    height: 1000,
    paddingTop: 25,
    paddingBottom: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

export default Photo;
