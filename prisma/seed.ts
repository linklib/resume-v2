import { PrismaClient } from "@prisma/client";
import { categories } from "./data";

const prisma = new PrismaClient();

async function main() {
  for (const c of categories) {
    await prisma.category
      .create({
        data: c,
      })
      .then((category) => {});
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
