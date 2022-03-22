import { useState, useEffect } from "react";
import PacksList from "./PacksList";
import * as db from "../db";

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

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>All Packs</h1>
      <PacksList packs={packs} />
    </>
  );
};

export default Packs;
