import { useState, useEffect } from "react";
import TasksList from "./TasksList";
import * as db from "../db";
import {
  Text,
  View
} from "react-native";

const Pack = () => {
  const [pack, setPack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const manchesterPackId = "KLkAvp2KxjZtYHMU04vf";

  useEffect(() => {
    setIsLoading(true);
    db.getPack(manchesterPackId).then((data) => {
      setPack(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <View>
      <Text> {pack.title} </Text>
      <TasksList tasks={pack.tasks} />
    </View>
  );
};

export default Pack;
