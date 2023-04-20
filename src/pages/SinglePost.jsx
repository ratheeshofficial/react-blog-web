import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SinglePost = () => {
  const [postData, setPostData] = useState();
  console.log("postData", postData);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get(`/post/${id}`).then((res) => setPostData(res.data));
    };
    fetchPosts();
  }, []);
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Single Post</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {postData && postData.title}
            </Heading>
            <Text pt="2" fontSize="sm">
              {postData && postData.desc}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Username
            </Heading>
            <Text pt="2" fontSize="sm">
              {postData && (
                <Link to={`/?user=${postData.username}`}>
                  {postData.username}
                </Link>
              )}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SinglePost;
