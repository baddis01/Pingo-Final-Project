import { useState, useEffect } from "react";
import TasksList from "../components/TasksList";
import * as db from "../db";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

const Pack = () => {
  const [pack, setPack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { packId } = route.params;
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  useEffect(() => {
    setIsLoading(true);
    db.getPack(packId).then((data) => {
      setPack(data);
      setIsLoading(false);
    });
  }, [route.params]);

  if (isLoading || !fontsLoaded)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View>
      <Text style={styles.packTitle}> {pack.title} </Text>
      <TasksList
        style={styles.packTitle}
        users={pack.users}
        tasks={pack.tasks}
        packId={packId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  packTitle: {
    fontSize: 60,
    textAlign: "center",
    fontFamily: "BebasNeue_400Regular",
    color: "#24112F",
  },
});

export default Pack;
