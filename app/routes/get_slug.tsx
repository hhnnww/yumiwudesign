import { prisma } from "prisma/prisma.server";

export async function loader() {
  return (await prisma.post.count()).toString().padStart(8, "0");
}
