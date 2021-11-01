import React, { useState, useEffect, useCallback } from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarSelectInspectDatas } from '../../../actions/sidebar/selectInspectionAction';
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




const Drawers = (props) => {
  const { openfield, handleDrawerClose, handleChange, checked } = props;
  const dispatch = useDispatch()
  const theme = useTheme();
  // for collapse and expand or unExpand
  const [clickedIndex, setClickedIndex] = useState({});
  const sidebarInspectionLists = useSelector(state => state.totalSidebarData);




  const showLabels = [
    { label: 'waferId', key: 'waferId' },
    { label: 'lotId', key: 'lotId' },
    { label: 'testId', key: 'testId' },
    { label: 'defectId', key: 'defectId' }

  ]

  const handleClose = (e) => {
    if (e.target.id) {
      setClickedIndex({})
    }
  };




  const getValue = (index, text, key) => {
    setClickedIndex(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key ....1: varumbol previous state il indenkil false aakkum..or true
    }));

  }


  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={openfield}


    >
      <DrawerHeader   >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />


      <div id="wrapper" onClick={handleClose} style={{ height: "100%" }}>
        <List   >
          {showLabels.map((text, index) => {
            return (
              <>
                <ListItem
                  button
                  onClick={() => getValue(index, text.label, text.key)}
                  key={text}>

                  <ListItemText
                    primary={text.label}
                  />

                  {clickedIndex[index] == true ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}

                </ListItem>
                <Divider />
                <Collapse
                  in={clickedIndex[index] == true}
                  timeout="auto"
                  unmountOnExit={true}
                >
                  <List id="menu" >

                    {sidebarInspectionLists.map((value, index) => {
                      return (
                        <>
                          <div style={{ display: "flex" }}>
                            <Checkbox
                              checked={checked[index]}
                              onChange={() => handleChange(value, index)}
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <ListItemText
                              primary={value[text.key]}
                            />
                          </div>
                        </>
                      )
                    }
                    )}
                  </List>
                </Collapse>
              </>
            )
          }
          )}
        </List>
      </div>
    </Drawer >
  )
}
export default Drawers;
