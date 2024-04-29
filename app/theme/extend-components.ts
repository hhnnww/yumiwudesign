import { type CssVarsThemeOptions } from "@mui/material";

export const components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: "underline",
        color: "inherit",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(1),
      }),
      textPrimary: ({ theme }) => ({
        color: theme.vars.palette.text.primary,
      }),
    },
  },

  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        textDecoration: "none",
        color: `rgba(${theme.vars.palette.text.primaryChannel}/0.5)`,
        ":hover": {
          color: `rgba(${theme.vars.palette.text.primaryChannel}/0.8)`,
        },
      }),
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: () => ({
        input: {
          "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
            {
              WebkitTransitionDelay: "9999s",
              transitionDelay: "9999s",
            },
        },
      }),
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        borderRadius: theme.spacing(0.5),
        borderWidth: "1px",
        borderStyle: "solid",

        borderColor: theme.vars.palette.divider,

        input: {
          borderRadius: theme.spacing(0.5),
        },

        "&.Mui-focused": {
          borderColor: "transparent",

          ...(ownerState.color === "primary"
            ? {
                boxShadow: `${theme.vars.palette.primary.main} 0 0 0 2px`,
              }
            : ownerState.color === "error" && {
                boxShadow: `${theme.vars.palette.error.main} 0 0 0 2px`,
              }),
          backgroundColor: "transparent",
          transitionDuration: "0.4s",
          transitionProperty: "box-shadow",
        },

        ":after": {
          display: "none",
        },

        ":before": {
          display: "none",
        },
      }),
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "filled",
    },
  },

  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
      },
    },
  },
};
