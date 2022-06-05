import React, { useRef, useCallback, useEffect, useState } from 'react'
import Plotly from "plotly.js";
import PropTypes from "prop-types";
const Graph = (props) => {
    const { onBarClick, grapDetails, order } = props
    console.log(order, "order in graph ");
    // console.log(order, "order in main");
    const graph = useRef();
    const onGraphClick = useCallback((event) => onBarClick(event), [onBarClick]);

    const drawGraph = useCallback(() => {
        // console.log(order, "order in draw graph")
        var layout = { title: "HTC_GRAPH", height: 600, width: 600 };

        Plotly.newPlot(graph.current, grapDetails, layout)
        graph.current.on('plotly_click', (event) => onGraphClick(
            {
                x: event.points[0].x,
                y: event.points[0].y,
                pointNumber: event.points[0].pointNumber
            }));
    }, [onGraphClick, grapDetails])

    useEffect(() => {
        drawGraph()
    }, [drawGraph, order])
    return (
        <div ref={graph}></div>
    )
}
export default Graph