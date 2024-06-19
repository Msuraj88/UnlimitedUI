// src/app/Components/ThemeProvider.js
"use client"; // Ensure this is a client component

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#f0f7ff",
          100: "#cce4ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#007fff",
          600: "#0066cc",
          700: "#004c99",
          800: "#003366",
          900: "#001a33",
        },
        neutral: {
          // Customize other palettes as needed
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#f0f7ff",
          100: "#cce4ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#007fff",
          600: "#0066cc",
          700: "#004c99",
          800: "#003366",
          900: "#001a33",
        },
        neutral: {
          // Customize other palettes as needed
        },
      },
    },
  },
});

const ThemeProvider = ({ children }) => {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
};

export default ThemeProvider;
