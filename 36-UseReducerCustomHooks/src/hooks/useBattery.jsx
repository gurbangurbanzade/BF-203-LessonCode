import { useEffect, useState } from "react";

export default function useBattery() {
  const [level, setLevel] = useState(0);
  const [charging, setCharging] = useState(false);
  const [battery, setBattery] = useState({});

  useEffect(() => {
    async function getInfo() {
      let info;
      info = await navigator.getBattery();
      setBattery(info);
      setLevel(info.level * 100);
      setCharging(info.charging);
    }
    getInfo();
  }, [charging]);

  return {
    level,
    charging,
  };
}
