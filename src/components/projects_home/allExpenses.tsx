import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../sidebar/sideBar";
import main_style from "./projectDetail.module.sass";
import Navbar from "../navbar/navBar";
import BottomNavBar from "../navbar/bottomNavBar";
import expense_style from "./allExpenses.module.sass";
import ExpenseCard from "./expenseCard";

function AllExpenses(props: any) {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const fetchAllExpenses = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    const token = window.localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    let api = `http://127.0.0.1:8000/project/expense-create/${props.match.params.id}/`;
    axios.get(api).then((response) => {
      setExpenses(response.data);
    });
  };

  useEffect(() => {
    fetchAllExpenses();
  }, []);

  return (
    <div>
      <div>
        <Sidebar projectId={props.match.params.id} />
      </div>
      <div className={main_style["main"]}>
        <div className={main_style["project-detail-nav"]}>
          <Navbar />
        </div>
        <div className={main_style["project-detail-bottom-nav"]}>
          <BottomNavBar />
        </div>
        {/* <h2
          style={{
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          Expenses
          <span className="material-icons ml-4 mr-2 icon">attach_money</span>
        </h2> */}
        {/* <h2 style={{ textAlign: "center" }}>${total}</h2> */}
        <h3 style={{ textAlign: "center" }}>
          {expenses.length <= 0 ? "No expenses have been created yet" : ""}
        </h3>
        <div className={expense_style["expense-container"]}>
          {expenses.map((expense: any) => {
            return (
              <div>
                <ExpenseCard
                  title={expense.description}
                  amount={expense.amount}
                  contributor={expense.contributor_email}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllExpenses;
