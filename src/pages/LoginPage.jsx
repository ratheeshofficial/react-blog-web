import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const handleLogin = () => {
    if (!email.length && !password.length) {
      setEmailErrorText("Email is Required");
      setPasswordErrorText("Password is Required");
    } else if (email.length && !password.length) {
      setPasswordErrorText("Password is Required");
    } else if (!email.length && password.length) {
      setEmailErrorText("Email is Required");
    }
  };

  return (
    <Flex
      h="100vh"
      alignItems="center"
      flexDir="column"
      justifyContent="center"
    >
      <Box>
        <Heading fontSize={"3xl"}>Log in to your account</Heading>
        <Text>Welcome back! Please enter your details.</Text>
      </Box>
    </Flex>
  );
};

export default LoginPage;
