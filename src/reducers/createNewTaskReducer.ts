import axios from "axios";
let tasks: any;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const token = window.localStorage.getItem("token");
// axios.defaults.headers = {
//   "Content-Type": "application/json",
//   Authorization: `Token ${token}`,
// };
// //let api = `http://127.0.0.1:8000/project/create-task-list/${}/`;
// axios.get(api).then((response) => {
//   tasks = [response.data];
// });

const createNewTaskReducer = (state: any = { tasks }, action: any) => {
  console.log(action.taskObjects);
  let res;
  switch (action.type) {
    case "CREATETASK":
      let api = `http://127.0.0.1:8000/project/create-task-list/${action.payload}/`;
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      const token = window.localStorage.getItem("token");
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };

      let stringifiedObjects = JSON.stringify(action.taskObjects);
      axios.post(api, stringifiedObjects).then((response) => {
        let res = response;
      });

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default createNewTaskReducer;
