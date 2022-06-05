//1.pixi
//2.graph
//3.table

import React, { useffect } from 'react'
import { Grid } from '@material-ui/core'
import GraphPlace from './graphPlace'
import BasicTable from '../../components/table';
import { useCallback } from 'react';
import { body } from '../../components/table/tableBody';
import { useSelector } from 'react-redux'
const GraphDetailPage = () => {
    const [color, setColor] = React.useState(['#00000'])
    const [X, setX] = React.useState('')
    // console.log(X, "xxxxxx")
    const [Y, setY] = React.useState('')
    // console.log(Y, "yyyy")
    const ref = React.useRef(null)
    const graphRef = React.useRef({ x: '', y: '' })
    const graphState = useSelector(state => state.graph);
    const { order } = graphState;

    var xArray = [10, 15, 20, 25, 30]; //0
    var yArray = [8, 4, 10, 9, 12]
    if (order === 'Ascending') {

        graphRef.current.x = xArray.sort((a, b) => a - b)
        graphRef.current.y = yArray.sort((a, b) => a - b)
    }
    else if (order === 'Descending') {
        graphRef.current.x = xArray.sort((a, b) => a - b)
        graphRef.current.y = yArray.sort((a, b) => b - a)

    }
    const onBarClick = useCallback((data) => {
        const { x, y, pointNumber } = data;
        // console.log(data.points[0], "data in onBar click")

        // ref.current = data.points[0].pointIndex

        var pts = '';
        // for (var i = 0; i < data.points.length; i++) {
        //     pts = 'x = ' + data.points[i].x + '\ny = ' +
        //         data.points[i].y
        // }
        let pn = '';
        // let x = '';
        // let y = '';
        let tn = '';
        // pn = data.points[0].pointNumber;
        // tn = data.points[0].pointIndex;
        setX(x)
        setY(y)
        let colors = ['#00000', '#00000', '#00000', '#00000', '#00000']
        colors[pointNumber] = 'red'
        //for collecting one color
        setColor([...colors])
        // for collecting red color
        // setColor([
        //     ...color,
        //     color[pn] = 'red'
        // ])
        // }
    }, [])

    // const data = { x: graphRef.current.x, y: graphRef.current.y };
    // onBarClick(data)
    useffect(() => {
        setY(4)
    }, [order])
    var grapDetails = [{
        x: graphRef.current.x,
        y: graphRef.current.y,
        type: "bar",
        orientation: "h",
        hoverinfo: "x+y",
        text: graphRef.current.x,
        hover: "none",
        textPosition: "outside",
        marker: {
            color: color
        },

    }];
    const filterGraphData = body.filter((sub) => sub?.y === Y)
    // console.log(filterGraphData, "filtrt data")
    const defaultData = new Array(body[0])

    const handleChange = (e) => { }
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>
                        {"Pixi"}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>
                        <GraphPlace onBarClick={onBarClick} grapDetails={grapDetails} order={order} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>
                        <BasicTable handleChange={handleChange} body={filterGraphData} defaultData={defaultData} xAxis={X} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default GraphDetailPage