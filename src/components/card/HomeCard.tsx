import React from "react";
import style from "./HomeCard.module.sass";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { reviewFeature } from "/home/kwame/regs/taskit/src/actions";
import axios from "axios";

function HomeCard(props: any) {
  console.log(props);
  const backStyle = {
    backgroundImage: `url(${
      props.full_url == false
        ? `http://127.0.0.1:8000${props.owner_avatar}`
        : props.owner_avatar
    })`,
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
  // const review = useSelector((state) => {
  //   console.log(state);
  //   return state;
  // });

  const dispatch = useDispatch();

  function reviewFeat() {
    let api = `http://127.0.0.1:8000/project/review-feature/${props.id}/`;

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };

    axios
      .patch(api)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
            {props.approved ? (
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
                    <p>Reviewed and pending approval</p>
                  )}{" "}
                </span>
              </div>
            ) : (
              <div className={style["tooltip"]}>
                <span className="material-icons">pending_actions</span>
                <span className={style["tooltip-text"]}>
                  Pending Review{" "}
                  <button
                    onClick={() => reviewFeat()}
                    className={style["review-button"]}
                  >
                    <span className="material-icons">remove_red_eye</span>
                  </button>{" "}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
