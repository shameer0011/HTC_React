import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Container from '../container/index'
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { selectInspectionList } from '../../actions/selectInspectionListAction';
import { updatePageIndex } from '../../actions/pageAction';

const useStyles = makeStyles({
    root: {

        display: "flex",
        width: "200px",
        height: "200px",
        backgroundColor: "green",
        borderRadius: "50%",
        // marginTop: "50px",
        display: "flex",
        justifyContent: 'center',
        cursor: "pointer"
    },
    text: {
        margin: "auto"
    },
    paper: {
        MaxHeight: "1000px",
        MaxWidth: "1000px",
        display: "flex",
        justifyContent: 'center'

    }
});


const WaferList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [inspectionStoreList, setInspectionStoreList] = useState([]);
    const [selectedInspectionList, setSelectedInspectionList] = useState([]);
    // const storeLists = useSelector(state => state.inspectionListToStore);
    const state = useSelector(state => state.totalWaferlists);


    // useEffect(() => {
    //     setInspectionStoreList(storeLists)
    // }, [storeLists])

    useEffect(() => {
        setSelectedInspectionList(state)
    }, [state])
    const waferClick = (values) => {
        dispatch((selectInspectionList(values)))
        dispatch(updatePageIndex(1))
    }

    return (
        <Grid container spacing={24}>
            {selectedInspectionList.map((list) => {
                return (
                    <>
                        <Grid item xs={4}  >
                            <div className={classes.root} onClick={() => waferClick(list)} >
                            </div>
                            <Typography variant="h6" style={{ margin: "auto" }}>
                                WaferId : {list.waferId}
                            </Typography>
                            <Typography variant="h6" >
                                WaferNo: {list.waferNo}
                            </Typography>
                            <Typography variant="h6" >
                                LotID:{list.lotId}
                            </Typography>
                            <Typography variant="h6" >
                                LotNo:{list.lotNo}
                            </Typography>
                        </Grid>


                    </>
                )
            })}


        </Grid>

    )
}
export default WaferList;
