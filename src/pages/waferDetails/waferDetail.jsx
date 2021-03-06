import React, { useState, useEffect } from 'react'
import Container from '../container/index';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Graph from '../../components/graph'
import GraphHolder from '../graphHolder/graphHolder';
import { graphOrder } from '../../actions/drawerAsc/Desc/graphDrawer';
const useStyles = makeStyles({
    root: {

        display: "flex",
        // width: "200px",
        // height: "200px",
        backgroundColor: "green",
        borderRadius: "50%",
        // marginTop: "50px",
        display: "flex",
        justifyContent: 'center',
        cursor: "pointer"
    },
});

const WaferDetail = () => {
    const classes = useStyles();
    const [selectInspectionList, setSelectInspectionList] = useState({});
    const dispatch = useDispatch();
    const storeLists = useSelector(state => state.selectInspectionListToStore);
    const defaultGraphOrder = useSelector((state) => state.graphOrderReducer);

    useEffect(() => {
        setSelectInspectionList(storeLists)
    }, [storeLists])

    useEffect(() => {
        dispatch(graphOrder('ascending'))
    }, [])

    const onBarChartClick = (data) => {
        // console.log("data in wafer details", data)
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={6} >
                    <div style={{ border: '1px solid', height: "500px" }}>
                        <span>  Map Section</span>
                        {selectInspectionList?.waferId &&
                            <>
                                <div className={classes.root} >
                                </div>
                                <Typography variant="h6" style={{ margin: "auto" }}>
                                    WaferId : {selectInspectionList?.waferId}
                                </Typography>
                                <Typography variant="h6" >
                                    WaferNo: {selectInspectionList?.waferNo}
                                </Typography>
                                <Typography variant="h6" >
                                    LotID:{selectInspectionList?.lotId}
                                </Typography>
                                <Typography variant="h6" >
                                    LotNo:{selectInspectionList?.lotNo}
                                </Typography>
                            </>
                        }
                    </div>
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: 0 }}  >
                    <div style={{ border: '1px solid', height: "500px" }}>
                        Graph Section
                        <div>
                            <GraphHolder
                                order={defaultGraphOrder}
                                onBarChartClick={onBarChartClick}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default WaferDetail;
