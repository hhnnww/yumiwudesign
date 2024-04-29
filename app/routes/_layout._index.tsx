import { Stack, Typography } from "@mui/material";
import { json, useLoaderData } from "@remix-run/react";
import moment from "moment";
import { prisma } from "prisma/prisma.server";
import { MLink } from "~/component/link";
import { theme } from "~/theme/theme";
export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  return (
    <Stack spacing={[2, 4, 6, 8]}>
      {loader_data.map((item) => (
        <Stack key={item.id}>
          <MLink link={`/post/${item.slug}`}>
            <Stack>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1.8rem",
                  mb: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  color: theme.vars.palette.text.secondary,
                  mb: 2,
                }}
              >
                {moment(item.created_date).fromNow()}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.vars.palette.text.secondary,
                  lineHeight: "2",
                }}
              >
                {item.content?.substring(0, 350).replaceAll(" ", "")}
                ...
              </Typography>
            </Stack>
          </MLink>
        </Stack>
      ))}
    </Stack>
  );
}

export async function loader() {
  const post_list = await prisma.post.findMany({
    take: 10,

    orderBy: {
      slug: "desc",
    },
  });

  return json(post_list, {
    status: 200,
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
