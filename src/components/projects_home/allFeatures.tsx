import React, { useState, useEffect } from "react";
import axios from "axios";
import history_styles from "./budgetHistory.module.sass";
import Sidebar from "../sidebar/sideBar";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";
import HomeCard from "../card/HomeCard";
function Features(props: any) {
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

  const [features, setFeatures] = useState([]);
  const fetchFeatures = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/create-feature/${props.match.params.project_id}/`;
    axios
      .get(api)
      .then((response) => {
        console.log(response);
        setFeatures(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchFeatures();
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
          {features.map((feature: any) => {
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
                full_url={false}
                approved={feature.approved}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
