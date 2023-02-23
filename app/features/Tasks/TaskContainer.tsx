import { useState } from "react";
import type { FC } from "react";

import { Flex } from "@chakra-ui/react";
import { TaskList, NewTask } from "./components";
import type { NewTaskProps } from "./components";
import type { TaskDoingState, TaskType } from "./lib";

type Props = {
  taskList: TaskType[];
};

export const TaskContainer: FC<Props> = ({ taskList }) => {
  const [alltaskList, setAlltaskList] = useState(taskList);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const updateTask = (taskId: string, state: TaskDoingState) => {
    const update = alltaskList.find((task) => task.id === taskId);
    const imutableTaskList = alltaskList.filter(({ id }) => taskId !== id);
    if (!update) return;
    setAlltaskList([...imutableTaskList, { ...update, state: state }]);
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
    setAlltaskList((prevTask) => [
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
      <TaskList tasks={alltaskList} stauts="pendding" updateTask={updateTask}>
        <NewTask {...newTaskProps} />
      </TaskList>
      <TaskList tasks={alltaskList} stauts="progress" updateTask={updateTask} />
      <TaskList tasks={alltaskList} stauts="done" updateTask={updateTask} />
    </Flex>
  );
};
