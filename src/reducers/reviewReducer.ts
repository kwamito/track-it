import axios from "axios";

const reviewReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "REVIEW":
      let api = `http://127.0.0.1:8000/project/review-feature/${action.payload}/`;

      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      const token = window.localStorage.getItem("token");
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };

      axios
        .patch(api)
        .then((response) => {
          console.log(response);
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

export default reviewReducer;
