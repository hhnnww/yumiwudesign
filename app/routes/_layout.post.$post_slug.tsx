import { Stack } from "@mui/material";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Markdown from "marked-react";
import { prisma } from "prisma/prisma.server";
import { PostItem } from "~/component/post-item";

export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  return (
    <>
      <Stack mt={[2, 4, 6, 8]}>
        <PostItem
          title={loader_data?.title as string}
          content={<Markdown>{loader_data?.content as string}</Markdown>}
          datetime={loader_data?.created_date as string}
          link={loader_data?.slug as string}
          key={loader_data?.id as string}
        />
      </Stack>
    </>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const post_obj = await prisma.post.findUnique({
    where: { slug: params.post_slug },
  });

  return json(post_obj);
}
