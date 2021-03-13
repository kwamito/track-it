import React, { useState, useEffect } from "react";
import axios from "axios";
import history_styles from "./budgetHistory.module.sass";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";

function BudgetHistory(props: any) {
  interface BudgetHistory {
    from_amount_currency: any;
    from_amount: any;
    to_amount_currency: any;
    to_amount: any;
    date_updated: string;
    id: any;
    determine: any;
    budget: any;
  }
  console.log(props);

  function getDateFormat(date: any) {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  const [budgetHistory, setBudgetHistory] = useState([]);
  const fetchHistory = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/history/${props.match.params.project_id}/`;
    axios
      .get(api)
      .then((response) => {
        console.log(response);
        setBudgetHistory(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div>
      <div>
        <Sidebar projectId={props.match.params.project_id} />
      </div>
      <div className={history_styles["main"]}>
        <div className={history_styles["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={history_styles["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>
        <div className={history_styles["container"]}>
          {budgetHistory.map((history: any) => {
            return (
              <div key={history.id} className={history_styles["history-card"]}>
                <div>
                  From: {history.from_amount_currency}
                  {history.from_amount}
                </div>
                <div>
                  To: {history.to_amount_currency}
                  {history.to_amount}
                </div>
                <div>
                  {parseInt(history.to_amount) >
                  parseInt(history.from_amount) ? (
                    <span style={{ color: "red" }} className="material-icons">
                      trending_up
                    </span>
                  ) : (
                    <span className="material-icons">trending_down</span>
                  )}
                  <div>{getDateFormat(history.date_updated)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BudgetHistory;
