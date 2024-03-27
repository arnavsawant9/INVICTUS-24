import React, { useState } from "react";
import "./PostList.css";
import Post from "../../Post";
import LinkedInPost from "./LinkedInPost";

function PostList() {
  // State variables to manage input content, posted content, and selected post
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Got Internship",
      content:"I am feeling grateful to tell that i recently got an intership in barclays with the help of internconnect",
      author: "Pranav Titambe",
    },
    {
      id: 2,
      title: "Got my 2nd Internship",
      content: "I got my second internship in one of the FAANG companies with the help of InternConnect.",
      author: "Pranav Pol",
    },
  ]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to handle posting new content
  const postContentHandler = () => {
    if (newPostContent.trim() !== "") {
      // creates a new post object
      const newPost = {
        id: posts.length + 1, // Assuming the ids of different-different users
        title: `Post ${posts.length + 1}`,
        content: newPostContent,
        author: `User ${posts.length + 1}`, // replace this with the actual user info
      };

      // Updates state with the new post making it +1 everytime
      setPosts((prevPosts) => [...prevPosts, newPost]);

      // clearing everything to write new content
      setNewPostContent("");
    }
  };

 
  const selectPostHandler = (postId) => {
   
    const selected = posts.find((post) => post.id === postId);

    
    setSelectedPost(selected);
  };

  const deletePostHandler = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

   
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(null);
    }
    //  setPosts((prevPosts) => prevPosts.filter((post) => post.id > postId));
    if (newPostContent.trim() !== "") {
      // creates a new post object
      const newPost = {
        id: posts.length - 1, // Assuming the ids of different-different users
        title: `Post ${posts.length - 1}`,
        content: newPostContent,
        author: `User ${posts.length - 1}`, // replace this with the actual user info
      };
    }
  };

  return (
    <div className="post-list flex flex-col items-center p-8">
      <LinkedInPost />
      <div className="post-form flex flex-col items-center mb-8 border border-solid border-gray-300 p-4 rounded-md">
        <textarea 
          placeholder="Write your post here..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button onClick={postContentHandler}>Post</button>
      </div>
      <div className="post-container flex flex-col items-center w-full max-w-screen-md">
        {posts.map((post) => (
          <div key={post.id} className="post-item relative flex flex-col items-center mb-8 border border-solid border-gray-300 p-4 rounded-md w-full">
            <Post post={post} onClick={() => selectPostHandler(post.id)} />
            <button className="delete-button" onClick={() => deletePostHandler(post.id)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="selected-post">
          <h2>Selected Post</h2>
          <Post post={selectedPost} />
        </div>
      )}
    </div>
  );
}

export default PostList;
