import { useState, useEffect } from "react";
import PacksList from "../components/PacksList";
import * as db from "../db";
import { View, StyleSheet } from "react-native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import Loading from "../components/Loading";

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

  if (isLoading || !fontsLoaded) {
    return <Loading />;
  }

  return (
    <View>
      <PacksList packs={packs} />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Packs;
