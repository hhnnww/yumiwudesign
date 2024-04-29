import { experimental_extendTheme } from "@mui/material";
import { color_schemes } from "./extend-colorschemes";
import { components } from "./extend-components";
import { shadows } from "./extend-shadows";
import { typography } from "./extend-typography";

export const theme = experimental_extendTheme({
  colorSchemes: color_schemes,
  typography: typography,
  components: components,
  shadows: shadows,
});
