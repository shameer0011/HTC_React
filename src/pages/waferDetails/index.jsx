
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
import { addBreadcumbs, updateBreadcumbs } from '../../actions/breadcumbs/addbreadcumb';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { hideAndShowSidebar } from '../../actions/hideSidebar/hideSidebarAction';
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
    const hideAndShowSidebarIcon = useSelector(state => state.showAndHideSidebarIcon);

    const totalBreadcumb = useSelector(state => {
        return state.breadcumbReducer
    });


    useEffect(() => {
        setPageIndex(pageIndexes)
    }, [pageIndexes])

    useEffect(() => {
        dispatch(hideAndShowSidebar(true))
    }, [])

    const handleChange = (event, newValue) => {
        dispatch(updatePageIndex(newValue))
    };


    useEffect(() => {
        const breadcumb = { path: '/waferlist', label: 'WAFERLIST' }
        dispatch(addBreadcumbs(breadcumb))
    }, [])

    const WaferlistBreadcum = () => {
        const breadcumbForWaferDetail = { path: '/waferlist', label: 'WAFERLIST' }
        dispatch(addBreadcumbs(breadcumbForWaferDetail))
        dispatch(updateBreadcumbs(0))
    }
    const WafedetailBreadcum = () => {
        const breadcumbForWaferDetail = { path: '/waferdetail', label: '/WAFERDETAIL' }
        dispatch(addBreadcumbs(breadcumbForWaferDetail))
        dispatch(updateBreadcumbs(1))
    }
    const testdetailBreadcum = () => {
        const iWaferdetail = totalBreadcumb.map((item) => {
            if (item.path !== '/waferdetail') {
                const breadcumbForWaferDetail = {
                    path: '/waferdetail', label: '/WAFERDETAIL'
                }
                const breadcumbForWaferTest = {
                    path: '/testdetail', label: '/TESTDETAILS',
                }
                dispatch(addBreadcumbs(breadcumbForWaferDetail))
                dispatch(addBreadcumbs(breadcumbForWaferTest))
            } else {
                const breadcumbForWaferDetail = { path: '/testdetail', label: '/TESTDETAILS' }
                dispatch(addBreadcumbs(breadcumbForWaferDetail))
            }
        })
        dispatch(updateBreadcumbs(2))
    }
    const gotInspectionList = () => {
        history.push('/')
    }

    return (
        <div>
            <div style={{ display: "flex", alignContent: "center" }}>
                <IconButton onClick={gotInspectionList}>
                    <ArrowBackIcon />
                </IconButton>
                <Breadcums />
            </div>

            <Box sx={{ bgcolor: "background.paper" }}>
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
