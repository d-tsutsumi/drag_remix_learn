import type { ActionArgs, LoaderArgs} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/db.server";
import taskRequest from "~/features/Tasks/lib/task.server";
import { TaskEditContainer } from "../../features/Tasks/TascEditContainer";

export async function loader({ params }: LoaderArgs) {
  const id = params.id;
  const paraseId = Number(id);
  if (isNaN(Number(paraseId))) {
    throw new Response("invalid params", {
      status: 404,
      statusText: "not found",
    });
  }
  const task = await db.task.findUnique({
    where: {
      id: paraseId,
    },
  });

  if (!task) throw new Response("content not found", { status: 404 });

  return json(task);
}

export async function action({ request, params }: ActionArgs) {
  if (request.method === "PUT") {
    const id = params.id;
    const paraseId = Number(id);
    if (isNaN(Number(paraseId))) {
      throw new Response("invalid params", {
        status: 404,
        statusText: "not found",
      });
    }
    try {
      taskRequest.put(request, paraseId);
      return redirect("/task");
    } catch (e) {
      console.log(e);
    }
  }
}
const Edit = () => {
  const task = useLoaderData<typeof loader>();
  return <TaskEditContainer task={task} />;
};

export default Edit;
