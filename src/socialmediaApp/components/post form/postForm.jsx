import { Paper, TextField, Typography, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './style.js';
import FileBase from 'react-file-base64'
import { useSelector, useDispatch } from 'react-redux';
import { updatePostStart } from '../../redux/actions/post/post.js';
const Forms = (props) => {
    const { currentId, onSubmit, clear } = props;
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: [],
        selectedFile: '',
    });
    // const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const { update } = useSelector((state) => state.post)
    console.log(update, "state form 789");


    useEffect(() => {
        if (!currentId == 0) {
            setPostData({
                title: update?.title,
                message: update?.message,
                tags: update?.tags,
                selectedFile: update?.selectedFile,
            })
        }
    }, [currentId, update]);
    const handleChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        });
    }

    // const clear = () => {
    //     setPostData(
    //         {
    //             "title": "",
    //             "message": "",
    //             "selectedFile": "",
    //             "tags": [],
    //             "likeCount": "",
    //             "creator": ""
    //         })
    // }
    return <div>

        <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => onSubmit(postData, e)}>
                <Typography variant="h6"  > create new form</Typography>

                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title || ''}
                    onChange={handleChange}

                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message || ''}
                    onChange={handleChange}

                />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

                <div className={classes.fileInput}><FileBase type="file" multiple={false}
                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                />
                    {postData.selectedFile && <img src={postData.selectedFile} alt="img" />}
                </div>
                <Button type="submit" variant="contained" color="primary" className={classes.Buttonsubmit}  >Submit</Button>
            </form>
            <Button type="submit" variant="contained" color="primary" className={classes.Buttonsubmit} onClick={() => clear(setPostData)}>Clear</Button>
        </Paper>
    </div>;
};

export default Forms;
