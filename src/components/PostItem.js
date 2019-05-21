import React from "react";
import moment from 'moment';
import "../PostStyle.css";

export default function PostItem({post}) {
  function fromNow (date) {
    return moment(date).fromNow();
  }
  return (
    <div className="col-md-4">
      <div className="post">
        <a className="post-img" href={post.attachment}>
          <img
            src={post.image}
            alt="postImage"
          />
        </a>
        <div className="post-body">
          <h3 className="post-title">
            <a href={post.attachment}>
              {post.title}
            </a>
          </h3>
          {/* <div className="doc-title-3">
          {post.description}
          </div> */}
          <div className="post-meta">
            <span>
              <b>Reading Time: </b>{post.readingTime}
            </span>
          </div>
          <div className="post-meta">
            <span className="badge badge-primary text-white">{post.categoryType}</span>
            <span className="post-date">{fromNow(post.postedOn)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
