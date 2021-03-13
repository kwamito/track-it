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
          <form action="">
            <h2>Create your expense</h2>
            <input type="number" placeholder="Amount" />
            <input type="text" placeholder="Description" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateExpense;
