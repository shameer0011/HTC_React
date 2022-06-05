import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './post/post';
import useStyle from './style';
const Posts = ({ currentId, setCurrentId }) => {
  console.log(setCurrentId, "current id")
  const { posts, isLoading } = useSelector((state) => state.data);
  console.log(posts, "in post component");
  const classes = useStyle();
  const dispatch = useDispatch();
  if (!posts?.length && !isLoading) return 'No posts';
  return <>
    {isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )}
  </>;
};

export default Posts;


