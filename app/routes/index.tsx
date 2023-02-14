import { DefaultLayout } from "~/components/features/Layouts/DefaultLayout";
import { TaskArea } from "~/components/features/Tasks";

export default function Index() {
  return (
    <DefaultLayout>
      <TaskArea />
    </DefaultLayout>
  );
}
