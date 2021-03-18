import { useState, useEffect } from "react";
import list_style from "./contributorsList.module.sass";
import style from "../projects_home/projectDetail.module.sass";
import Sidebar from "../sidebar/sideBar";
import BottomNavBar from "../navbar/bottomNavBar";
import Navbar from "../navbar/navBar";
import axios from "axios";

function ContributorsList(props: any, match: any) {
  const [contributors, setContributors] = useState([]);
  const getAllContributors = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/contributors/${props.match.params.id}/`;
    axios.get(api).then((response) => {
      setContributors(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getAllContributors();
  }, []);
  return (
    <div>
      {/* <div className={list_style['']}>
        {contributors.map((contributor: any) => {
          return <div>{contributor.user_email}</div>;
        })}
      </div> */}
      <div>
        <Sidebar projectId={props.match.params.id} data={"dd"} />
      </div>

      <div className={style["main"]}>
        <div className={style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>

        <table className={list_style["list-table"]}>
          <tr className={list_style["head"]}>
            <th>
              <h3>Username</h3>{" "}
            </th>
            <th>
              <h3>Email</h3>{" "}
            </th>
            <th>
              <h3>is_accepted</h3>{" "}
            </th>
            <th>
              <h3> Actions</h3>
            </th>
          </tr>
          {contributors.map((contributor: any) => {
            return (
              <tr className={list_style["eles"]}>
                <td>{contributor.user_email}</td>
                <td>{contributor.user_email}</td>
                <td>{contributor.is_accepted ? "true" : contributor.id}</td>
                <td>
                  <button className={list_style["delete"]}>
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ContributorsList;
