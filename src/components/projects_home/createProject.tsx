import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import create_style from "./createProject.module.sass";
import { useHistory } from "react-router-dom";
import ProjectSideBar from "./projectsHomeSideBar";

function CreateProject(props: any) {
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });
  const history = useHistory();

  function createProject(e: React.FormEvent<any>) {
    e.preventDefault();
    console.log();
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/create-list/`;
    let det = JSON.stringify(details);
    console.log(det);
    axios
      .post(api, det)
      .then((response) => {
        history.push(`/project/${response.data.id}`);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };

  return (
    <div>
      <ProjectSideBar />
      <div className={create_style["main"]}>
        <div>
          <Navbar />
        </div>
        <form
          onSubmit={createProject}
          className={create_style["create-form"]}
          method="POST"
        >
          <input
            className={create_style["title"]}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder={"Title"}
          ></input>
          <textarea
            className={create_style["description"]}
            onChange={handleChange}
            name="description"
            placeholder={"Description"}
          />
          <button className={create_style["submit-button"]} type="submit">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
