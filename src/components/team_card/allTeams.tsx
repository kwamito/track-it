import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamCard from "./teamCard";
import allteam_style from "./allTeams.module.sass";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";
import AddMemberModal from "../modals/addMember";

function AllTeams(props: any) {
  const [teams, setTeams] = useState([]);

  const getAllTeams = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/create-team/${props.match.params.id}/`;
    axios.get(api).then((response) => {
      console.log(response);
      setTeams(response.data);
    });
  };

  function openModal(e: React.MouseEvent) {
    console.log(e.currentTarget.id);
    let modal = document.getElementById(
      `add-member-modal${e.currentTarget.id}`
    ) as HTMLDivElement;
    let overlay = document.getElementById("overlay") as HTMLDivElement;
    modal.style.display = "block";
    overlay.style.display = "block";
  }
  function closeModal(e: React.MouseEvent) {
    let modal = document.getElementById(
      `add-member-modal${e.currentTarget.id}`
    ) as HTMLDivElement;
    let overlay = document.getElementById("overlay") as HTMLDivElement;
    modal.style.display = "none";
    overlay.style.display = "none";
  }
  useEffect(() => {
    getAllTeams();
  }, []);
  return (
    <div>
      <div>
        <Sidebar projectId={props.match.params.id} />
      </div>
      <div className={allteam_style["main"]}>
        <div className={allteam_style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={allteam_style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>
        <div className={allteam_style["team-cards-container"]}>
          {teams.map((team: any) => {
            return (
              <div>
                {" "}
                <TeamCard
                  name={team.name}
                  id={team.id}
                  open={openModal}
                  projectId={props.match.params.id}
                  members={team.contributors_names}
                />
                <div
                  id={`add-member-modal${team.id}`}
                  className={allteam_style["add-member-container"]}
                >
                  <AddMemberModal
                    team_id={team.id}
                    close={closeModal}
                    id={props.match.params.id}
                    class_id={team.id}
                  />
                </div>
                <div
                  onClick={closeModal}
                  id="overlay"
                  className={allteam_style["overlay"]}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllTeams;
