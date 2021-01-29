import React from "react";
import invite_style from "./invitationCard.module.sass";
import axios from "axios";

function InvitationCard(props: any) {
  const inviteContributor = () => {
    let email = document.getElementById("user-email") as HTMLInputElement;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let data = { id: props.id, email: email.value };
    let jsonData = JSON.stringify(data);
    let api = `http://127.0.0.1:8000/users/send-invite/`;
    axios
      .post(api, jsonData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.log(response.error);
      });
  };
  return (
    <div className={invite_style["main-content"]}>
      <h3>Invite a user</h3>

      <input
        className={invite_style["user-email"]}
        type="email"
        name="email"
        id="user-email"
      />
      <small className={invite_style["invite-warning"]}>
        Make sure user already has an account with this email
      </small>
      <button
        onClick={inviteContributor}
        type="submit"
        className={invite_style["submit-email"]}
      >
        INVITE
      </button>
    </div>
  );
}

export default InvitationCard;
