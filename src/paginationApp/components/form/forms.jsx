import { Paper, TextField, Typography, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './style.js';
import FileBase from 'react-file-base64'
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/getpost.js';
const Forms = ({ currentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        creator: '',
        message: '',
        tag: [],
        selectedFile: '',
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector(state => state.data);
    const updateData = state?.flat(1).find((id) => currentId ? id._id === currentId : null);
    useEffect(() => {
        setPostData({
            title: updateData?.title,
            creator: updateData?.creator,
            message: updateData?.message,
            tag: updateData?.tag,
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
        e.preventDefault()
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        }
        setPostData(
            {
                "title": "",
                "message": "",
                "createdAt": "",
                "selectedFile": "",
                "tag": [],
                "likeCount": "",
                "creator": ""

            })
        if (!currentId) {
            dispatch(createPost(postData))
        }
        setPostData(
            {
                "title": "",
                "message": "",
                "createdAt": "",
                "selectedFile": "",
                "tag": [],
                "likeCount": "",
                "creator": ""

            })
    }
    const clear = () => {
        setPostData(
            {
                "title": "",
                "message": "",
                "createdAt": "",
                "selectedFile": "",
                "tag": [],
                "likeCount": "",
                "creator": ""

            })
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
                <TextField
                    name="tag"
                    variant="outlined"
                    label="Tag"
                    fullWidth
                    value={postData.tags?.map((item) => `#${item} `)}
                    onChange={handleChange}

                />
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
