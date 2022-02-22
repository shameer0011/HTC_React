import React from 'react';
import { Container, Grid, Grow, Typography } from '@mui/material';

import Posts from '../../components/posts/posts';
import Form from '../../components/form/forms';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/actions/getpost';
import { useEffect, useState } from 'react'
const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();
    const state = useSelector(state => state.data);
    const [pageRefresh, setPageRefresh] = useState('')

    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])

    useEffect(() => {
        setPageRefresh(state)
    }, [state]) // refresh page when new post is added
    return <>
        <Grow in>
            <Container>
                <Grid container spacing={3} justify="space-between" alignItems="stretch">
                    <Grid container item xs={6} >
                        <Posts currentId={currentId} setCurrentId={setCurrentId} totalPost={pageRefresh} />
                    </Grid>
                    <Grid container item xs={6} >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>

            </Container>
        </Grow>
    </>;
};

export default Home;
