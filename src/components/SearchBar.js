import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/PostAction'

class SearchBar extends Component {
  
  searchPostList = (event: Event) => {
    let searchKey = ''
    event.preventDefault();
    searchKey = this.refs.search.value;
    this.props.fetchPosts(searchKey);
  }

  render() {
    return (
      <nav>
      <div className="nav-wrapper">
        <form onSubmit={this.searchPostList}>
          <div className="input-field">
            <input onChange={this.searchPostList}
              id="search"
              type="search"
              name="search"
              ref="search"
              placeholder="Search TechVault"
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
    )
  }
}

export default connect(null, {fetchPosts})(SearchBar)
