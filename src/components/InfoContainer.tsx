import { Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/core";
import React, { FC, memo, ReactNode } from "react";

const UiInfoContainer: FC<{
  id: string;
  tag: string;
  js: string;
  css?: string;
  children: ReactNode;
}> = ({ id, tag, js, css, children }) => {
  return (
    <Box>
      <Heading as="h6" mb="24px" fontSize="18px">
        {tag}
      </Heading>
      <Box>
        <SimpleGrid columns={2} spacing="20px">
          <Text className="title">
            <b>id: </b>
            {id}
          </Text>
          <Text>
            <b>tag: </b>
            {tag}
          </Text>
          <Text>
            <b>js: </b>
            {js}
          </Text>
          <Text>
            <b>css: </b>
            {css || "bundled"}
          </Text>
        </SimpleGrid>
      </Box>
      <Divider mt="20px" mb="20px" />
      <Box>{children}</Box>
    </Box>
  );
};

export default memo(UiInfoContainer);
