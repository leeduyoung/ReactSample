import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";

const baseTheme = {
  palette,
  typography
};

const theme = createMuiTheme(baseTheme);

const Material = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Material;
