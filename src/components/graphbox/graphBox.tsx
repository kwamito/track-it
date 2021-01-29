import React, { Component, useEffect } from "react";
import graph_style from "./graphBox.module.sass";
import * as d3 from "d3";
import Chart from "chart.js";
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";

function GraphBox(props: any) {
  let chartRef = React.createRef<any>();
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const { width: graphWidth } = myChartRef.canvas;

    let gradientLine = myChartRef.createLinearGradient(0, 0, graphWidth * 2, 0);
    gradientLine.addColorStop(0, "#FF006E");
    gradientLine.addColorStop(1, "#F46036");
    // const { height: graphHeight } = myChartRef.canvas;

    // let gradientLine = myChartRef.createLinearGradient(0, 0, 0, graphHeight);
    // gradientLine.addColorStop(0, "rgb(255, 0, 110, 0.2)");
    // gradientLine.addColorStop(0.5, "rgb(255, 0, 110, 0.35)");
    // gradientLine.addColorStop(1, "rgb(255, 0, 110, 0.7)");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["5th", "4th", "3rd", "2nd", "1st"],
        datasets: [
          {
            label: "Tasks created over the past five weeks",
            data: props.data,
            fill: true,
            //borderColor: "tomato",
            borderColor: gradientLine,
          },
          {
            label: "National Average",
            data: [3, 3, 55, 55, 66, 200],
            fill: true,
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
              ticks: { display: true },
              gridLines: {
                display: true,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: { display: true },
              gridLines: {
                display: true,
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
  });
  return (
    // <div className={graph_style['graph-container']}>
    //     <div className={graph_style['graph-parent']}>
    //         <div className={graph_style['graph-title']}>
    //             <span><hr /></span>
    //             <span><hr /></span>
    //             <span><hr /></span>
    //             <span><hr /></span>
    //             <span><hr /></span>
    //         </div>

    //         <div className={`${graph_style['node']} ${graph_style['node1']}`}>M</div>

    //         <div className={`${graph_style['node']} ${graph_style['node2']}`}>T</div>
    //         <div className={`${graph_style['node']} ${graph_style['node3']}`}>W</div>
    //         <div className={`${graph_style['node']} ${graph_style['node4']}`}>T</div>
    //         <div className={`${graph_style['node']} ${graph_style['node5']}`}>F</div>
    //         <div className={`${graph_style['node']} ${graph_style['node6']}`}>S</div>
    //         <div className={`${graph_style['node']} ${graph_style['node7']}`}>S</div>

    //     </div>

    // </div>
    <div className={graph_style["graph-parent"]}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
}

export default GraphBox;
