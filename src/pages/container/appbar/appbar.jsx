import * as React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled, useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { updateWaferlistDatas, addWaferlistDatas } from '../../../actions/waferlist/addWaferlist'
import Drawers from '../drawer/drawer';
import { checkedInspectionListAction, uncheckedInspectionListAction } from '../../../actions/checkedInspectionListAction';
import { sidebarSelectInspectDatas, updateSidebarDataAction, updateSidebarValueAction } from '../../../actions/sidebar/selectInspectionAction';
import { removeWaferlistDatas, addOneWaferlistData } from '../../../actions/waferlist/addWaferlist'
import { updateTotalInspectionLists } from '../../../actions/inspectionListAction';
import DrawerContent from '../../drawerContent/drawerContent';
import { hideAndShowSidebar } from '../../../actions/hideSidebar/hideSidebarAction';

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
// checking total inspection list

export default function DenseAppBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();


  const dispatch = useDispatch();

  const totalLists = useSelector(state => state.totalInspectionList);

  const SidebarData = useSelector(state => state.totalSidebarData);

  const waferlistData = useSelector(state => state.totalWaferlists);

  const hideAndShowSidebarIcon = useSelector(state => state.showAndHideSidebarIcon);

  const [checked, setChecked] = useState();

  useEffect(() => {
    dispatch(hideAndShowSidebar(false))

  }, [])


  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  };



  const handleChange = (checkboxvalue, position) => {
    SidebarData.map((item, index) => {
      if (checkboxvalue.id == item.id) {
        item.checked == false ? item.checked = true : item.checked = false
        dispatch(sidebarSelectInspectDatas(item))

        if (item.checked == true) {
          waferlistData.map((val, index) => {
            if (val.id !== checkboxvalue.id) {
              dispatch(addWaferlistDatas(item))
            }
          })
        }

        if (item.checked == false) {
          dispatch(removeWaferlistDatas(checkboxvalue))
        }
      }
    })

  }



  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ border: "1px  black" }} showMenuIconButton={false} >
        <Toolbar variant="dense">
          {hideAndShowSidebarIcon.show_hide == true &&

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          }
          <Typography variant="h6" color="inherit" component="div">
            HTC
          </Typography>
        </Toolbar>
      </AppBar>

      {open === true ?

        // <Drawers
        //   handleDrawerClose={handleDrawerClose}
        //   openfield={open}
        //   handleChange={handleChange}
        //   checked={checked}
        //   totalCheckboxValues={totalLists}

        // />
        < DrawerContent
          handleDrawerClose={handleDrawerClose}
          openfield={open}
          handleChange={handleChange}
          checked={checked}
          totalCheckboxValues={totalLists}
        />
        : false}

    </Box>
  );
}