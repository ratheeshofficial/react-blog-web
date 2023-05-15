import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function JoinOurTeam() {
  const [userData, setUserData] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log("shoe");
    setShow(!show);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const getUsers = await axios.get("/user");
      setUserData(getUsers.data);
    };
    fetchUser();
  }, []);

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Senior web designers{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Full-Stack Developers
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  size={{ base: "md", md: "lg" }}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Register
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            })}
          >
            {({ handleChange, setFieldError, resetForm }) => (
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const values = {
                    username: e.target.username.value,
                    email: e.target.email.value,
                    password: e.target.password.value,
                  };

                  const userNames = userData
                    .map((un) => {
                      return un.username;
                    })
                    .includes(e.target.username.value);

                  const email = userData
                    .map((un) => {
                      return un.email;
                    })
                    .includes(e.target.email.value);

                  if (userNames) {
                    return setFieldError("username", "name already exist");
                  }
                  if (email) {
                    return setFieldError("email", "email already exist");
                  }

                  alert(JSON.stringify(values, null, 2));

                  await axios
                    .post("/auth/register", values)
                    .then((res) => console.log("res", res));

                  // resetForm({ values: "" });
                  // setDisabled(true);
                  // res && window.location.replace("/login");
                }}
              >
                <Stack spacing={4}>
                  <Field id="username" name="username">
                    {({ field, form }) => (
                      <FormControl isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input
                          {...field}
                          placeholder="Your good name"
                          bg={"gray.100"}
                          border={0}
                          color={"gray.500"}
                          _placeholder={{
                            color: "gray.500",
                          }}
                        />
                        <ErrorMessage name="username">
                          {(error) => (
                            <Text as="span" color="red">
                              {error}
                            </Text>
                          )}
                        </ErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field id="email" name="email">
                    {({ field, form }) => (
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...field}
                          placeholder="xyz@mail.com"
                          bg={"gray.100"}
                          border={0}
                          color={"gray.500"}
                          _placeholder={{
                            color: "gray.500",
                          }}
                        />
                        <ErrorMessage name="email">
                          {(error) => (
                            <Text as="span" color="red">
                              {error}
                            </Text>
                          )}
                        </ErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field id="password" name="password">
                    {({ field, form }) => (
                      <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            type={show ? "text" : "password"}
                            {...field}
                            placeholder="password"
                            bg={"gray.100"}
                            border={0}
                            color={"gray.500"}
                            _placeholder={{
                              color: "gray.500",
                            }}
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <ErrorMessage name="password">
                          {(error) => (
                            <Text as="span" color="red">
                              {error}
                            </Text>
                          )}
                        </ErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  {/* <Button fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
                Upload CV
              </Button> */}
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  type="submit"
                  isDisabled={disabled}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
