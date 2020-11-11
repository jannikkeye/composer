import React from "react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import App from "./App";

const Root = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <App></App>
    </ThemeProvider>
  );
};

export default Root;
