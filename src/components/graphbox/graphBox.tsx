import React from 'react';
import graph_style from './graphBox.module.sass';
import * as d3 from 'd3';

function GraphBox(): JSX.Element {
    const data = [
        { 'time': 'At open', items: 25 },
        { 'time': '11:00 PM', items: 0 }
    ]
    const drawLineChart = (data: any) => {
        const svgWidth = 800, svgHeight = 400
        const svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)

        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left, margin.top})`)
        const width = svgWidth - margin.left - margin.right
        const heigth = svgHeight - margin.top - margin.bottom

        const y = d3.scaleLinear()
        //   .domain(d3.extent(data,(d:any) => d.items)
        //   .range([heigth, 0])

    }
    return (
        <div className={graph_style['graph-container']}>
            <div className={graph_style['graph-parent']}>
                <div className={graph_style['graph-title']}>
                    <span><hr /></span>
                    <span><hr /></span>
                    <span><hr /></span>
                    <span><hr /></span>
                    <span><hr /></span>
                </div>

                <div className={`${graph_style['node']} ${graph_style['node1']}`}>M</div>


                <div className={`${graph_style['node']} ${graph_style['node2']}`}>T</div>
                <div className={`${graph_style['node']} ${graph_style['node3']}`}>W</div>
                <div className={`${graph_style['node']} ${graph_style['node4']}`}>T</div>
                <div className={`${graph_style['node']} ${graph_style['node5']}`}>F</div>
                <div className={`${graph_style['node']} ${graph_style['node6']}`}>S</div>
                <div className={`${graph_style['node']} ${graph_style['node7']}`}>S</div>

            </div>




        </div>
        // <div>
        //     <svg id='lineChart'></svg>
        // </div>
    )
}

export default GraphBox;