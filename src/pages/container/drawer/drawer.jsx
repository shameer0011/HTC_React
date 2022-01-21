import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
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
import SelectLabels from '../../../components/selectbox/selectbox';
import { graphOrder } from '../../../actions/drawerAsc/Desc/graphDrawer';
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

  const { openfield, handleDrawerClose, handleChange } = props;

  const dispatch = useDispatch()
  const theme = useTheme();
  const defaultGraphOrder = useSelector((state) => state.graphOrderReducer);
  console.log(defaultGraphOrder, "from new stores")

  // console.log(ageState, "from selectbox")
  // for collapse and expand or unExpand
  const [clickedIndex, setClickedIndex] = useState({});
  console.log(clickedIndex, "state")

  const [checkedValues, setCheckedValues] = useState([]);
  const SidebarData = useSelector(state => state.totalSidebarData);
  // console.log(SidebarData, "in app bar")

  // useEffect(() => {
  //   //1......
  //   const checkedItems = totalCheckboxValues.filter((item, index) => item.isChecked == true);
  //   // console.log(checkedItems)
  //   setCheckedValues(checkedItems)
  //   //to store this value.
  //   dispatch(sidebarSelectInspectDatas(checkedItems))
  // }, [totalCheckboxValues])
  // graphOrder('ascending')


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
  // useEffect(() => {
  //   dispatch(graphOrder('ascending'))
  // }, [])

  const getValue = (index) => {
    setClickedIndex(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key ....1: varumbol previous state il indenkil false aakkum..or true  ,state[5]=undefined,so !state[5]=true
    }));

  }

  const handleChanges = useCallback((value, age) => {
    console.log(value, age, "159")
    dispatch(graphOrder(value))
  }, [handleChange])


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


      <div id="wrapper" onClick={handleClose} >
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

                    {SidebarData.map((value, index) => {
                      return (
                        <>
                          <div style={{ display: "flex" }}>
                            <Checkbox
                              // checked={checked[index]}
                              checked={value.checked}
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
        <Divider />
        <div style={{}}>
          <SelectLabels
            handleChange={handleChanges}
            stateValue={defaultGraphOrder}
            label1="ascending"
            label2="descending"

          />
        </div>
      </div>
    </Drawer >
  )
}
export default Drawers;
