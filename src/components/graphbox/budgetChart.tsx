import React, { Component, useEffect } from "react";
import Chart from "chart.js";
import classes from "./chartStrip.module.sass";
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend!.display = true;
function BudgetChart(props: any) {
  let chartRef = React.createRef<any>();
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: props.type,
      data: {
        labels: props.labels,
        datasets: [
          {
            label: "Sales",
            data: props.data,
            backgroundColor: props.colors,
            //borderColor: "none",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {},
        layout: {
          padding: {
            top: 5,
            left: 15,
            right: 15,
            bottom: 15,
          },
        },
      },
    });
  });

  return (
    <div className={classes["graph-parent"]}>
      <div>
        <h3 className={classes.title}>{props.title}</h3>
      </div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
}

export default BudgetChart;
