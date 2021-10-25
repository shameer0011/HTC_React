import React, { useState } from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import Checkbox from '@mui/material/Checkbox';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right"
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right"
//     }}
//     {...props}
//   />

// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 0,
//     marginTop: theme.spacing(0.5),
//     minWidth: 180,
//     color:
//       theme.palette.mode === "light"
//         ? "rgb(55, 65, 81)"
//         : theme.palette.grey[300],
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0"
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 10,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5)
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         )
//       }
//     }
//   }
// }));

const Drawers = (props) => {

  const { openfield, handleDrawerClose } = props;


  const theme = useTheme();
  const [detailids, setDetailIds] = useState('')

  const [clickedIndex, setClickedIndex] = useState({});



  const [checked, setChecked] = React.useState(true);

  const innerSelects = [
    { waferId: '102', lotId: '104', defectId: '125', testId: '1256' },
    { waferId: '105', lotId: '106', defectId: '105', testId: '156' }
  ]

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
    setDetailIds(key)
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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

                  {clickedIndex[index] === true ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}

                </ListItem>
                <Divider />
                <Collapse
                  in={clickedIndex[index]}
                  timeout="auto"
                  unmountOnExit={true}
                >
                  <List id="menu" >

                    {innerSelects.map((value, index) =>
                      <>
                        <div style={{ display: "flex" }}>
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <ListItemText
                            primary={value[detailids]}
                          />
                        </div>
                      </>
                    )}
                  </List>
                </Collapse>
              </>
            )
          }
          )}
        </List>

        {/* <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
      </StyledMenu> */}

      </div>
    </Drawer >
  )
}
export default Drawers;
