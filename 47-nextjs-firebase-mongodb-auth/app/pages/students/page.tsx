"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, child, set, onValue } from "firebase/database";
import app from "./../../firebase/config";

type Props = {};

const Students = (props: Props) => {
  const [data, setData] = useState<{ name: string; password: string }[]>([]);

  // bu siradan data oxumaqdir
  const getRealTimeDB = async () => {
    const db = getDatabase(app);
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // bu real update data oxumaqdir
  const getRealTimeOnValueDB = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(snapshot.val());
    });
  };

  const addData = async () => {
    const db = getDatabase(app);
    set(
      ref(db, "users/" + 8),

      {
        name: "nicat",
        password: "123",
      }
    );
  };

  useEffect(() => {
    // getRealTimeDB();
    getRealTimeOnValueDB();
  }, []);

  return (
    <div>
      Students
      <ul>
        {data &&
          data.map((elem, i) => {
            return <li key={i}>{elem.name}</li>;
          })}
      </ul>
      <button onClick={addData}>AddData</button>
    </div>
  );
};

export default Students;
