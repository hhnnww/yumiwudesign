import { Divider, Stack } from "@mui/material";
import { json, useLoaderData } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";
import { PostItem } from "~/component/post-item";

export function meta() {
  return [{ title: "yumiwudesign" }];
}
export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  return (
    <Stack spacing={[4, 6]} divider={<Divider />}>
      {loader_data.map((item) => (
        <PostItem
          title={item.title as string}
          content={
            <Stack
              sx={{
                lineClamp: 2,
                webkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: " -webkit-box",
              }}
            >
              {(item.content?.substring(0, 200) + "...") as string}
            </Stack>
          }
          datetime={item.created_date}
          link={item.slug}
          key={item.id}
        />
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
