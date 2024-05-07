import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import { theme } from "~/theme/theme";
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
      <Stack mb={2}>
        <MLink link={`/post/${link}`}>
          <Typography
            variant="h2"
            sx={{
              fontSize: ["1.8rem", "2.2rem"],
              mb: 2,
            }}
          >
            {title}
          </Typography>
        </MLink>

        <Typography
          variant="body2"
          sx={{
            color: theme.vars.palette.text.secondary,
            lineHeight: 1,
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={0.8}>
            <Box>
              <CalendarTodayOutlinedIcon fontSize={"inherit"} />
            </Box>
            <Box>{moment(datetime).fromNow()}</Box>
          </Stack>
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          img: {
            maxWidth: "100%",
          },
          "pre,code": {
            fontFamily: "consolas",
            whiteSpace: "normal",
          },
          code: {
            backgroundColor: theme.vars.palette.background.paper,
          },
          color: "rgba(34,34,34,1)",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {content}
      </Typography>
    </Stack>
  );
}
