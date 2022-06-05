import { Paper, TextField, Typography, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './style.js';
import FileBase from 'react-file-base64'
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/getpost.js';
const Forms = ({ currentId }) => {
    console.log(currentId, "current id formsss")
    const [postData, setPostData] = useState({
        title: '',
        creator: '',
        message: '',
        tags: [],
        selectedFile: '',
    });
    console.log(postData);
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.data);
    console.log(posts, "state form 789");
    const updateData = posts.posts.find((id) => currentId ? id._id === currentId : null);
    // const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    console.log(updateData, "updated daraa")
    useEffect(() => {
        setPostData({
            title: updateData?.title,
            creator: updateData?.creator,
            message: updateData?.message,
            tags: updateData?.tag,
            selectedFile: updateData?.selectedFile,
        });
    }, [updateData])
    const handleChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (currentId === 0 || currentId === undefined || currentId === null) {
            console.log("create post");
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        } else {
            console.log(currentId, "update post 45");
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
    }
    const clear = () => {
        setPostData(
            {
                "title": "",
                "message": "",
                "createdAt": "",
                "selectedFile": "",
                "tags": [],
                "likeCount": "",
                "creator": ""

            })
    }
    if (!user) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories.
                </Typography>
            </Paper>
        );
    }

    return <div>

        <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <Typography variant="h6"  > create new form</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="creator"
                    fullWidth
                    value={postData.creator}
                    onChange={handleChange}

                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}

                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}

                />
                {/* <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    // value={postData.tags?.map((item) => `#${item} `)}
                    onChange={handleChange}
                /> */}
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                <div className={classes.fileInput}><FileBase type="file" multiple={false}
                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                />
                    {postData.selectedFile && <img src={postData.selectedFile} alt="img" />}
                </div>
                <Button type="submit" variant="contained" color="primary" className={classes.Buttonsubmit}  >Submit</Button>
                <Button type="submit" variant="contained" color="primary" className={classes.Buttonsubmit} onClick={clear}>Clear</Button>
            </form>
        </Paper>
    </div>;
};

export default Forms;
