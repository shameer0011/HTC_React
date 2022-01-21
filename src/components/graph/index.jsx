import React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Plotly from "plotly.js";
import { useStyles } from "./style";
import { colors } from './color'
const Graph = (props) => {
    const { xAxis, yAxis, onBarChartClick } = props;
    const [borderColor, setBorderColor] = useState(['yellow', 'yellow', 'yellow']);
    console.log(borderColor, "border color")
    const [colors, setColor] = useState(['#00000', '#00000', '#00000', '#00000', '#00000', '#00000'])
    const graphRef = useRef(0);
    const classes = useStyles();
    useEffect(() => {
        graphDetails()
    }, [borderColor, xAxis, yAxis])

    var pn = '',
        tn = '',
        x = '',
        y = '';
    const onBarClick = (data) => {

        onBarChartClick(data)
        const index = colors.findIndex(color => color === "red");
        if (index !== -1) {
            colors[index] = '#00000';
        }
        const borderIndex = borderColor.findIndex(bordercolor => bordercolor == "green");

        if (borderIndex !== -1) {
            borderColor[borderIndex] = '#00000'
        }
        setColor([...colors]);
        setBorderColor([...borderColor]);
        for (var i = 0; i < data.points.length; i++) {
            pn = data.points[i].pointNumber;
            tn = data.points[i].curveNumber;
            setColor(data.points[i].data.marker.color)
            // console.log(data.points[i].data.marker.line.color, "dgfdgb")
            setBorderColor(data.points[i].data.marker.line.color)
            y = data.points[i].y;
            x = data.points[i].x;
        };
        colors[pn] = 'red';
        // borderColor[pn] = 'green'
        setColor(colors[pn])
        // setBorderColor([...borderColor, borderColor[pn]])
        var update = {
            'marker': { color: colors, size: 16, line: { width: 1.5, color: borderColor } }, classNumber: y,
        };
        Plotly.restyle(graphRef.current, update, [tn]);
    }

    const graphDetails = () => {
        var trace1 = {
            x: [20, 14, 23],
            y: [1, 2, 3],
            name: 'SF Zoo',
            orientation: 'h',
            marker: {
                color: colors,
                width: 1
            },
            type: 'bar',

        };

        var trace2 = {
            x: xAxis,
            y: yAxis,
            name: 'LA Zoo',
            orientation: 'h',
            type: 'bar',
            marker: {
                color: colors,
                width: 1,
                line: { width: 1.5, color: borderColor }
            },

        };

        var data = [trace2];

        var layout = {
            title: 'Colored Bar Chart',
            barmode: 'stack',
            // bargap: 1
        };

        Plotly.newPlot(graphRef.current, data, layout);
        graphRef.current.on('plotly_click', onBarClick)
    }

    return (
        <div ref={graphRef} id="myDiv" />
    );
}
export default Graph;