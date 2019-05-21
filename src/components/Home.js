import React, { Component } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import Posts from './Posts'

class Home extends Component {
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

export default Home
