import React from "react";
import expense from "./expenseCard.module.sass";

function ExpenseCard(props: any) {
  return (
    <div className={expense["card-body"]}>
      <div>{props.title ? props.title : "No title"}</div>
      <div>
        {props.amount > 100 ? (
          <p style={{ color: "red" }}>Amount: ${props.amount}</p>
        ) : (
          <p>Amount: ${props.amount}</p>
        )}
      </div>
      <div>Created by: {props.contributor}</div>
    </div>
  );
}

export default ExpenseCard;
