import React, { Component } from "react";
import { connect } from 'react-redux'

import PostList from "./PostList";
import { fetchPosts } from '../actions/PostAction'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
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
    posts: state.PostReducer
  }
}

const mapDispatchToProps = { fetchPosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
