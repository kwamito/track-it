import React, { useState, useEffect } from "react";
import task_modal_style from "./createTaskModal.module.sass";
import axios from "axios";

function CreateTaskModal(props: any) {
  const [contributors, setContributors] = useState([]);
  const [ids, setId] = useState<any[]>([]);

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
      console.log(response.data);
    });
  }

  const [taskObjects, setTaskObjects] = useState({
    name: "",
    description: "",
    start_date: "",
    due_date: "",
    assignees: [] as any,
  });
  const [times, setTime] = useState({
    due_time: "",
    start_time: "",
  });
  const handleTimeChange = (e: React.ChangeEvent<any>) => {
    setTime({
      ...times,
      [e.target.name]: e.target.value,
    });
    console.log(times);
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setTaskObjects({
      ...taskObjects,
      [e.target.name]: e.target.value,
    });
    console.log(taskObjects);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let api = `http://127.0.0.1:8000/project/create-task-list/${props.id}/`;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };

    taskObjects.start_date = `${taskObjects.start_date} ${times.start_time}`;
    taskObjects.due_date = `${taskObjects.due_date} ${times.due_time}`;

    ids.map((id: any) => {
      taskObjects.assignees.push(parseInt(id));
      console.log(parseInt(id));
    });
    axios
      .post(api, taskObjects)
      .then((response) => {
        console.log(response);
      })
      .then((response) => {
        let inputs = document.querySelectorAll("input");
        inputs.forEach((input: HTMLInputElement) => {
          input.value = "";
        });
        let text = document.getElementById("desc") as HTMLTextAreaElement;
        text.value = "";
      });
  };

  useEffect(() => {
    getContributors();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    ids.push(e.currentTarget.id);
    console.log(ids);
  };

  return (
    <div className={task_modal_style["modal-container"]}>
      <div id={"index"}>
        <div className={task_modal_style["modal"]}>
          <div className={task_modal_style["close_modal"]}>
            <i className="fa fa-times float-right" aria-hidden="true"></i>
          </div>

          <div className={task_modal_style["modal-header"]}>
            <h3>Create a new task</h3>
            <span className={task_modal_style["task-icon"]}>
              <i className={"fa fa-tasks"} aria-hidden="true"></i>
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            className={task_modal_style["create-task-form"]}
            action=""
          >
            <input
              onChange={handleChange}
              placeholder="Title"
              className={task_modal_style["title-input"]}
              type="text"
              name="name"
              id={"title"}
            />
            <div className={task_modal_style["theme-colors"]}>
              <span>Color</span>
              <div className={task_modal_style["color"]}></div>
              <div className={task_modal_style["color"]}></div>
              <div className={task_modal_style["color"]}></div>
              <div className={task_modal_style["color"]}></div>
            </div>
            <div className={task_modal_style["des"]}>
              <textarea
                onChange={handleChange}
                placeholder="Description...."
                className={task_modal_style["description"]}
                name="description"
                id="desc"
                cols={30}
                rows={10}
              ></textarea>
            </div>

            <div className={task_modal_style["input-stack"]}>
              <div className={task_modal_style["label"]}>
                <label htmlFor="start-date">Starts:</label>
              </div>
              <input
                name={"start_date"}
                onChange={handleChange}
                className={`${task_modal_style["start-date"]} ${task_modal_style["date-inputs"]}`}
                type="date"
                id=""
                placeholder="Start Date"
              />
              <input
                name={"start_time"}
                onChange={handleTimeChange}
                className={`${task_modal_style["start-time"]} ${task_modal_style["time-inputs"]}`}
                type="time"
                id=""
              />

              <div className={task_modal_style["label"]}>
                <label htmlFor="end-date">Ends:</label>
              </div>
              <input
                name={"due_date"}
                onChange={handleChange}
                className={`${task_modal_style["end-date"]} ${task_modal_style["date-inputs"]}`}
                type="date"
                id="end-date"
              />
              <input
                onChange={handleTimeChange}
                name={"due_time"}
                className={`${task_modal_style["end-time"]} ${task_modal_style["time-inputs"]}`}
                type="time"
                id=""
              />
            </div>

            <div className={task_modal_style["assignee-list"]}>
              <span>Assign to:</span>
              {contributors.map((contributor: any) => {
                const url = `http://127.0.0.1:8000${contributor.profile_image}/`;
                const imageStyle = {
                  backgroundImage: `url(${url})`,
                };
                return (
                  <div className={task_modal_style["contributor-container"]}>
                    {contributor.profile_image === null ? (
                      <div className={task_modal_style["contributor-avatar"]}>
                        {contributor.user_email.slice(0, 1).toUpperCase()}
                      </div>
                    ) : (
                      <div
                        style={imageStyle}
                        className={
                          task_modal_style["contributor-profile-image"]
                        }
                      ></div>
                    )}

                    <div className={task_modal_style["contributor-name"]}>
                      {contributor.user_email}
                    </div>
                    <div className={task_modal_style["button-pack"]}>
                      <button
                        id={contributor.user}
                        onClick={handleClick}
                        className={task_modal_style["add-contributor-button"]}
                      >
                        <i className={"fa fa-plus"} aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={task_modal_style["create-cancel-pack"]}>
              <button
                type="button"
                onClick={props.close}
                className={task_modal_style["cancel"]}
              >
                Cancel
              </button>
              <button type="submit" className={task_modal_style["create"]}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
