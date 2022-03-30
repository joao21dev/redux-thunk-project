import axios from "axios";

export const loadDataRequest = () => {
  return {
    type: "LOAD_DATA_REQUEST",
  };
};

export const loadDataSucccess = (data) => {
  return {
    type: "LOAD_DATA_SUCCESS",
    data,
  };
};

export const loadDataError = () => {
  return {
    type: "LOAD_DATA_ERROR",
  };
};

export const loadData = () => {
  return (dispatch) => {
    dispatch(loadDataRequest());
    axios
      .get("http://httpbin.org/ip")
      .then(({ data }) => dispatch(loadDataSucccess(data)))
      .catch(() => dispatch(loadDataError()));
  };
  // return {
  //   type: "LOAD_DATA",
  // };
};
