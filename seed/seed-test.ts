import { PartType, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';

const prisma = new PrismaClient();

const part3467 = async (
  data: any,
  partId: string,
  testId: string,
  partType: PartType,
) => {
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
        partId,
        testId,
        partType,
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

const part125 = async (
  data: any,
  partId: string,
  testId: string,
  partType: PartType,
) => {
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
        testId,
        partId,
        partType,
      },
    });
  }
};

const createTest = async () => {
  const randomName = Math.random().toString(36).substring(7);

  const test = await prisma.test.create({
    data: {
      name: randomName,
      parts: {
        createMany: {
          data: new Array(7).fill(0).map((_, index) => ({
            name: `Part ${index + 1}`,
            type: PartType[`PART${index + 1}`],
          })),
        },
      },
    },
    include: {
      parts: true,
    },
  });

  const promises = test.parts.map(async (part, index) => {
    const data = JSON.parse(
      readFileSync(
        `${process.cwd()}\\data-crawl\\test5\\part${index + 1}.json`,
        'utf-8',
      ),
    );

    if (
      part.type === PartType.PART1 ||
      part.type === PartType.PART2 ||
      part.type === PartType.PART5
    ) {
      await part125(data, part.id, test.id, part.type);
    } else if (
      part.type === PartType.PART3 ||
      part.type === PartType.PART4 ||
      part.type === PartType.PART6 ||
      part.type === PartType.PART7
    ) {
      await part3467(data, part.id, test.id, part.type);
    }
  });

  await Promise.all(promises);
};

const main = async () => {
  await createTest();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
