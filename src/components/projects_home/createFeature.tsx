import { useState } from "react";
import axios from "axios";
import Sidebar from "../sidebar/sideBar";
import style from "./projectDetail.module.sass";
import form_style from "./createExpense.module.sass";
import feature_style from "./createFeature.module.sass";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";

function CreateFeature(props: any) {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    documentation: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    const data = JSON.stringify(details);
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/create-feature/${props.match.params.id}/`;
    console.log(api);
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function handleChange(e: any) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <div>
        <Sidebar
          projectId={props.match.params.id}
          data={props.match.params.id}
        />
      </div>
      <div className={style["main"]}>
        <div className={style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>
        <div
          className={form_style["create-form"]}
          style={{ marginBottom: "200px", height: "100%" }}
        >
          <h3 style={{ padding: "20px" }}>Create a new feature</h3>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Title"
            />
            <textarea
              name="description"
              onChange={handleChange}
              id=""
              cols={30}
              rows={10}
              placeholder="Description"
            ></textarea>
            <textarea
              name="documentation"
              onChange={handleChange}
              id=""
              cols={30}
              rows={10}
              placeholder="Documentation"
            ></textarea>
            <button
              className={feature_style["submit-button"]}
              style={{
                backgroundColor: "green",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateFeature;
