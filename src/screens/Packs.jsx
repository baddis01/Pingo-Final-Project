import { useState, useEffect } from "react";
import PacksList from "../components/PacksList";
import * as db from "../db";
import { View } from "react-native";
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
      data.sort((a, b) => a.data.order - b.data.order);
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

export default Packs;
