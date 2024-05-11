import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import { MLink } from "./link";

export function PostItem({
  title,
  content,
  datetime,
  link,
}: {
  title: string;
  content: JSX.Element | string;
  datetime: string;
  link: string;
}) {
  return (
    <Stack>
      <Stack mb={4}>
        <MLink link={`/post/${link}`}>
          <Typography variant="h2" sx={{ fontSize: "1.8rem" }} mb={2}>
            {title}
          </Typography>
        </MLink>

        <Typography
          variant="body1"
          sx={{
            textTransform: "uppercase",
            lineHeight: "1",
            letterSpacing: "1px",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={0.8}>
            <Box>
              <CalendarTodayOutlinedIcon fontSize={"inherit"} />
            </Box>
            <Box>{moment(datetime).format("YYYY年M月D日")}</Box>
          </Stack>
        </Typography>
      </Stack>

      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
}
