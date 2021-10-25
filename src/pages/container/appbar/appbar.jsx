import * as React from 'react';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { styled, useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawers from '../drawer/drawer';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function DenseAppBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [lists, setLists] = useState('')
  const inspectionStoreList = [];
  useSelector(state => inspectionStoreList.push(state.inspectionListToStore));
  // const storeList =  useSelector(state => state.inspectionListToStore);

  useEffect(() => {
    inspectionStoreList.map((i) => setLists(i));
  }, [inspectionStoreList])



  const handleDrawerOpen = () => {
    console.log("opennnnn")
    setOpen(true)
  }

  const handleDrawerClose = () => {
    console.log("closeee")
    setOpen(false)
  };



  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ border: "1px  black" }}  >
        <Toolbar variant="dense">

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            HTC
          </Typography>
        </Toolbar>
      </AppBar>

      {open === true ?

        <Drawers
          handleDrawerClose={handleDrawerClose}
          openfield={open}

        />
        : false}

    </Box>
  );
}