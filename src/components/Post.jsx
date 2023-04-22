import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  console.log("posts", posts);
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        {posts.photo && (
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={posts.photo}
            alt="post image"
          />
        )}

        <Stack>
          <CardBody>
            <Heading size="md">{posts.title}</Heading>

            <Text py="2">{posts.desc}</Text>
            <Text py="2">{new Date(posts.createdAt).toDateString()}</Text>
          </CardBody>

          <CardFooter>
            <Link to={`/post/${posts._id}`}>
              <Button variant="solid" colorScheme="blue">
                View
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default Post;
