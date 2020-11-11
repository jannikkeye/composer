import { Alert, AlertTitle, Flex, Spinner } from "@chakra-ui/core";
import React, { FC, memo, useRef, useMemo } from "react";
import { useStaticAssets } from "../hooks/useStaticAssets";

const EmbeddableUi: FC<Readonly<{
  uiDefinition: {
    id: string;
    tag: string;
    js: string;
    css?: string;
  };
}>> = ({ uiDefinition }) => {
  const targetRef = useRef<HTMLElement>();
  const { loading, error } = useStaticAssets({
    js: uiDefinition.js,
    css: uiDefinition.css,
  });

  const content = useMemo(
    () => (
      <>
        {loading && (
          <>
            <Spinner size="lg" />
          </>
        )}
        {!loading && error && (
          <div>
            <Alert>
              <AlertTitle>Failed to load ${uiDefinition.id}</AlertTitle>
            </Alert>
          </div>
        )}
        {!loading &&
          !error &&
          React.createElement(uiDefinition.tag, {
            ref: targetRef,
          })}
      </>
    ),
    [error, loading, uiDefinition]
  );

  return (
    <Flex
      bg="#fafafa"
      border="2px dashed #aaaaaa"
      padding={4}
      justifyContent="center"
      alignItems="center"
    >
      {content}
    </Flex>
  );
};

export default memo(EmbeddableUi);
