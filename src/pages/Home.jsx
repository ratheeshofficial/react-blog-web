import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Editor from "./TinyMceEditor";
import TinyMceEditor from "./TinyMceEditor";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [cat, setCat] = useState([]);
  console.log("cat", cat);
  const location = useLocation();
  const search = location.search;
  useEffect(() => {
    const fetchPost = async () => {
      await axios.get("/post" + search).then((res) => setPosts(res.data));
      await axios.get("/categories").then((res) => setCat(res.data));
    };
    fetchPost();
  }, [search]);
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box>
        {posts && posts.map((posts, i) => <Post posts={posts} key={i} />)}
      </Box>
      <Box>
        {cat &&
          cat.map((cat, i) => (
            <Link to={`/?cat=${cat.name}`}>
              <Text key={i}>{cat.name}</Text>
            </Link>
          ))}
      </Box>
      {/* <Box>
        <TinyMceEditor />
      </Box> */}
    </SimpleGrid>
  );
};

export default Home;
