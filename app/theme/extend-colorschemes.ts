import { type CssVarsThemeOptions } from "@mui/material";

export const color_schemes: CssVarsThemeOptions["colorSchemes"] = {
  light: {
    palette: {
      primary: {
        main: "rgb(41, 112, 255)",
      },
      text: {
        primaryChannel: "0 0 0",
      },
      FilledInput: {
        bg: "rgba(0, 0, 0, 0.01)",
      },
      background: {
        default: "rgb(248, 249, 250)",
      },
    },
  },

  dark: {
    palette: {
      primary: {
        main: "rgb(41, 112, 255)",
      },
      FilledInput: {
        bg: "rgba(255, 255, 255, 0.01)",
      },
    },
  },
};
