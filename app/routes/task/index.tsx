import type { ActionArgs } from "@remix-run/node";
import { TaskContainer } from "~/features/Tasks";


// TODO formでのtask追加は全てserverでやる。
export async function action({ request }: ActionArgs) {
  console.log(request);
  const body = await request.formData();
  console.log(body.get("title"))
  return null
}

const TaskPage = () => {
  return <TaskContainer />;
};

export default TaskPage;
