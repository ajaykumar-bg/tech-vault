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
      <div>
        {postItems}
    </div>
    )
  return (
    <div>
      {
        posts.length === 0 ? 
        emptyMessage :
        postList
      }
    </div>
  )
}

export default PostList