import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Outlet } from "@remix-run/react";
import { MLink } from "~/component/link";

export default function Component() {
  return (
    <>
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
