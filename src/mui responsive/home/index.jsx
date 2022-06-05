import React from 'react'
import Navbar from '../components/navbar/navbar';
import { Grid, Typography, container } from '@material-ui/core';
import Leftbar from '../components/leftbar/leftbar';
import Rightbar from '../components/rightbar/rightbar';
import Feed from '../components/feed/feed';
import { useStyles } from './styles';
import Add from '../components/add/add';
const Index = () => {
    const classes = useStyles();
    return (
        <>
            <div><Navbar /></div>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Leftbar />
                </Grid>

                <Grid item sm={7} xs={7}>
                    <Feed />
                </Grid>

                <Grid item sm={3} className={classes.rightbar} >
                    <Rightbar />
                </Grid>

            </Grid>
            <Add />
        </>
    )
}

export default Index;