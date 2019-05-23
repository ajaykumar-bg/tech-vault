import React, { Component } from "react";
import { connect } from 'react-redux'

import PostList from "./PostList";
import { fetchPosts } from '../actions/PostAction'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    // this.props.fetchPosts();
  }
  
  
  render() {
    return (
      <div className="row mt-5">
        <PostList posts= {this.props.posts} ></PostList>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    posts: state.PostReducer.postList,
    searchKey: state.PostReducer.searchKey,
    sortKey: state.PostReducer.sortKey
  }
}

const mapDispatchToProps = { fetchPosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
