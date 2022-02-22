import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './post/post';
import useStyle from './style';
const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector(state => state.data);
  const classes = useStyle();
  const dispatch = useDispatch();


  return <>
    postssss
    {!posts?.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )}
  </>;
};

export default Posts;


