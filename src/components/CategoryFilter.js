import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../index.css";
import { sortPostFn } from '../actions/PostAction'

class CategoryFilter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sortBy: '',
      sortType: 'ASC',
    }
  }
  
  
  
  sortChange = (e) => {
    const sortType = this.refs.sortType.value;
    const sortKey = `title ${sortType}`;
    this.props.sortPostFn(sortKey);
  }

  render() {
    console.log(this.refs)
    return (
      <div>
      <form>
      <div className="mt-5">
        <h3>Technologies</h3>
        <div className="row">
          <div className="chip">Angular JS (10)</div>
          <div className="chip">React JS (2)</div>
          <div className="chip">JQuery (5)</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <select className="form-control">
            <option value="ALL">Showing All Items</option>
            <option value="STARRED">Starred Items</option>
            <option value="MOST_LIKED">Most Liked Items</option>
            <option value="MOST_VIEWED">Most Viewed Items</option>
            <option value="MOST_RECENT">Most Recent Items</option>
          </select>
        </div>
        <div className="col-4">
          <select className="form-control" ref="sortType" onChange={this.sortChange}>
            <option value="DESC">Sort Descending</option>
            <option value="ASC">Sort Ascending</option>
          </select>
        </div>

      </div>
      </form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sortKey: state.PostReducer.sortKey
  }
}

const mapDispatchToProps = { sortPostFn }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)

