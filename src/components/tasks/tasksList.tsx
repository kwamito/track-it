import React, { useState, useEffect } from "react";
import list_styles from "./tasksList.module.sass";
import axios from "axios";
import TaskCard from "../tasks/taskCard";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import CreateTaskModal from "../modals/createTaskModal";
import Strip from "../tasks/taskStrip";

function TasksList({ match }: any) {
  interface Tasks {
    name: string;
    description: string;
    start_date: any;
    due_date: any;
    date_created: any;
    completed: boolean;
    date_completed: any;
    assignees: Array<any>;
    theme: string;
    assignee_names: Array<any>;
    total_number_of_assignees: any;
  }

  const [tasks, setTasks] = useState<any[]>([]);

  function getProjectLists() {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/create-task-list/${match.params.id}/`;
    axios.get(api).then((response) => {
      setTasks(response.data);
    });
  }

  useEffect(() => {
    getProjectLists();
  }, []);

  function openModal() {
    let modal = document.getElementById("create-task-modal") as HTMLDivElement;
    let overlay = document.getElementById("overlay") as HTMLDivElement;
    modal.style.display = "block";
    overlay.style.display = "block";
  }
  function closeModal() {
    let modal = document.getElementById("create-task-modal") as HTMLDivElement;
    let overlay = document.getElementById("overlay") as HTMLDivElement;
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  return (
    <div>
      <Sidebar projectId={match.params.id} />
      <div className={list_styles["main"]}>
        <div className={list_styles["tasks-nav"]}>
          <Navbar />
        </div>

        <div className={list_styles["add-task-button"]}>
          <button onClick={openModal} className={list_styles["button"]}>
            <span className="material-icons">playlist_add</span>
          </button>
        </div>

        <div className={list_styles["tasks-cover"]}>
          {tasks.map((task) => {
            return (
              <div className={list_styles["task-container"]}>
                {/* <TaskCard title={task.name} due={task.time_to_due_date} /> */}
                <Strip
                  name={task.name}
                  due={task.time_to_due_date}
                  starts={task.time_to_start_date}
                  no_assignees={task.total_number_of_assignees}
                  description={task.description}
                  assignees={task.assignees_names}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="create-task-modal"
        className={list_styles["create-modal-container"]}
      >
        <div className={list_styles["cancel"]}>
          <i
            onClick={closeModal}
            className="fa fa-times close-modal"
            aria-hidden="true"
          ></i>
        </div>

        <CreateTaskModal id={match.params.id} close={closeModal} />
      </div>

      <div
        onClick={closeModal}
        id="overlay"
        className={list_styles["overlay"]}
      ></div>
    </div>
  );
}

export default TasksList;
