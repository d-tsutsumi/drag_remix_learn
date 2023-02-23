import { db } from "~/db/db.server";
import type { TaskDoingState } from "./type";

const isState = (state: string): state is TaskDoingState =>
  state === "pendding" || state === "progress" || state === "done";

const post = async (request: Request) => {
  const body = await request.formData();
  const title = body.get("title");
  const description = body.get("description");

  // TODO valid
  if (typeof title !== "string" || typeof description !== "string") {
    throw new Error("Form not submitted correctly.");
  }
  await db.task.create({
    data: {
      title,
      description,
      state: "pendding",
      name: "tsutsumi",
    },
  });
};

const patch = async (request: Request) => {
  const body = await request.formData();
  const id = body.get("id");
  const state = body.get("state");
  // TODO valid
  if (typeof id !== "string" || typeof state !== "string") {
    throw new Error("Form not submitted correctly.");
  }
  const parseId = Number(id);

  if (isNaN(parseId) || !isState(state)) {
    throw new Error("invalid id or state");
  }
  const task = await db.task.findUnique({
    where: {
      id: parseId,
    },
  });
  if (!task) {
    throw new Error("task is not found");
  }

  await db.task.update({
    where: {
      id: parseId,
    },
    data: {
      state,
    },
  });
};

export default {
  post,
  patch,
};
