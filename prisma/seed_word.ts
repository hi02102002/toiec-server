import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';

const prisma = new PrismaClient();
const main = async () => {
  console.log(process.cwd());
  const data = JSON.parse(
    readFileSync(`${process.cwd()}\\toiec_word_list.json`, 'utf-8'),
  );

  console.log(data);

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
            id: '07016667-655d-4ce5-b22c-bbd2e6e4e911',
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
