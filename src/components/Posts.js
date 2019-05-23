import React, { Component } from "react";
import { connect } from 'react-redux'

import PostList from "./PostList";
import { fetchPosts } from '../actions/PostAction'

class Posts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      searchKey: '',
      sortKey: '',
      posts: []
    }
  }
  
  componentDidMount() {
    const {searchKey, sortKey} = this.state;
    this.props.fetchPosts(searchKey, sortKey);
  }

  componentWillReceiveProps(nextProps) {
    const {searchKey, sortKey} = this.props;
    if(nextProps.searchKey !== searchKey || nextProps.sortKey !== sortKey) {
      this.setState({
        searchKey: nextProps.searchKey,
        sortKey: nextProps.sortKey,
      });
      this.props.fetchPosts(nextProps.searchKey, nextProps.sortKey);
    }
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
