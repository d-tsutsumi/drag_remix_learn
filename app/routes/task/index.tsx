import { json, redirect } from "@remix-run/node";

import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { TaskContainer } from "~/features/Tasks";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/db.server";
import taskRequest from "~/features/Tasks/lib/task.server";

export async function loader(args: LoaderArgs) {
  const tasks = await db.task.findMany();
  return json(tasks);
}

// TODO error処理
export async function action({ request }: ActionArgs) {
  if (request.method === "POST") {
    try {
      await taskRequest.post(request);
      return redirect("/task");
    } catch (e) {
      console.log(e);
    }
  }
  if (request.method === "PATCH") {
    try {
      await taskRequest.patch(request);
      return redirect("/task");
    } catch (e) {
      console.log(e);
    }
  }
}

const TaskPage = () => {
  const taskList = useLoaderData<typeof loader>();
  return <TaskContainer taskList={taskList} />;
};

export default TaskPage;
