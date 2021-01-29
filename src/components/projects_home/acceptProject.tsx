import React from "react";
import axios from "axios";
import accept_style from "./acceptProject.module.sass";

function AcceptProject(props: any) {
  const accept = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/accept/${props.match.params.id}/`;
    axios.patch(api).then((response) => {
      console.log(response);
      console.log(response.data);
    });
  };
  return (
    <div className={accept_style["main"]}>
      <div className={accept_style["head"]}>Accept Invitation</div>
      <button onClick={accept} className={accept_style["button"]}>
        Accept
      </button>
    </div>
  );
}

export default AcceptProject;
