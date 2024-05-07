import {
  Box,
  Container,
  GlobalStyles,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Outlet } from "@remix-run/react";
import { MLink } from "~/component/link";
import { theme } from "~/theme/theme";

export default function Component() {
  return (
    <>
      <GlobalStyles
        styles={{
          ".prose": {
            lineHeight: "24px",
            fontSize: "16px",
            color: "rgba(34,34,34,100)",
            "pre,code": {
              fontFamily: "Consolas, serif",
            },
            pre: {
              border: `1px solid ${theme.vars.palette.divider}`,
              padding: theme.spacing(3),
              borderRadius: theme.spacing(0.5),
              whiteSpace: "pre-wrap",
            },
            img: {
              maxWidth: "100%",
            },
            h1: {
              fontSize: "1.2rem",
            },
            h2: { fontSize: "1.1rem" },
            "h3,h4,h5,h6,h7": {
              fontSize: "1rem",
            },
            a: {
              ":hover": {
                textDecoration: "none",
              },
            },
          },
        }}
      />
      <Container maxWidth="md">
        <Grid container>
          <Grid
            xs={12}
            py={2}
            px={3}
            bgcolor={"#000"}
            color={"#fff"}
            sx={{ a: { ":hover": { color: "#fff" } } }}
          >
            <MLink link="/">
              <Typography
                variant="h1"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                yumiwudesign
              </Typography>
            </MLink>
          </Grid>

          <Grid xs={12} bgcolor={"#fff"}>
            <Box px={[4, 8]} py={8}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
