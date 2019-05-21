import React from "react";
import "../index.css";

export default function CategoryFilter() {
  return (
    <div>
      <div className="mt-5">
        <h3>Technologies</h3>
        <div className="row">
          <div className="chip">Angular JS (25)</div>
          <div className="chip">React JS (25)</div>
          <div className="chip">JQuery (25)</div>
          {/* <span className="badge badge-pill badge-danger text-white">Angular JS</span>
              <span className="badge badge-pill badge-primary text-white">React JS</span>
              <span className="badge badge-pill badge-success text-white">JQuery</span> */}
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
            <option value="desc">Sort Descending</option>
            <option value="asc">Sort Ascending</option>
          </select>
        </div>

      </div>
    </div>
  );
}
