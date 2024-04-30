import { Button, Divider, Stack } from "@mui/material";
import { LoaderFunctionArgs } from "@remix-run/node";
import { json, Link, useLoaderData, useParams } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";
import { PostItem } from "~/component/post-item";

export function meta() {
  return [{ title: "yumiwudesign" }];
}
export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  const params = useParams();

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

      <Stack mt={6} direction={"row"} alignItems={"start"}>
        {parseInt(params.page_num as string) > 1 && (
          <Button
            component={Link}
            to={
              "/posts/" + (parseInt(params.page_num as string) - 1).toString()
            }
          >
            上一页
          </Button>
        )}
        <Button disabled sx={{ color: "inherit" }}>
          {params.page_num}
        </Button>
        <Button
          component={Link}
          to={"/posts/" + (parseInt(params.page_num as string) + 1).toString()}
        >
          下一页
        </Button>
      </Stack>
    </>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const page_num = parseInt(params?.page_num as string) - 1;
  const post_list = await prisma.post.findMany({
    take: 10,
    skip: page_num * 10,
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
