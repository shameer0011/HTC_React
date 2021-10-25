
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

    const pageIndexes = useSelector(state => state.pageReducer.index);



    useEffect(() => {
        setPageIndex(pageIndexes)
    }, [pageIndexes])

    const handleChange = (event, newValue) => {
        dispatch(updatePageIndex(newValue))
    };

    return (
        <div>
            WaferDetails pagess

            <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
                <AppBar position="static">

                    <Tabs
                        value={pageIndex}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >

                        <Tab label="Wafer List" {...a11yProps(0)} />
                        <Tab label="Wafer Detail" {...a11yProps(1)} />
                        <Tab label="Test Detail" {...a11yProps(2)} />

                    </Tabs>

                </AppBar>
                <TabPanel value={pageIndex} index={0} dir={theme.direction}>
                    <WaferList />
                </TabPanel>
                <TabPanel value={pageIndex} index={1} dir={theme.direction}>
                    <WaferDetail />
                </TabPanel>
                <TabPanel value={pageIndex} index={2} dir={theme.direction}>
                    <TestDetail />
                </TabPanel>
            </Box>
        </div>
    )
}
