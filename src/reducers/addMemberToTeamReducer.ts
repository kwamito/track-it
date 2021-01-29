import axios from "axios";

const addMemberToTeamReducer = (state = {}, action: any) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADDMEMBER":
      console.log("WE ARE HERE");
      let api = `http://127.0.0.1:8000/project/update-team/${action.payload}/`;

      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      const token = window.localStorage.getItem("token");
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      // let data = JSON.stringify(action.memberArray);
      //console.log(data, action.teamID);
      let newArr = { contributors: action.memberArray };
      let data = JSON.stringify(newArr);
      console.log(data);
      axios
        .patch(api, data)
        .then((response) => {
          console.log(response);
          console.log(state);
          return state;
        })
        .catch((error) => {
          console.log(error);
          return state;
        });

      return state;

    default:
      return state;
  }
};

export default addMemberToTeamReducer;
