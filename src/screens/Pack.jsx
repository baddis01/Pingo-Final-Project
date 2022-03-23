import { useState, useEffect } from "react";
import Grid from "../components/Grid";
import * as db from "../db";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const Pack = () => {
  const [pack, setPack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { itemId } = route.params;

  useEffect(() => {
    setIsLoading(true);
    db.getPack(itemId).then((data) => {
      setPack(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View>
      <Text style={styles.packTitle}> {pack.title} </Text>
      <Grid tasks={pack.tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  packTitle: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: 'Avenir Next'
  },
});

export default Pack;
