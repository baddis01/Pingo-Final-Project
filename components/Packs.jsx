import { useState, useEffect } from "react";
import PacksList from "./PacksList";
import * as db from "../db";
import { Button, Text, View } from "react-native";

const Packs = ({ navigation }) => {
  const [packs, setPacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    db.getPacks().then((data) => {
      setPacks(data);
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
      <Text>All Packs</Text>
      <Button
        onPress={() => navigation.navigate("TasksList")}
        title="Manchester"
      />
      <Button title="London" />
      <PacksList packs={packs} />
    </View>
  );
};

export default Packs;
