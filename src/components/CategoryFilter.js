import React from "react";
import "../index.css";

export default function CategoryFilter() {
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
            <option value="all">Showing All Items</option>
            <option value="starred">Starred Items</option>
            <option value="most-liked">Most Liked Items</option>
            <option value="most-viewed">Most Viewed Items</option>
            <option value="most-recent">Most Recent Items</option>
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
