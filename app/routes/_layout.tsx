import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "@remix-run/react";
import { MLink } from "~/component/link";
import { LinkItem } from "~/component/link-item";

export default function Component() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: [6, 8] }}>
        <Grid container spacing={[6, 8]}>
          <Grid xs={12}>
            <MLink link="/">
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "1rem",
                }}
              >
                yumiwudesign
              </Typography>
            </MLink>
          </Grid>

          <Grid xs={12} lg={8}>
            <Box>
              <Outlet />
            </Box>
          </Grid>

          <Grid xs={12} lg={4}>
            <Stack spacing={1}>
              <Link to="/requesttodict">
                <LinkItem>
                  <DataObjectOutlinedIcon />
                  <Box>浏览器请求头转换成字典</Box>
                </LinkItem>
              </Link>

              <Link to="/getmaterialid">
                <LinkItem>
                  <DataObjectOutlinedIcon />
                  <Box>获取页面的商家编码</Box>
                </LinkItem>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
