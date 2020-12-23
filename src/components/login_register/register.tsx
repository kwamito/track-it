import React, { useState, useEffect } from "react";
import styles from "./register.module.sass";
import axios from "axios";

function Register() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let api = "http://127.0.0.1:8000/users/create/";
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
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  function clickAnimation() {
    let button = document.getElementById("");
  }

  useEffect(() => {
    document.body.classList.add(styles["register-back"]);
  });

  return (
    <div className={styles["form-container-register"]}>
      <div className={styles["actual-form-content"]}>
        <div className={styles["text-group"]}>
          <h3 className={styles["login-heading"]}>Register</h3>
          <p className={styles["login-text"]}>Fill in the following fields</p>
        </div>

        <div className={styles["form-group"]}>
          <form
            action=""
            onSubmit={handleSubmit}
            className={styles["login-form"]}
          >
            <input
              className={styles["register-inputs"]}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="example@email.com"
            />
            <input
              className={styles["register-inputs"]}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
            <input
              className={styles["register-inputs"]}
              name="first_name"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              className={styles["register-inputs"]}
              name="last_name"
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
            {/* <button className={styles["register-button"]} type="submit">
              SUBMIT
            </button> */}
            <div
              role="button"
              onClick={handleSubmit}
              className={styles["register-button"]}
            >
              SUBMIT
            </div>
            <div className="loader"></div>
          </form>
        </div>
      </div>

      <div className={styles["info-container"]}></div>
    </div>
  );
}

export default Register;
