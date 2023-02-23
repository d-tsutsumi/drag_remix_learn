import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      {
        name: "tsutsumi",
        title: "test",
        description: "tes tes tst",
        state: "pendding",
      },
      {
        name: "tsutsumi",
        description: "gonripwghpirgnripngrpwngirpwng@orngpengap",
        title: "test",
        state: "pendding",
      },
      {
        name: "tsutsumi",
        description: "tes tes tst",
        title: "test",

        state: "progress",
      },
      {
        name: "tsutsumi",
        description: "tes tes tst",
        title: "test",
        state: "progress",
      },
      {
        name: "tsutsumi",
        description: "tes tes tst",
        title: "test",
        state: "progress",
      },
      {
        name: "tsutsumi",
        title: "test",
        description: "tes tes tst",
        state: "progress",
      },
      {
        name: "tsutsumi",
        description: "tes tes tst",
        title: "test",
        state: "done",
      },
    ],
  });
}

main();
