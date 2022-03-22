import { useState, useEffect } from "react";
import TasksList from "./TasksList";
import * as db from "../db";

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

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1> {pack.title} </h1>
      <TasksList tasks={pack.tasks} />
    </>
  );
};

export default Pack;
