import { useState, useEffect } from "react";
import PacksList from "./PacksList";
import * as db from "../db";
import {
  Text,
  View
} from "react-native";

const Packs = () => {
  const [packs, setPacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    db.getPacks().then((data) => {
      setPacks(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <View>
      <Text>All Packs</Text>
      <PacksList packs={packs} />
    </View>
  );
};

export default Packs;
