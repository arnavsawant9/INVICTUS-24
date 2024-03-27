import React from "react";
// import "./App.css";
import PostList from "./components/postlist/PostList.js";
import Navbar from "./components/navbar/Navbar.js";
// import Message from "./components/message/Message.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;
