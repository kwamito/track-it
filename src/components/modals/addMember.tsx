import React, { useState, useEffect } from "react";
import member_modal from "./addMember.module.sass";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { useSelector, useDispatch } from "react-redux";
import { addContributorToTeam } from "../../actions";

function AddMemberModal(props: any) {
  interface Detail {
    name: string;
    contributors: Array<any>;
    tasks: Array<any>;
    date_created: string;
    project: number;
    contributors_names: Array<any>;
    id: any;
  }
  const [contributors, setContributors] = useState([]);
  const [teamDetail, setTeamDetail] = useState<Detail>();
  const [ids, setId] = useState<any[]>([]);
  const [newArr, setNew] = useState({
    contributors: [] as any,
  });

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
    });
  }

  const handleClick = (e: React.MouseEvent) => {
    e.currentTarget.classList.toggle(member_modal["active"]);
    const value = e.currentTarget as HTMLButtonElement;

    ids.push(value.id);
    newArr.contributors.push(parseInt(value.id));
  };
  useEffect(() => {
    getContributors();
  }, []);

  const addMember = useSelector((state: any) => {
    return state.value;
  });

  const dispatch = useDispatch();

  const handleGo = () => {
    if (props.details) {
      let api = `http://127.0.0.1:8000/project/update-team/${props.team_id}/`;

      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      const token = window.localStorage.getItem("token");
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      // let data = JSON.stringify(action.memberArray);
      //console.log(data, action.teamID);
      for (let i = 0; i < newArr.contributors.length; i++) {
        props.details.contributors.push(newArr.contributors[i]);
      }
      let data = JSON.stringify(props.details);
      console.log(data);
      axios
        .put(api, data)
        .then((response) => {})
        .catch((error) => {
          console.log();
        });
    } else {
      dispatch(addContributorToTeam(props.team_id, newArr.contributors));
      console.log(newArr.contributors);
    }
  };

  function fetchTeamDetailsAndUpdate() {
    if (props.details) {
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      const token = window.localStorage.getItem("token");
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      let api = `http://127.0.0.1:8000/project/update-team/${props.team_id}/`;

      axios.put(api).then((response) => {
        console.log(response.data);
        setTeamDetail(response.data);
      });
    }
  }

  const test = () => {
    let newArr = [];
    let arr = [1, 2, 2, 4, 5];
    let secArr = [2, 3, 1, 4, 1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in secArr) {
        console.log(arr.indexOf(arr[i]));
        console.log("Yes");
      } else {
        newArr.push(arr[i]);

        console.log("No");
      }
    }
    console.log(newArr);
  };

  return (
    <div className={member_modal["container"]}>
      <div id="index">
        <div className={member_modal["modal"]}>
          <i
            onClick={props.close}
            className={`fa fa-times ${member_modal["close-modal"]}`}
            id={props.team_id}
          ></i>
          <div className={member_modal["modal-header"]}>
            <h3>Add a member</h3>
            <span className={member_modal["add-member-icon"]}>
              <span className="material-icons">person_add</span>
            </span>
          </div>
          <div className={member_modal["contributors-container"]}>
            {contributors.map((contributor: any) => {
              return (
                <div className={member_modal["contributor"]}>
                  <span className={member_modal["contributor-avatar"]}>
                    {contributor.user_email.slice(0, 1)}
                  </span>
                  <div>{contributor.user_email}</div>

                  <div>
                    <button
                      onClick={handleClick}
                      id={contributor.id}
                      className={member_modal["add-contributor-button"]}
                    >
                      <i className={"fa fa-plus"} aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button className={member_modal["enter-button"]} onClick={handleGo}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMemberModal;
