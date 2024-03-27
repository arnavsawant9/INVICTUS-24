import React from "react";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-title">{post.title}</div>
      <div className="post-content">{post.content}</div>
      <div className="post-author">{post.author}</div>
    </div>
  );
}

export default Post;