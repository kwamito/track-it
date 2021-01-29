import React, { useState, useEffect } from "react";
import axios from "axios";
import detail_style from "./teamDetail.module.sass";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";
import AddMemberModal from "../modals/addMember";

function TeamDetail(props: any) {
  interface Detail {
    name: string;
    contributors: Array<any>;
    tasks: Array<any>;
    date_created: string;
    project: number;
    contributors_names: Array<any>;
    id: any;
  }

  function getProperDateFormat(date: string) {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  const [detail, setDetail] = useState<Detail>();
  const getTeamDetail = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/update-team/${props.match.params.team_id}/`;
    axios.get(api).then((response) => {
      console.log(response.data);
      setDetail(response.data);
    });
  };

  function openModal(e: React.MouseEvent) {
    console.log(e.currentTarget.id);
    let modal = document.getElementById(`add-member-modal`) as HTMLDivElement;
    let overlay = document.getElementById("overlay") as HTMLDivElement;
    modal.style.display = "block";
    overlay.style.display = "block";
  }
  function closeModal(e: React.MouseEvent) {
    let modal = document.getElementById(`add-member-modal`) as HTMLDivElement;
    let overlay = document.getElementById("overlay") as HTMLDivElement;
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  useEffect(() => {
    getTeamDetail();
  }, []);
  console.log(props);

  return (
    <div>
      <div>
        <Sidebar projectId={props.match.params.project_id} />
      </div>
      <div className={detail_style["main"]}>
        <div className={detail_style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={detail_style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>
        <span
          onClick={openModal}
          className={`material-icons ${detail_style["add-member"]}`}
        >
          person_add
        </span>

        <div className={detail_style["container-avatar"]}>
          <span className={detail_style["avatar"]}>
            {detail?.name.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <div className={detail_style["name"]}>{detail?.name}</div>

        <div className={detail_style["members-container"]}>
          <div className={detail_style["member"]}>
            <div className={detail_style["members"]}>
              {detail?.contributors_names.map((contributor: any) => {
                return (
                  <span className={detail_style["contributor"]}>
                    <div className={detail_style["contributor-avatar"]}>
                      {contributor.slice(0, 1).toUpperCase()}
                    </div>
                    <p className={detail_style["email"]}>{contributor}</p>
                    <p>Added on: {getProperDateFormat(detail.date_created)}</p>
                    <p>Number of tasks done:{detail.tasks.length}</p>
                  </span>
                );
              })}
            </div>
          </div>
          <div
            id={`add-member-modal`}
            className={detail_style["add-member-container"]}
          >
            <AddMemberModal
              team_id={props.match.params.team_id}
              close={closeModal}
              id={props.match.params.project_id}
              class_id={props.team_id}
              details={detail}
            />
          </div>
          <div
            onClick={closeModal}
            id="overlay"
            className={detail_style["overlay"]}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
