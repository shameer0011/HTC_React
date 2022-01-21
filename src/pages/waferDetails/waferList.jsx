import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Container from '../container/index'
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Typography, Divider } from '@mui/material';
import { selectInspectionList } from '../../actions/selectInspectionListAction';
import { updatePageIndex } from '../../actions/pageAction';
import { addWaferlistDatas } from '../../actions/waferlist/addWaferlist';
import SelectLabels from '../../components/selectbox/selectbox';
import { changeLabel, changeOrder } from '../../actions/sortWaferlist/sortWaferlistAction';
import { sortFunction } from './../helper/helper';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Button } from '@material-ui/core';
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
        alignItems: "center",
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
    const waferlists = useSelector(state => state.totalWaferlists);
    const sortWaferlist = useSelector((state) => state.sortWaferListReducer && state.sortWaferListReducer)
    const [sortWaferlistDisplay, setsortWaferlistDisplay] = useState('');
    const [activeIndex, setActiveIndex] = useState({ index: 0 });
    const [storedBox, setStoredBox] = useState({});
    console.log(storedBox, "stored box")
    const [waferSelected, setWaferSelected] = useState([])
    console.log(waferSelected, "in wafer selectede")
    const rowCount = sortWaferlistDisplay.length;
    let v = [5]
    const labeles = {
        "waferId": 'waferId',
        "lotId": 'lotId'
    }
    useEffect(() => {
        const sorted = sortFunction(waferlists, sortWaferlist.order, labeles[sortWaferlist.label])
        setsortWaferlistDisplay([...sorted])

    }, [])

    const waferClick = (values) => {
        dispatch((selectInspectionList(values)))
        dispatch(updatePageIndex(1))
    }


    const handleChanges = useCallback((value, params) => {
        if (params === 'order') {
            dispatch(changeOrder(value))
            const sorted = sortFunction(waferlists, sortWaferlist.order, labeles[sortWaferlist.label])
            setsortWaferlistDisplay([...sorted])
        }
        else if (params === 'labels') {
            dispatch(changeLabel(value))
            if (value === labeles[sortWaferlist.label]) {
                const sorted = sortFunction(waferlists, sortWaferlist.order, labeles[sortWaferlist.label])
                setsortWaferlistDisplay([...sorted])
            }
        }
    }, [dispatch, labeles, waferlists, sortWaferlist])

    const handleChange = useCallback((key) => {
        if (key === 'forward') {
            setActiveIndex(prevState => {
                return { index: prevState.index + 1 }
            })
        }
        if (key === 'backword') {
            setActiveIndex(prevState => {
                return { index: prevState.index - 1 }
            })
        }
    }, [])
    const excludeFunction = (e) => {

        //for remove duplicates array of objects
        const ids = waferSelected.map(o => o.id)
        const filtered = waferSelected.filter(({ id }, index) => !ids.includes(id, index + 1))
        // for keys
        const keys = Object.keys(storedBox);
        console.log(keys)
        var filteredTrueValues = keys.filter(function (key) {
            return storedBox[key]
        });
        var convertToNumber = filteredTrueValues.map(function (v) {
            return parseInt(v, 10);
        });
        let removeUserSelectedItems = filtered.filter(ai => convertToNumber.includes(ai.id));
        const results = sortWaferlistDisplay.filter(({ id: id1 }) => !removeUserSelectedItems.some(({ id: id2 }) => id2 === id1));
        setsortWaferlistDisplay([...results])
    }

    const waferDivClick = (items) => {
        setStoredBox((state) => {
            return {
                ...state,
                [items.id]: !state[items.id]
            }
        })
        setWaferSelected([...waferSelected, { ...items }])
    }



    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <div style={{ display: "flex" }}>
                    <SelectLabels
                        handleChange={(value) => handleChanges(value, 'order')}
                        label1="ascending"
                        label2="descending"
                        stateValue={sortWaferlist.order}
                    />
                    <SelectLabels
                        handleChange={(value) => handleChanges(value, 'labels')}
                        label1="waferId"
                        label2="lotId"
                        stateValue={sortWaferlist.label}
                    />
                </div>

                <div style={{ display: "flex" }}>
                    <IconButton disabled={activeIndex.index == 0} onClick={() => handleChange("backword")}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    {sortWaferlistDisplay.length && sortWaferlistDisplay.map((item, key) => {
                        // console.log(key, activeIndex.index);
                        // console.log(key == activeIndex, "true /false")
                        // console.log(activeIndex.index, "activeIndex")
                        const className = key == activeIndex.index ? "green" : "";
                        return (
                            <>
                                <Box
                                    style={{ backgroundColor: className }}
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        border: "1px solid",
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        },

                                    }}
                                >
                                    {item.waferId}
                                </Box>
                            </>
                        )
                    })}

                    <IconButton disabled={sortWaferlistDisplay.length - 1 == activeIndex.index} onClick={() => handleChange("forward")}>
                        <ArrowForwardIosIcon />
                    </IconButton>

                </div>
                <Button variant="contained" color="primary" size="medium" onClick={excludeFunction}>EXCLUDE</Button>
            </div>

            <Grid container spacing={24}>
                {sortWaferlistDisplay.length && sortWaferlistDisplay.map((list) => {
                    const className = storedBox[list.id] == true ? 'blue' : ''
                    return (
                        <>
                            {list.waferId &&
                                <Grid item xs={4}  >
                                    <div style={{ border: '1px solid' }}>
                                        <div style={{ backgroundColor: className }} onClick={(e) => waferDivClick(list)}>
                                            <div className={classes.root}  >
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
                                        </div>

                                    </div>
                                </Grid>
                            }
                        </>
                    )
                })}


            </Grid >
        </div >

    )
}
export default WaferList;
