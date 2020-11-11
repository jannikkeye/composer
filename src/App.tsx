import { Box, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import EmbeddableUi from "./components/EmbeddableUi";
import config from "../data/config.json";
import InfoContainer from "./components/InfoContainer";

const App = () => {
  return (
    <Flex h="100vh" alignItems="center">
      <Box w="75vw" margin="0 auto 0 auto">
        <Heading as="h1">Composer</Heading>
        <Divider marginBottom={20} />
        <SimpleGrid columns={2} spacing={5}>
          {config.uis.map((ui) => (
            <InfoContainer key={ui.id} {...ui}>
              <EmbeddableUi uiDefinition={ui} />
            </InfoContainer>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default App;
