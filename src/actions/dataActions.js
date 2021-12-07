import axios from "axios";
//Variable untuk menyimpan domain server untuk menyimpan data id push notifikasi ke database
const SERVER_URL = "https://server.mapid.io";

export const pushData = (body) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await axios.post(SERVER_URL + "/publics/push_data", body);
    dispatch({
      type: "GET_DATA",
      payload: res.data,
    });
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (e) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(SERVER_URL + "/publics/get_data");
    dispatch({
      type: "GET_DATA",
      payload: res.data,
    });
  } catch (e) {}
};

//Menyimpan data ke localstorage
export const saveLocal = (item) => {
  let local_data = localStorage.local_data
    ? JSON.parse(localStorage.local_data)
    : [];
  local_data.push(item);
  localStorage.setItem("local_data", JSON.stringify(local_data));
  console.log(local_data);
  return {
    type: "SET_FORM_OFFLINE",
    payload: local_data,
  };
};
