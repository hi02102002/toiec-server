import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';

const prisma = new PrismaClient();
const main = async () => {
  console.log(process.cwd());
  const data = JSON.parse(readFileSync(`${process.cwd()}\\SAT.json`, 'utf-8'));

  const promises = data.map((item: any) => {
    return prisma.word.create({
      data: {
        name: item.name,
        definition: item.definition,
        meaning: item.meaning,
        examples: {
          set: item.examples,
        },
        image: item.image,
        patchOfSpeech: item.patchOfSpeech,
        note: item.note,
        audios: {
          createMany: {
            data: item.audios,
          },
        },
        pronunciation: item.pronunciation,
        topic: {
          connect: {
            id: '35c7e837-f4d8-4adb-a0b8-973f01b79729',
          },
        },
      },
    });
  });

  await Promise.all(promises);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
