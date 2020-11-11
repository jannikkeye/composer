import { Box, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import EmbeddableUi from "./components/EmbeddableUi";
import config from "../data/config.json";
import InfoContainer from "./components/InfoContainer";

const App = () => {
  const mappedUis = config.uis.map((ui) => {
    if (process.env.NODE_ENV === "production") {
      return {
        ...ui,
        js: ui.js
          .replace("http:", window.location.protocol)
          .replace("localhost", window.location.hostname)
          .replace(":3000", ""),
        css: ui.css
          ? ui.css
              .replace("http:", window.location.protocol)
              .replace("localhost", window.location.hostname)
              .replace(":3000", "")
          : ui.css,
      };
    }

    return ui;
  });

  return (
    <Flex h="100vh" alignItems="center">
      <Box w="75vw" margin="0 auto 0 auto">
        <Heading as="h1">Composer</Heading>
        <Divider marginBottom={20} />
        <SimpleGrid columns={2} spacing={5}>
          {mappedUis.map((ui) => (
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
