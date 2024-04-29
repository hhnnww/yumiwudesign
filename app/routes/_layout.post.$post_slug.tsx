import { Box, Typography } from "@mui/material";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Markdown from "marked-react";
import moment from "moment";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  const loader_data = useLoaderData<typeof loader>();
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          textTransform: "uppercase",
          pb: 2,
        }}
      >
        {loader_data?.title as string}
      </Typography>

      <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
        {moment(loader_data?.created_date).fromNow()}
      </Typography>
      <Box mt={[2, 4, 6, 8]} className="prose">
        <Markdown>{loader_data?.content as string}</Markdown>
      </Box>
    </>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const post_obj = await prisma.post.findUnique({
    where: { slug: params.post_slug },
  });

  return json(post_obj);
}
