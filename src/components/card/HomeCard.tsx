import React from "react";
import style from "./HomeCard.module.sass";

function HomeCard(props: any) {
  console.log(props);
  const backStyle = {
    backgroundImage: `url(${props.owner_avatar})`,
    backgroundSize: "cover",
    bacgroundPosition: "center",
    padding: "10px",
    borderRadius: "100%",
    height: "5px",
    width: "5px",
    boxShadow: "1px 1px 1px 1px grey",
  };
  const noAvatarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <div className={style.card}>
        <div className={style.title}>
          {props.title.length > 15
            ? `${props.title.slice(0, 15)}...`
            : props.title}

          {/* <span className={`material-icons menu`}>
                    //     more_horiz
                    // </span> */}
        </div>

        <div className={style.time}>
          {props.due_date != null
            ? `Due In: ${props.due_date}`
            : `Created: ${props.created}`}
        </div>
        <p>
          {props.documentation
            ? props.documentation.slice(0, 50) + "....."
            : "No documentation"}
        </p>
        <div className={style.bottom}>
          <div className={style.avatarContainer}>
            {/* <a className={style.avatar}></a>
                        <a className={style.avatar}></a>
                        <a className={style.avatar}></a> */}
            {props.owner_avatar != null ? (
              <a style={backStyle}></a>
            ) : (
              <a style={noAvatarStyle}>K</a>
            )}
          </div>
          <div className={style["second-group"]}>
            {/* <span className={`material-icons ${style["icons"]}`}>
              assignment_turned_in
            </span>
            <span className={"over"}>2/5</span> */}
          </div>

          <div className={"share"}>
            {props.merged ? (
              <div className={style["tooltip"]}>
                <span className={`material-icons ${style["link-icon"]}`}>
                  task_alt
                </span>
                <span className={style["tooltip-text"]}>
                  Merged and reviewed
                </span>
              </div>
            ) : (
              ""
            )}

            {props.merged ? (
              <div className={style["tooltip"]}>
                <span className="material-icons">call_merge</span>
                <span className={style["tooltip-text"]}>
                  Documentation merged
                </span>
              </div>
            ) : (
              ""
            )}
            {props.reviewed ? (
              <div className={style["tooltip"]}>
                <span className="material-icons">grading</span>
                <span className={style["tooltip-text"]}>
                  {props.merged ? (
                    <p>Reviewed and merged</p>
                  ) : (
                    <p>Reviewed and pending merge</p>
                  )}{" "}
                </span>
              </div>
            ) : (
              <div className={style["tooltip"]}>
                <span className="material-icons">pending_actions</span>
                <span className={style["tooltip-text"]}>Pending Review</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
