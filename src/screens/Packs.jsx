import { useState, useEffect } from "react";
import PacksList from "../components/PacksList";
import * as db from "../db";
import { Text, View, StyleSheet } from "react-native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

const Packs = () => {
  const [packs, setPacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  useEffect(() => {
    setIsLoading(true);
    db.getPacks().then((data) => {
      setPacks(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <View>
      <PacksList packs={packs} />
    </View>
  );
};

const styles = StyleSheet.create({
  packList: {
    fontSize: 75,
    textAlign: "center",
    fontFamily: "BebasNeue_400Regular",
    marginBottom: 25,
    color: "#24112F",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Packs;
