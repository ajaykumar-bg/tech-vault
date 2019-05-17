import React from 'react'
import '../PostStyle.css'

export default function PostItem() {
  return (
    <div className="col-md-4">
    <div className="">
						<div className="post">
							<a className="post-img" href="blog-post.html">
              <img src="https://colorlib.com/preview/theme/webmag/img/post-4.jpg" alt=""/></a>
							<div className="post-body">
								<div className="post-meta">
                  <span className="badge badge-primary text-white">Primary</span>
									<span className="post-date">March 27, 2018</span>
								</div>
								<h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
							</div>
						</div>
					</div>
    </div>
    
  )
}
