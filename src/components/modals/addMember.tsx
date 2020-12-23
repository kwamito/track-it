import React, { useState, useEffect } from "react";
import member_modal from "./addMember.module.sass";
import axios from "axios";
import userEvent from "@testing-library/user-event";

function AddMemberModal(props: any) {
  const [contributors, setContributors] = useState([]);
  const [ids, setId] = useState<any[]>([]);
  const [newArr, setNew] = useState({
    contributors: [] as any,
  });

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    console.log(props.team_id, "This is the team_id outside");

    let arr = new Array();
    for (let i = 0; i < ids.length; i++) {
      arr.push(parseInt(ids[i]));
      newArr.contributors.push(parseInt(ids[i]));
    }
    let api = `http://127.0.0.1:8000/project/update-team/${props.team_id}/`;

    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let data = JSON.stringify(newArr);
    axios.patch(api, (data = data)).then((response) => {
      console.log(response.data);
    });
  }

  function getContributors() {
    let api = `http://127.0.0.1:8000/project/contributors/${props.id}/accepted/`;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios.get(api).then((response) => {
      setContributors(response.data);
    });
  }

  const handleClick = (e: React.MouseEvent) => {
    e.currentTarget.classList.toggle(member_modal["active"]);
    const value = e.currentTarget as HTMLButtonElement;

    ids.push(value.id);
  };
  console.log(props.team_id, "This is the team_id outside");
  useEffect(() => {
    getContributors();
  }, []);

  return (
    <div className={member_modal["container"]}>
      <div id="index">
        <div className={member_modal["modal"]}>
          <i
            onClick={props.close}
            className={`fa fa-times ${member_modal["close-modal"]}`}
          ></i>
          <div className={member_modal["modal-header"]}>
            <h3>Add a member</h3>
            <span className={member_modal["add-member-icon"]}>
              <span className="material-icons">person_add</span>
            </span>
          </div>
          <div className={member_modal["contributors-container"]}>
            {contributors.map((contributor: any) => {
              return (
                <div className={member_modal["contributor"]}>
                  <span className={member_modal["contributor-avatar"]}>
                    {contributor.user_email.slice(0, 1)}
                  </span>
                  <div>{contributor.user_email}</div>
                  <div>
                    <button
                      onClick={handleClick}
                      id={contributor.id}
                      className={member_modal["add-contributor-button"]}
                    >
                      <i className={"fa fa-plus"} aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={handleSubmit}>Enter</button>
        </div>
      </div>
    </div>
  );
}

export default AddMemberModal;
