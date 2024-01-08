"use client";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./../../firebase/config";

type Props = {};
interface Fire {
  id: string;
  name: string;
  password: string;
}

const Users = (props: Props) => {
  const [fireStroreData, setFireStroreData] = useState<Fire[]>([]);
  // datalari burada oxuyuruq
  const getDataFirestore = async () => {
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("querySnapshot", querySnapshot);

    let arr: Fire[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      let obj: Fire = {
        id: doc.id,
        name: doc.data().name,
        password: doc.data().password,
      };
      arr.push(obj);
    });
    console.log("arr", arr);
    setFireStroreData(arr);
  };

  useEffect(() => {
    getDataFirestore();
  }, []);

  // datalari burada gonderirik
  const addFirestore = async () => {
    const data = { name: "samaya", password: "1234567" };
    const db = getFirestore(app);
    const newUserRef = doc(collection(db, "users"));
    await setDoc(newUserRef, data);
  };

  // datalari burada silirik
  const deleteFirestore = async () => {
    const db = getFirestore(app);
    await deleteDoc(doc(db, "users", "yp6Zel5Rda3XOb34vWzm"));
  };

  return (
    <div>
      Users
      <ul>
        {fireStroreData &&
          fireStroreData.map((elem, i) => {
            return <li key={i}> {elem.name}</li>;
          })}
      </ul>
      <button onClick={addFirestore}>Add Data</button>
      <br />
      <button onClick={deleteFirestore}>Delete Data</button>
    </div>
  );
};

export default Users;
