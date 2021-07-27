import axios from "axios";
export const GET_USER_LIST = "GET_USER_LIST";
export const DEL_USER = "DEL_USER";
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const GET_USER = "GET_USER";

export const delUser = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:80/users/${id}`).then((res) => {
      console.log(res);
      dispatch({
        type: DEL_USER,
        payload: res.data.id,
      });
    });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:80/users", data).then((res) => {
      console.log(res);
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    });
  };
};

export const editUser = (data) => {
  return (dispatch) => {
    axios.put(`http://localhost:80/users/${data.id}`, data).then((res) => {
      console.log(res);
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:80/users/${id}`).then(() => {
      dispatch({
        type: GET_USER,
        payload: id,
      });
    });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    axios.get("http://localhost:80/users").then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_USER_LIST,
        payload: res.data,
      });
    });
  };
};
