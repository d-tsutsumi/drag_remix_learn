import type { FC} from "react";
import { useMemo } from "react";
import { Box } from "@chakra-ui/react";

import { TaskCard } from "./TaskCard";
import type { TaskState, TaskType } from "../lib/type";

type Props = {
  tasks: TaskType[];
  stauts: TaskState;
};

export const TaskList: FC<Props> = ({ tasks, stauts }) => {
  const statusTasks = useMemo(
    () => tasks.filter(({ state }) => state === stauts),
    [stauts, tasks]
  );
  return (
    <Box h={"full"} bg="gray.200" p={2} overflowY="scroll">
      {statusTasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </Box>
  );
};
