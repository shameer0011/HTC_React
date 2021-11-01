
import React, { useEffect, useState } from 'react'
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from '../../components/tabPanel/tabpanel';
import WaferList from "./waferList";
import WaferDetail from "./waferDetail";
import TestDetail from "./testDetails";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updatePageIndex } from '../../actions/pageAction';
import Breadcums from '../../components/breadcums/breadcums';
import { useHistory } from 'react-router-dom'
import { addBreadcumbs } from '../../actions/breadcumbs/addbreadcumb';
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}


export default function WaferDetails() {

    const [pageIndex, setPageIndex] = useState(0)
    const theme = useTheme();
    const dispatch = useDispatch();
    const history = useHistory();
    const pageIndexes = useSelector(state => state.pageReducer.index);

    const totalBreadcumb = useSelector(state => {
        return state.breadcumbReducer
    });


    useEffect(() => {
        setPageIndex(pageIndexes)
    }, [pageIndexes])

    const handleChange = (event, newValue) => {
        dispatch(updatePageIndex(newValue))
    };


    useEffect(() => {
        const breadcumb = { path: '/waferlist', label: 'WAFERLIST' }
        dispatch(addBreadcumbs(breadcumb))
    }, [])

    const WaferlistBreadcum = () => {
    }
    const WafedetailBreadcum = () => {
        const breadcumbForWaferDetail = { path: '/waferdetailt', label: 'WAFERDETAIL' }
        dispatch(addBreadcumbs(breadcumbForWaferDetail))
    }
    const testdetailBreadcum = () => {
        totalBreadcumb.map((value, index) => {
            if (value.path == '/waferdetailt') {
                const breadcumbForWaferDetail = { path: '/testdetail', label: 'TESTDETAIL' }
                dispatch(addBreadcumbs(breadcumbForWaferDetail))
            } else {
                const breadcumbForWaferDetail = { path: '/waferdetailt', label: 'WAFERDETAIL' }
                const breadcumbTestDetail = { path: '/testdetail', label: 'TESTDETAIL' }
                dispatch(addBreadcumbs(breadcumbForWaferDetail))
                dispatch(addBreadcumbs(breadcumbTestDetail))
            }
        })
    }

    return (
        <div>
            <Breadcums />

            <Box sx={{ bgcolor: "background.paper", width: "381%" }}>
                <AppBar position="static">

                    <Tabs
                        value={pageIndex}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >

                        <Tab label="Wafer List" {...a11yProps(0)} onClick={WaferlistBreadcum} />
                        <Tab label="Wafer Detail" {...a11yProps(1)} onClick={WafedetailBreadcum} />
                        <Tab label="Test Detail" {...a11yProps(2)} onClick={testdetailBreadcum} />

                    </Tabs>

                </AppBar>
                <TabPanel value={pageIndex} index={0} dir={theme.direction} >
                    <WaferList />
                </TabPanel>
                <TabPanel value={pageIndex} index={1} dir={theme.direction} >
                    <WaferDetail />
                </TabPanel>
                <TabPanel value={pageIndex} index={2} dir={theme.direction}>
                    <TestDetail />
                </TabPanel>
            </Box>
        </div>
    )
}
