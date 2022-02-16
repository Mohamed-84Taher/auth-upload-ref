import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  // Function get all posts
  const fetchData = async () => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.get("/api/posts", config);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {posts.map(post => (
        <div>
          <h2>{post.userId.name}</h2>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
