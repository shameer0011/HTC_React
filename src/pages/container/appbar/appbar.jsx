import * as React from 'react';
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled, useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { removeWaferlistDatas, addWaferlistDatas } from '../../../actions/waferlist/addWaferlist'
import Drawers from '../drawer/drawer';
import { checkedInspectionListAction, uncheckedInspectionListAction } from '../../../actions/checkedInspectionListAction';


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

  const [sideBarData, setSideBarData] = useState('');
  const dispatch = useDispatch();



  let sidebardata = useSelector(state => {
    return state.totalSidebarData;
  });

  let totalWaferlistData = useSelector(state => {
    return state.totalWaferlists;
  });


  useEffect(() => {
    setSideBarData(sidebardata)
  }, [sidebardata])



  const [checked, setChecked] = useState();

  useEffect(() => {
    setChecked(new Array(sideBarData.length).fill(true));
  }, [sidebardata.length, sidebardata])







  const handleDrawerOpen = () => {
    setOpen(true)

  }

  const handleDrawerClose = () => {
    setOpen(false)
  };

  const handleChange = (checkboxvalue, position) => {
    const updatedCheckedState = checked.map((item, index) => { // for update true or false
      return index === position ? !item : item
    })
    setChecked(updatedCheckedState)

    updatedCheckedState.map((value, index) => {

      if (value == false) {
        //remove waferlist
        dispatch(removeWaferlistDatas(checkboxvalue))
      }
      if (value == true) {
        sidebardata.map((item, index) => {
          totalWaferlistData.map((val, index) => {
            if (item.id !== val.id) {
              dispatch(addWaferlistDatas(item))
            }
          })
        })
      }


    })

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
          handleChange={handleChange}
          checked={checked}

        />
        : false}

    </Box>
  );
}