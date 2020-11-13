import { Box, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import { getUis } from "./lib/getUis";
import EmbeddableUi from "./components/EmbeddableUi";
import InfoContainer from "./components/InfoContainer";
import "./styles/plain.css";

const App = () => {
  return (
    <Flex alignItems="center" mt="200px" mb="200px">
      <Box w="75vw" margin="0 auto 0 auto">
        <Heading as="h1">Composer</Heading>
        <Divider marginBottom={20} />
        <SimpleGrid columns={2} spacing={20}>
          {getUis().map((ui) => (
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
