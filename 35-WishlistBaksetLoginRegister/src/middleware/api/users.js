import axios from "axios";
import { base_Url } from "./index";

export async function getAllUsers() {
  let result;
  result = await axios(base_Url + "/users").then((res) => {
    return res.data;
  });

  return result;
}

export async function getUser(id) {
  let result;
  result = await axios(base_Url + "/users/" + id).then((res) => {
    return res.data;
  });

  return result;
}

export async function postUsers(obj) {
  let result;
  result = await axios.post(base_Url + "/users", obj).then((res) => {
    return res.data;
  });

  return result;
}

export async function putUser(id, obj) {
  let result;
  result = await axios.put(base_Url + "/users/" + id, obj).then((res) => {
    return res.data;
  });

  return result;
}
