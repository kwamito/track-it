import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";
import doc_style from "./projectDoc.module.sass";

function Documentation(props: any) {
  console.log(props);
  const [doc, setDoc] = useState("");
  const [edit, setEdit] = useState(false);
  const handleChange = (e: React.FormEvent<HTMLPreElement>) => {
    console.log(e.currentTarget.innerText);
    setDoc(e.currentTarget.innerText);
  };

  const retrieveDoc = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/project_doc/${props.match.params.id}/`;
    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setDoc(response.data.documentation);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    retrieveDoc();
  }, []);

  function openEditor(e: React.MouseEvent) {
    if (edit) {
      let editor = document.getElementById("editor") as HTMLPreElement;
      let result = document.getElementById("result") as HTMLDivElement;
      let editButton = document.getElementById(
        "edit-button"
      ) as HTMLButtonElement;
      editor.style.display = "none";
      result.style.width = "100%";
      result.style.height = "100%";
      result.style.overflow = "auto";
      editButton.innerText = "Edit";
      setEdit(false);
    } else {
      let editButton = document.getElementById(
        "edit-button"
      ) as HTMLButtonElement;
      let editor = document.getElementById("editor") as HTMLPreElement;
      let result = document.getElementById("result") as HTMLDivElement;
      editor.style.display = "block";
      result.style.width = "50%";
      result.style.overflow = "scroll";
      result.style.height = "500px";
      editButton.innerText = "Display";

      setEdit(true);
    }
  }

  return (
    <div>
      <div>
        <Sidebar
          projectId={props.match.params.id}
          data={props.match.params.id}
        />
      </div>
      <div>
        <Navbar />
      </div>
      <div className={doc_style["edit-button"]}>
        <button
          id={"edit-button"}
          className={"bg-green-300"}
          onClick={openEditor}
        >
          Edit
        </button>
      </div>

      <div className={doc_style["main"]}>
        <pre
          contentEditable={true}
          id={"editor"}
          onInput={handleChange}
          className={doc_style["editable"]}
        >
          {doc}
        </pre>
        <div id={"result"} className={doc_style["result"]}>
          <ReactMarkdown children={doc}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
