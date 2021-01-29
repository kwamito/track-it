import React, { useState, useEffect } from "react";
import style from "./projectDetail.module.sass";
import axios from "axios";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import GraphBox from "../graphbox/graphBox";
import HomeCard from "../card/HomeCard";
import BottomNavBar from "../navbar/bottomNavBar";
import TaskCard from "../tasks/taskCard";
import "./all.sass";
import TeamCard from "../team_card/teamCard";
import CreateTaskModal from "../modals/createTaskModal";
import AddMemberModal from "../modals/addMember";
import BudgetChart from "../graphbox/budgetChart";
import HomeRadar from "../graphbox/homeRadarChart";
import InvitationCard from "../misc/invitationCard";

function ProjectDetail({ match }: any): JSX.Element {
  interface Project {
    id: number;
    budget: Array<any>;
    budget_percent: string;
    contributors: Array<any>;
    contributors_count: number;
    created: string;
    description: any;
    documentation: any;
    due_date: any;
    features: Array<any>;
    icon: any;
    is_public: boolean;
    manager: any;
    over_budget_by: any;
    over_budget_by_percentage: any;
    priority: string;
    spendings: Array<any>;
    tasks_completed: any;
    tasks_done: any;
    time_since_created: string;
    title: string;
    total_expenditure: any;
    budget_pure_number: any;
    teams: Array<any>;
    contributors_names: Array<any>;
    all_tasks_count: any;
    number_of_completed_tasks: any;
    all_uncompleted_tasks: any;
    weeks_tasks: Array<any>;
  }

  const [project, setProject] = useState<Project>();
  const [team, setTeam] = useState([]);

  function getProjectDetails() {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/pro/${match.params.id}/`;
    axios.get(api).then((response) => {
      setProject(response.data);
    });
  }

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
    getProjectDetails();
  }, []);

  const ring1Style = {
    transform: "scale(1) rotate(-90deg)",
  };

  const ring2Style = {
    transform: "scale(0.75) rotate(-90deg)",
  };

  const ring3Style = {
    transform: "scale(0.5) rotate(-90deg)",
  };
  console.log(project);

  const strokeStyle = {
    strokeDasharray: `${project?.tasks_completed}, 100`,
  };
  const nums = [1, 1, 1, 2, 2, 2];

  return (
    <div>
      <div>
        <Sidebar projectId={project?.id} data={project?.documentation} />
      </div>

      <div className={style["main"]}>
        <div className={style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>

        <div className={style["ring-container"]}>
          <svg className={style["ActivityRings"]} viewBox="0 0 35 35">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="red" />
                <stop offset="100%" stop-color="tomato" />
              </linearGradient>
            </defs>
            <g className={`${style["ring"]} ${style["ring1"]}`}>
              <circle
                className={style["background"]}
                cx="50%"
                cy="50%"
                stroke-width="3"
                stroke-dasharray="100, 100"
                r="15.915"
              />

              <circle
                className={style["completed"]}
                cx="50%"
                cy="50%"
                stroke-width="3"
                stroke="url(#gradient)"
                //stroke-dasharray={`${project?.tasks_done},100`}
                style={strokeStyle}
                r="15.915"
              />
              <title className={style["tooltiptext"]}>Tasks Done</title>
            </g>

            <g className={`${style["ring"]} ${style["ring2"]}`}>
              <circle
                className={style["background"]}
                cx="50%"
                cy="50%"
                stroke-width="4"
                stroke-dasharray="100, 100"
                r="15.915"
              />

              <circle
                className={style["completed"]}
                cx="50%"
                cy="50%"
                stroke-width="4"
                stroke-dasharray="35, 100"
                r="15.915"
              />
            </g>
            <g className={`${style["ring"]} ${style["ring3"]}`}>
              <circle
                className={style["background"]}
                cx="50%"
                cy="50%"
                stroke-width="6"
                stroke-dasharray="100, 100"
                r="15.915"
              />

              <circle
                className={style["completed"]}
                cx="50%"
                cy="50%"
                stroke-width="6"
                stroke-dasharray="55, 100"
                r="15.915"
              />
              <title>dfs</title>
            </g>
          </svg>
        </div>
        <hr className={style["ruler-ring"]} />
        <h3 className={style["activity-heading"]}>Activity for the week</h3>
        <GraphBox data={project?.weeks_tasks} />

        <div className={style["second-charts-container"]}>
          <BudgetChart
            title={"Tasks"}
            labels={["Completed", "Total", "Uncompleted"]}
            data={[
              project?.number_of_completed_tasks,
              project?.all_tasks_count,
              project?.all_uncompleted_tasks,
            ]}
            type="pie"
            colors={["orange", "yellow", "green"]}
          />
          <BudgetChart
            title={"Budget"}
            labels={["Budget", "TotalExpenses"]}
            data={[project?.budget_percent, project?.total_expenditure]}
            type="pie"
            colors={["red", "green"]}
          />
        </div>
        <div className={style["radar-invite"]}>
          <HomeRadar />
          <InvitationCard id={project?.id} />
        </div>
        <h3 className={style["features-text"]}>Features completed this week</h3>
        <div className={style["feats"]}>
          {/* {nums.map(num => {
                        
                    })} */}

          {project?.features.map((feature) => {
            return (
              <HomeCard
                title={feature.name}
                due_date={feature.time_to_due_date}
                created={feature.time_since_created}
                owner_avatar={feature.profile_image}
                reviewed={feature.reviewed}
                merged={feature.merged}
                date_created={feature.date_created}
                date_reviewed={feature.date_reviewed}
                cost={feature.cost}
                priority={feature.priority}
                documentation={feature.documentation}
                id={feature.id}
                approved={feature.approved}
              />
            );
          })}
          {/* {nums.map((feature) => {
            return (
              <HomeCard
                title={"osdjfklsjf"}
                due_date={"2 weeks"}
                created={"2 minutes"}
                owner_avatar={""}
              />
            );
          })} */}
        </div>

        <div className={style["team-cards-container"]}>
          {project?.teams.map((team) => {
            return (
              <div>
                <TeamCard
                  id={team.id}
                  projectId={match.params.id}
                  open={openModal}
                  name={team.name}
                  members={team.contributors_names}
                />

                <div
                  id={`add-member-modal${team.id}`}
                  className={style["add-member-container"]}
                >
                  <AddMemberModal
                    team_id={team.id}
                    close={closeModal}
                    id={match.params.id}
                    class_id={team.id}
                  />
                </div>
                <div
                  onClick={closeModal}
                  id="overlay"
                  className={style["overlay"]}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
