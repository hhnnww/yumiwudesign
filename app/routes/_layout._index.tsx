/* eslint-disable no-misleading-character-class */
/* eslint-disable no-control-regex */
import { Divider, Stack } from "@mui/material";
import { json, useLoaderData, useParams } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";
import { PageNavi } from "~/component/page-navi";
import { PostItem } from "~/component/post-item";

export function meta() {
  return [{ title: "yumiwudesign" }];
}

export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  let params = useParams();
  if (!params.page_num) {
    params = { page_num: "1" };
  }

  return (
    <>
      <Stack spacing={[4, 6, 8]} divider={<Divider />}>
        {loader_data.map((item) => (
          <PostItem
            title={item.title as string}
            content={
              <Stack
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  wordBreak: "break-all",
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

      {loader_data.length > 9 && (
        <PageNavi page_num={parseInt(params.page_num as string)} />
      )}
    </>
  );
}

export async function loader() {
  const post_list = await prisma.post.findMany({
    take: 10,

    orderBy: {
      slug: "desc",
    },
  });

  return json(post_list);
}
