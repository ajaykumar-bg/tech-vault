import React, { Component } from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import Posts from './Posts'

class Home extends Component {
  componentWillReceiveProps(nextProps) {
    if((this.props.isAuthenticated !== nextProps.isAuthenticated )&& nextProps.isAuthenticated === false) {
      this.props.history.push('/login');
    }
  }
  
  render() {
    return (
      <div className="white">
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <div className="container">
          <CategoryFilter></CategoryFilter>
          <Posts></Posts>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      isAuthenticated: state.AuthReducer.isAuthenticated
  }
}

export default connect(mapStateToProps, {})(Home)
