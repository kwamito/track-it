import React, { Component, useEffect } from "react";
import Chart from "chart.js";
import classes from "./LineGraph.module.scss";
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
//Chart.defaults.global.legend!.display = false;
//Chart.defaults.global.elements.line.tension = 0;

export default class LineGraph extends Component {
  chartRef = React.createRef<any>();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    // const { width: graphWidth } = myChartRef.canvas;

    // let gradientLine = myChartRef.createLinearGradient(0, 0, graphWidth * 2, 0);
    // gradientLine.addColorStop(0, "#FF006E");
    // gradientLine.addColorStop(1, "#F46036");
    const { height: graphHeight } = myChartRef.canvas;

    let gradientLine = myChartRef.createLinearGradient(0, 0, 0, graphHeight);
    gradientLine.addColorStop(0, "rgb(255, 0, 110, 0.2)");
    gradientLine.addColorStop(0.5, "rgb(255, 0, 110, 0.35)");
    gradientLine.addColorStop(1, "rgb(255, 0, 110, 0.7)");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91, 44, 67, 35],
            fill: false,
            borderColor: "tomato",
          },
          {
            label: "National Average",
            data: [3, 3, 55, 55, 66, 200],
            fill: false,
            borderColor: "purple",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false,
              },
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
  }

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
