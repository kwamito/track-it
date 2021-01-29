import React, { useEffect } from "react";
import cards_style from "./teamCard.module.sass";
import { Link } from "react-router-dom";

function TeamCard(props: any) {
  let hasMembers;
  if (props.members.length > 0) {
    hasMembers = true;
    console.log(hasMembers);
  } else {
    hasMembers = false;
    console.log(hasMembers);
  }
  console.log(props.members.length);
  // let theme = window.localStorage.getItem("theme");
  // if (theme === "dark") {
  //   let card = document.getElementsByClassName(cards_style["team-card-body"]);
  //   for (let i = 0; i < card.length; i++) {
  //     card[i].classList.add("darko");
  //   }
  // } else {
  //   let card = document.getElementsByClassName(cards_style["team-card-body"]);
  //   for (let i = 0; i < card.length; i++) {
  //     card[i].classList.remove("darko");
  //   }
  // }

  useEffect(() => {
    //   if (theme == "dark") {
    //     let cards = (document.querySelectorAll(
    //       `.${cards_style["team-card-body"]}`
    //     ) as any) as Array<HTMLDivElement>;
    //     cards.forEach((card) => {
    //       card.classList.add(cards_style["darko"]);
    //     });
    //   }
    // }, [theme]);
    // window.addEventListener("storage", (e) => {
    //   console.log("fjdfj");
  });
  console.log(props);
  return (
    <div className={cards_style["team-card-body"]}>
      <div className={cards_style["team-card-head"]}>
        <div className={cards_style["sub-head"]}>
          Team
          <div className={cards_style["team-avatar"]}>
            {props.name.slice(0, 1).toUpperCase()}
          </div>
          <Link
            className={cards_style["team-name"]}
            to={`/team/${props.projectId}/${props.id}`}
          >
            {props.name}
          </Link>
        </div>
        <div className={cards_style["add-members-button-container"]}>
          <button
            onClick={props.open}
            id={props.id}
            className={cards_style["add-member-button"]}
          >
            <span className="material-icons">person_add</span>
          </button>
          <button className={cards_style["add-task-button"]}>
            <span className="material-icons">add_task</span>
          </button>
        </div>
      </div>
      <div className={cards_style["second-head"]}>
        <div>Name</div>
        <div>Progress</div>
        <div>Tasks</div>
      </div>
      {/* {hasMembers ? props.members.map() : ''} */}
      {hasMembers ? (
        props.members.map((member: any) => {
          return (
            <div className={cards_style["team-members"]}>
              <div className={cards_style["member"]}>
                <div className={cards_style["avatar-name"]}>
                  <div className={cards_style["member-avatar"]}>
                    {member.slice(0, 1).toUpperCase()}
                  </div>
                  <div className={cards_style["member-name"]}>{member}</div>
                </div>
                <div className={cards_style["progress-group-flex"]}>
                  <div className={cards_style["progress-bars"]}>
                    <div className={cards_style["member-back"]}>
                      <div className={cards_style["member-progress"]}>
                        <div className={cards_style["op-an"]}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cards_style["tasks-done"]}>5/5</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={cards_style["no-members"]}>
          This team doesn't have any members yet!
        </div>
      )}

      {props.members.length >= 4 ? (
        <div className={cards_style["more"]}>
          <span className="material-icons">expand_more</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default TeamCard;
