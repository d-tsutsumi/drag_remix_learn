import { Flex } from "@chakra-ui/react";
import { TaskList } from "./components";

import { Tasks } from "./lib/mock";
import { useState } from "react";
import type { TaskState } from "./lib";

export const TaskArea = () => {
  const [allTasks, setAllTasks] = useState(Tasks);
  const updateTask = (taskId: string, state: TaskState) => {
    const update = allTasks.find((task) => task.id === taskId);
    const imutableTaskList = allTasks.filter(({ id }) => taskId !== id);
    if(!update) return
    setAllTasks(() => [...imutableTaskList, { ...update, state: state }]);
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
      <TaskList tasks={allTasks} stauts="pendding" updateTask={updateTask} />
      <TaskList tasks={allTasks} stauts="progress" updateTask={updateTask} />
      <TaskList tasks={allTasks} stauts="done" updateTask={updateTask} />
    </Flex>
  );
};
