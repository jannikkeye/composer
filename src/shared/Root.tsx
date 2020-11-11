import React, { FC } from "react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme";

const Root: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <CSSReset /> */}
      {children}
    </ThemeProvider>
  );
};

export default Root;
