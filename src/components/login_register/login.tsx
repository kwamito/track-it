import React, { useState } from "react";
import login_style from "./login.module.sass";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let loader = document.querySelector(".loader") as HTMLDivElement;
    let api = "http://127.0.0.1:8000/users/login/";
    if (credentials["email"].length === 0) {
      console.log("Enter email");
    } else {
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      let credentailJSON = JSON.stringify(credentials);
      axios
        .post(api, credentailJSON)
        .then((response) => {
          window.localStorage.setItem("token", response.data);
        })
        .catch((error) => {
          alert(error.response.data);
          let box = document.getElementById("in") as HTMLInputElement;
          box.style.border = "2px solid tomato";
          box.style.borderColor = "tomato";
          console.log(box);
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={login_style["login-container"]}>
      <div className={login_style["inner-container"]}>
        <div className={login_style["form-group"]}>
          <form
            action=""
            onSubmit={handleSubmit}
            className={login_style["login-form"]}
          >
            <div className={login_style["text-group"]}>
              <h3 className={login_style["log"]}>Sign in to Projet</h3>
              <p className={login_style["lo"]}>
                Sign in with email and password
              </p>
            </div>
            <input
              id={"in"}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="example@email.com"
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
            <button className={login_style["login-button"]} type="submit">
              Sign In
            </button>
            <div className={login_style["loader"]}></div>
          </form>
        </div>
      </div>
      <div className={login_style["second-div"]}></div>
    </div>
  );
}

export default Login;
