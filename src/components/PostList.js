import React from 'react'

import PostItem from './PostItem'

function PostList({posts}) {
    const emptyMessage = (
        <p>There are no posts yet in your collection</p>
    );
    const postItems = posts.map((post ,index) => {
      return (
        <PostItem key={post.id} post={post}/>
      );
    })
    const postList = (
      <React.Fragment>
        {postItems}
    </React.Fragment>
    )
  return (
    <React.Fragment>
      {
        posts.length === 0 ? 
        emptyMessage :
        postList
      }
    </React.Fragment>
  )
}

export default PostList