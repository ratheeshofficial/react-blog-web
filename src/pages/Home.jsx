import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      await axios.get("/post").then((res) => setPosts(res.data));
    };
    fetchPost();
  }, []);
  return (
    <>{posts && posts.map((posts, i) => <Post posts={posts} key={i} />)}</>
  );
};

export default Home;
