import React from "react";
import "../index.css";

export default function CategoryFilter() {
  return (
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
  );
}
