import { useState } from "react";
import axios from "axios";
import Sidebar from "../sidebar/sideBar";
import style from "./projectDetail.module.sass";
import expense_style from "./createExpense.module.sass";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";
import doc_style from "./projectDoc.module.sass";

function CreateExpense(props: any) {
  const [details, setDetails] = useState({
    amount: "",
    description: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    const data = JSON.stringify(details);
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/expense-create/${props.match.params.id}/`;
    axios.post(api, data).then((response) => {
      console.log(response);
    });
  }

  function handleChange(e: any) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <div>
        <Sidebar
          projectId={props.match.params.id}
          data={props.match.params.id}
        />
      </div>
      <div className={style["main"]}>
        <div className={style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>

        <div className={expense_style["create-form"]}>
          <form onSubmit={handleSubmit}>
            <h2>Create your expense</h2>
            <input
              onChange={handleChange}
              type="number"
              placeholder="Amount"
              name="amount"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Description"
              name="description"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateExpense;
