import React from "react";
import moment from 'moment';
import "../PostStyle.css";

function PostItem({post}) {
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
            <span className="badge bg-darkblue text-white">{post.categoryType}</span>
            <span className="post-date">{fromNow(post.postedOn)}</span>
          </div>

          <div className="post-meta row">
            <div className="col-2 col-md-3"><span className="fa fa-heart"></span> 5</div>
            <div className="col-2 col-md-3"><span className="fa fa-eye"></span> 32</div>
            <div className="col-6 col-md-3"></div>
            <div className="col-2 col-md-3"><span className="fa fa-star text-gold"></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
