import type { FC, DragEvent } from "react";
import { useMemo, useContext } from "react";
import type { SystemStyleObject } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { TaskCard } from "./TaskCard";
import type { TaskState, TaskType } from "../lib";
import { UiContext } from "../../../context/ui/uiContext";

type Props = {
  tasks: TaskType[];
  stauts: TaskState;
  updateTask: (taskId: string, state: TaskState) => void;
};

export const TaskList: FC<Props> = ({ tasks, stauts, updateTask }) => {
  const { isDrag, dragOff } = useContext(UiContext);
  const statusTasks = useMemo(
    () => tasks.filter(({ state }) => state === stauts),
    [stauts, tasks]
  );
  const onDrop = (event: DragEvent) => {
    const id = event.dataTransfer.getData("text");
    updateTask(id, stauts);
    dragOff();
  };
  const aloowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <Box
      onDrop={onDrop}
      onDragOver={aloowDrop}
      h={"full"}
      p={2}
      overflowY="scroll"
      sx={isDrag ? DragStyle : offDragStyle}
      w="360px"
    >
      {statusTasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </Box>
  );
};

const DragStyle: SystemStyleObject = {
  backgroundColor: "rgba(89, 91, 94, 0.9)",
  borderRadius: "10px",
  opacity: 0.2,
  transition: "all .03s",
};

const offDragStyle: SystemStyleObject = {
  backgroundColor: "rgb(89, 91, 94)",
};
