import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import LoginPage from "./LoginPage";
const LoginContainer = () => {
  return (
    <>
      <Grid templateColumns="repeat(8, 1fr)">
        <GridItem
          colSpan={{ base: "none", md: "4", lg: "4" }}
          w="100%"
          h="100vh"
          backgroundImage=""
          bg="green"
        >
          asd
        </GridItem>
        <GridItem colSpan={{ base: "8", md: "4", lg: "4" }} h="100vh">
          <LoginPage />
        </GridItem>
      </Grid>
    </>
  );
};

export default LoginContainer;
