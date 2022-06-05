import React from "react";
import Graph from "../../components/graph/graph";
import { Grid } from "@material-ui/core";

const graphPlace = (props) => {
    const { onBarClick, grapDetails, order } = props;
    console.log(order, "order in graph place");
    return <>
        <Graph
            onBarClick={onBarClick}
            grapDetails={grapDetails}
            order={order}
        />
    </>;
};

export default graphPlace;
