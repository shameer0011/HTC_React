import React, { useEffect, useState } from 'react'
import Posts from '../posts/index';
import { useStyles } from './homeStyle';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';
import {
    createPostStart,
    updatePostStart,
    getPostByIdStart,
    deletePostStart,
    searchPostStart,
    likePostStart
} from '../../redux/actions/post/post';
import { useDispatch, useSelector } from 'react-redux';
import Forms from '../../components/post form/postForm';
import { useLocation, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Paginate from '../pagination/pagination';
import { Button, TextField } from '@mui/material';
import ChipInput from 'material-ui-chip-input';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {
    const classes = useStyles()
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    //for pagination
    const query = useQuery();
    const page = query.get('page') || 1;

    const [currentId, setCurrentId] = useState(0);

    const { post } = useSelector((state) => state.post)  //yes ====> fetch all postsss
    // const { numberOfPages } = useSelector((state) => state.post)
    // const { currentPage } = useSelector((state) => state.post)
    // const { authData } = useSelector(state => state.user); when refresh page data lost
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([]);
    const [authData, setAuthData] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setAuthData(JSON.parse(localStorage.getItem('profile')));
    }, [])
    const clear = (setPostData) => {
        setPostData(
            {
                "title": "",
                "message": "",
                "selectedFile": "",
                "tags": [],
                "likeCount": "",
                "creator": ""
            })
    }
    const onSubmit = (data, e) => {
        e.preventDefault();
        if (currentId === 0 || currentId === undefined || currentId === null) {
            dispatch(createPostStart(data))
            toast.success('User created successfully')
            clear()
        }
        else {
            dispatch(updatePostStart(currentId, data));
            toast.success('User updated successfully')
            clear();
        }
    }

    const hadleClick = (id) => {
        setCurrentId(id);
        dispatch(getPostByIdStart(id))

    }
    const deletePost = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deletePostStart(id))
            toast.success('User deleted successfully')
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };
    const handleAddChip = (chip) => {
        console.log(chip)
        setTags((prevState) => [...prevState, chip]);
    }
    const handleDeleteChip = (chip) => {
        setTags((prevState) => prevState.filter((tag) => tag !== chip));
    }
    const searchPost = (e) => {
        if (search.trim() || tags) {
            e.preventDefault();
            dispatch(searchPostStart({ search, tags: tags.join(',') }))
        }
        // history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    }
    const likePost = (id) => {
        dispatch(likePostStart(id))
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2} >
                <Grid
                    container
                    item xs={6}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    style={{
                        border: "1px solid"
                    }}
                >
                    {post.map((post) => <Posts
                        post={post}
                        setCurrentId={setCurrentId}
                        hadleClick={hadleClick}
                        deletePost={deletePost}
                        authData={authData}
                        likePost={likePost}
                    />)}

                </Grid>
                <Grid item xs={6} style={{ border: "1px solid" }}>
                    <TextField style={{ width: "50%" }} onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                    <ChipInput
                        style={{ margin: '10px 0' }}
                        value={tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                        label="Search Tags"
                        variant="outlined"
                    />
                    <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                    <Forms
                        currentId={currentId}
                        onSubmit={onSubmit}
                        clear={clear}
                    />
                </Grid>
                <Paginate page={page} />
            </Grid>

        </div>
    )
}
export default Home
