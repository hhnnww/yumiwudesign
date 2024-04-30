import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Button, Stack } from "@mui/material";
import { Link } from "@remix-run/react";

export function PageNavi({ page_num }: { page_num: number }) {
  return (
    <Stack mt={6} direction={"row"} alignItems={"start"}>
      {page_num > 1 && (
        <Button
          component={Link}
          to={"/posts/" + (page_num - 1).toString()}
          startIcon={<KeyboardArrowLeftOutlinedIcon />}
        >
          上一页
        </Button>
      )}
      <Button disabled sx={{ color: "inherit" }}>
        {page_num}
      </Button>
      <Button
        component={Link}
        to={"/posts/" + (page_num + 1).toString()}
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        下一页
      </Button>
    </Stack>
  );
}
