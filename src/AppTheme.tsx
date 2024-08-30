import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource-variable/inter";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Inter Variable', sans-serif",
  },
  // 1. adjust the theme border radius to `8px`
});

export default function AppTheme({ children }: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
