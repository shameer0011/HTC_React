import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@material-ui/core';
import { theme } from './theme';


const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  sideAppBar: {
    borderLeft: `60px solid ${theme.palette.primary.nice}`,
    height: "calc( 100vh - 48px)"
  },
});

function SimpleAppBar() {

  const classes = useStyles();

  const usetheme = useTheme();

  return (
    <div className={classes.root}>

      <div className={classes.sideAppBar}> </div>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleAppBar;
