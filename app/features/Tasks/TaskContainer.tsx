import { useState } from "react";
import type { FC } from "react";

import { Flex } from "@chakra-ui/react";
import { TaskList, NewTask } from "./components";
import type { NewTaskProps } from "./components";
import type { TaskDoingState, TaskType } from "./lib";
import { useFetcher } from "react-router-dom";

type Props = {
  taskList: TaskType[];
};

export const TaskContainer: FC<Props> = ({ taskList }) => {
  const fetcher = useFetcher();
  const [isAddingTask, setIsAddingTask] = useState(false);

  const updateTask = (taskId: number, state: TaskDoingState) => {
    fetcher.submit(
      { id: String(taskId), state },
      { method: "patch", action: "/task?index" }
    );
  };
  const openAddTaskForm = () => {
    setIsAddingTask(true);
  };
  const closeAddTaskForm = () => {
    setIsAddingTask(false);
  };

  const newTaskProps: NewTaskProps = {
    closeAddTaskForm,
    openAddTaskForm,
    isAddingTask,
  };

  return (
    <Flex
      color={"white"}
      sx={{ height: "calc(100vh - 150px)" }}
      bg={"transparent"}
      justifyContent={"space-between"}
      gap={5}
      mt={2}
    >
      <TaskList tasks={taskList} stauts="pendding" updateTask={updateTask}>
        <NewTask {...newTaskProps} />
      </TaskList>
      <TaskList tasks={taskList} stauts="progress" updateTask={updateTask} />
      <TaskList tasks={taskList} stauts="done" updateTask={updateTask} />
    </Flex>
  );
};
