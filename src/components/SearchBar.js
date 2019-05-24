import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchPostFn } from '../actions/PostAction'

class SearchBar extends Component {
  
  searchPostList = (event: Event) => {
    event.preventDefault();
    const searchKey = this.refs.search.value;
    this.props.searchPostFn(searchKey);
  }

  clearSearch = () => {
    const searchKey = this.refs.search.value = '';
    this.props.searchPostFn(searchKey);
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
            <i className="material-icons" onClick={this.clearSearch}>close</i>
          </div>
        </form>
      </div>
    </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchKey: state.PostReducer.searchKey
  }
}

export default connect(mapStateToProps, {searchPostFn})(SearchBar)
