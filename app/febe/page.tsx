"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Febe = () => {
  const [bdData, setBdData] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await axios.get("http://localhost:3000/febe/api");
    setBdData(data.data);
  };

  return <div> HEY FEBE {bdData}</div>;
};

export default Febe;
