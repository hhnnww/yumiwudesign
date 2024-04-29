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
            "pre,code": {
              fontFamily: "Consolas, serif",
            },
            pre: {
              border: `1px solid ${theme.vars.palette.divider}`,
              padding: theme.spacing(3.5),
              borderRadius: theme.spacing(1),
            },
            img: {
              maxWidth: "100%",
            },
            h1: {
              fontSize: "1.3rem",
              borderBottom: `1px solid ${theme.vars.palette.divider}`,
              paddingBottom: theme.spacing(1),
              paddingTop: theme.spacing(6),
            },
            p: {
              marginBottom: theme.spacing(4),
            },
            h2: {
              borderBottom: `1px solid ${theme.vars.palette.divider}`,
              paddingBottom: theme.spacing(1),
              paddingTop: theme.spacing(6),
              fontSize: "1.2rem",
            },
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
      <Container maxWidth="lg">
        <Box bgcolor={"#FFFFFF"} px={[2, 4, 6, 8]}>
          <Grid container>
            <Grid xs={12} py={[4, 6, 12]}>
              <MLink link="/">
                <Typography
                  variant="h1"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: "3rem",
                    textAlign: "center",
                    mb: 8,
                  }}
                >
                  yumiwudesign
                </Typography>
              </MLink>
            </Grid>

            <Grid xs={12} sx={{ pb: [2, 4, 6, 8] }}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
