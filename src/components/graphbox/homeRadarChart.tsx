import React, { Component, useEffect } from "react";
import Chart from "chart.js";
import classes from "./homeRadar.module.sass";
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend!.display = true;
function HomeRadar(props: any) {
  let chartRef = React.createRef<any>();
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const { width: graphWidth } = myChartRef.canvas;

    let gradientLine = myChartRef.createLinearGradient(0, 0, graphWidth * 2, 0);
    gradientLine.addColorStop(0, "#FF006E");
    gradientLine.addColorStop(1, "#F46036");
    new Chart(myChartRef, {
      type: "radar",
      data: {
        labels: ["Running", "Swimming", "Eating", "Cycling"],
        datasets: [
          {
            data: [20, 10, 4, 2],
            borderColor: "purple",
          },
          {
            data: [15, 44, 23, 26],
            borderColor: "orange",
          },
          {
            data: [50, 40, 42, 20],
            borderColor: "red",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: { display: true },
              // gridLines: {
              //   display: true,
              //   drawBorder: false,
              // },
            },
          ],
          yAxes: [
            {
              ticks: { display: true },
              // gridLines: {
              //   display: true,
              //   drawBorder: false,
              // },
            },
          ],
        },
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
      <canvas id="myChart" className={classes["canvas"]} ref={chartRef} />
    </div>
  );
}

export default HomeRadar;
