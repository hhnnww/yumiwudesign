import { ActionFunctionArgs, json } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export async function action({ request }: ActionFunctionArgs) {
  const json_data = await request.json();
  console.log(json_data);

  if (!json_data?.id) {
    const slug = (await prisma.post.count({})).toString().padStart(8, "0");
    let tags = json_data?.tags;
    if (!tags) {
      tags = [null];
    }
    const post_obj = await prisma.post.create({
      data: {
        title: json_data?.title as string,
        content: json_data?.content as string,
        tags: tags,
        slug: slug,
      },
    });
    return json({ id: post_obj.id, slug: post_obj?.slug, tags: post_obj.tags });
  } else {
    let tags = json_data?.tags;
    if (!tags) {
      tags = [null];
    }
    const post_obj = await prisma.post.update({
      where: { id: json_data?.id },
      data: {
        title: json_data?.title as string,
        content: json_data?.content as string,
        tags: tags,
        slug: json_data?.slug,
      },
    });
    return json(
      {
        id: post_obj.id,
        slug: json_data.slug,
        tags: json_data.tags,
      },
      {
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export function loader() {
  return json(
    { hello: "world" },
    {
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
