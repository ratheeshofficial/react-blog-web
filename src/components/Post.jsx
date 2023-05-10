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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const Post = ({ posts }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  // console.log("posts", posts);
  const handleDownload = (post) => {
    // setIsGenerating(true);
    console.log("postttt", post);
    const doc = new jsPDF();
    console.log("doc", doc);

    doc.text(`Name: ${post.title}`, 10, 10);
    doc.text(`Desc: ${post.desc}`, 10, 20);
    doc.text(`Username: ${post.username}`, 10, 30);
    console.log("doc", doc);
    doc.save("a4.pdf");
    // setIsGenerating(false);
  };
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
              <Button variant="solid" colorScheme="green">
                View
              </Button>
            </Link>
            <Button
              ml="2"
              variant="solid"
              colorScheme="blue"
              onClick={() => handleDownload(posts)}
            >
              {isGenerating ? "Generating PDf..." : "Download PDF"}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default Post;
