import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const wine = await prisma.wine.create({
    data: {
      name: "Chateau Margaux",
      year: 2015,
      type: "RED",
      varietal: "CABERNET_SAUVIGNON",
      rating: "4.8", // Pass decimal values as strings
      consumed: false,
    },
  });

  console.log(wine);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
