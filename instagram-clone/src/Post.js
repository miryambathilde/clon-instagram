import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>

      {/* header -> avatar + username */}
      
      
      {/* image */}
      <img className="post_image" src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="/"></img>
      {/* username +  caption */}
      <h4 className="post_text"><strong>Patricia:</strong> Today I'm feeling so mindfullness...</h4>
    </div>
  );
}

export default Post;