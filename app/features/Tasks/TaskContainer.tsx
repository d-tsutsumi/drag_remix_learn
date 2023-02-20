import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import { TaskList, NewTask } from "./components";
import type { NewTaskProps } from "./components";
import { Tasks } from "./lib/mock";
import type { TaskState } from "./lib";

export const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState(Tasks);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTask = (taskId: string, state: TaskState) => {
    const update = allTasks.find((task) => task.id === taskId);
    const imutableTaskList = allTasks.filter(({ id }) => taskId !== id);
    if (!update) return;
    setAllTasks([...imutableTaskList, { ...update, state: state }]);
  };
  const openAddTaskForm = () => {
    setIsAddingTask(true);
  };
  const closeAddTaskForm = () => {
    setTitle("");
    setDescription("");
    setIsAddingTask(false);
  };

  const addTask = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!title || !description) return;
    setAllTasks((prevTask) => [
      ...prevTask,
      {
        title,
        description,
        id: "100",
        state: "pendding",
        name: "tsutsumi",
      },
    ]);
    closeAddTaskForm();
  };

  const newTaskProps: NewTaskProps = {
    setTitle,
    setDescription,
    closeAddTaskForm,
    onSubmitHandle: addTask,
    openAddTaskForm,
    isAddingTask,
    description,
    title,
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
      <TaskList tasks={allTasks} stauts="pendding" updateTask={updateTask}>
        <NewTask {...newTaskProps} />
      </TaskList>
      <TaskList tasks={allTasks} stauts="progress" updateTask={updateTask} />
      <TaskList tasks={allTasks} stauts="done" updateTask={updateTask} />
    </Flex>
  );
};
