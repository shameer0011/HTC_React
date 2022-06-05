import React from 'react'
import Post from '../../components/posts/post/post'

const Posts = (props) => {

    const { post, setCurrentId, hadleClick, deletePost, authData, likePost } = props
    return (
        <>
            <Post
                post={post}
                setCurrentId={setCurrentId}
                hadleClick={hadleClick}
                deletePost={deletePost}
                authData={authData}
                likePost={likePost}

            />
        </>
    )
}

export default Posts