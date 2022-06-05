import React from 'react';

import Posts from '../../components/posts/posts';
import Form from '../../components/form/forms';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPostsBySearch } from '../../redux/actions/getpost';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/paginate'


import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import useStyles from './homeStyles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    console.log(currentId, "current id")
    const dispatch = useDispatch();
    const state = useSelector(state => state.data);
    const [pageRefresh, setPageRefresh] = useState('')

    //for searching code
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const history = useHistory();

    // useEffect(() => {
    //     dispatch(getPost())
    // }, [dispatch])

    useEffect(() => {
        setPageRefresh(state)
    }, [state])      // refresh page when new post is added

    const searchPost = () => {
        console.log(search, tags, "search tags")
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));


    return <>
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts currentId={currentId} setCurrentId={setCurrentId} totalPost={pageRefresh} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                onAdd={(chip) => handleAddChip(chip)}
                                onDelete={(chip) => handleDeleteChip(chip)}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>

                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <div>
                            <Pagination page={page} />
                        </div>
                    </Grid>
                </Grid>

            </Container>
        </Grow>
    </>;
};

export default Home;
