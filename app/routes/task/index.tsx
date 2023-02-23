import { json } from "@remix-run/node";

import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { TaskContainer } from "~/features/Tasks";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/db.server";

export async function loader(args: LoaderArgs) {
  const tasks = await db.task.findMany();
  return json(tasks);
}

// TODO formでのtask追加は全てserverでやる。
export async function action({ request }: ActionArgs) {
  if (request.method === "POST") {
    console.log(request);
    const body = await request.formData();
    console.log(body.get("title"));
    return null;
  }
}

const TaskPage = () => {
  const taskList = useLoaderData<typeof loader>();
  return <TaskContainer taskList={taskList} />;
};

export default TaskPage;
