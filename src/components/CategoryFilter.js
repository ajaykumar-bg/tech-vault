import React from "react";
import "../index.css";

function CategoryFilter() {
  return (
    <div>
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
          <select className="form-control">
            <option value="DESC">Sort Descending</option>
            <option value="ASC">Sort Ascending</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default CategoryFilter;