import React from 'react'
import Graph from '../../components/graph'

const GraphHolder = (props) => {
    const { order, onBarChartClick } = props;

    const xAxis = [20, 10, 15]
    const yAxis = [6, 4, 2]

    let AscXaxis;
    let AscYaxis;

    if (order == 'ascending') {
        AscXaxis = xAxis.sort((a, b) => a - b);
        AscYaxis = yAxis.sort((a, b) => a - b);
    } else {
        AscXaxis = xAxis.sort((a, b) => b - a);
        AscYaxis = yAxis.sort((a, b) => b - a);
    }

    return (
        <div>
            <Graph
                // xAxis={AscXaxis}
                // yAxis={AscYaxis}
                onBarChartClick={onBarChartClick}
                xAxis={AscXaxis}
                yAxis={[6, 4, 2]}
            />
        </div>
    )
}

export default GraphHolder
