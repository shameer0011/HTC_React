import React, { useState, useEffect } from 'react'
import Container from '../container/index';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
});

const WaferDetail = () => {
    const classes = useStyles();
    const [selectInspectionList, setSelectInspectionList] = useState({});
    const dispatch = useDispatch();
    const storeLists = useSelector(state => state.selectInspectionListToStore);

    useEffect(() => {
        setSelectInspectionList(storeLists)
    }, [storeLists])

    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={6}  >
                    {selectInspectionList &&
                        <div className={classes.root} >
                        </div>
                    }
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
                </Grid>




            </Grid>

        </div>
    )
}
export default WaferDetail;
