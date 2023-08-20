import { PartType, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
const prisma = new PrismaClient();

const part125 = async () => {
  const data = JSON.parse(
    readFileSync(`${process.cwd()}\\data-crawl\\test1\\part5.json`, 'utf-8'),
  );

  for (const { answers, audio, explain, image, text, transcript } of data) {
    await prisma.question.create({
      data: {
        audio,
        explain,
        transcript,
        image,
        text,
        answers: {
          createMany: {
            data: answers,
          },
        },
        testId: '7179c186-cdae-4384-8fab-cb2bebda6b05',
        partId: 'c071b2a7-ae75-4dc7-9139-1efea4b1d04b',
        partType: PartType.PART5,
      },
    });
  }
};

const part3467 = async () => {
  const data = JSON.parse(
    readFileSync(`${process.cwd()}\\data-crawl\\test1\\part7.json`, 'utf-8'),
  );

  for (const {
    answers,
    audio,
    explain,
    image,
    text,
    transcript,
    questions,
  } of data) {
    const parent = await prisma.question.create({
      data: {
        audio,
        explain,
        transcript,
        image,
        text,
        partId: 'aa1ac606-a634-4599-be39-e2b538aea6e6',
        partType: PartType.PART7,
        testId: '7179c186-cdae-4384-8fab-cb2bebda6b05',
      },
    });

    for (const {
      audio,
      explain,
      image,
      text,
      answers,
      transcript,
    } of questions) {
      await prisma.question.create({
        data: {
          audio,
          explain,
          transcript,
          image,
          text,
          answers: {
            createMany: {
              data: answers,
            },
          },
          parentId: parent.id,
        },
      });
    }
  }
};

part3467()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
