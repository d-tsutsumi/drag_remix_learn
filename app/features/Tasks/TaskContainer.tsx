import { Box, Flex, FormControl, Stack } from "@chakra-ui/react";
import { TaskList } from "./components";

import { Tasks } from "./lib/mock";
import { useState } from "react";
import type { TaskState } from "./lib";
import { PrimariyButton, TextInput } from "../shared";

export const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState(Tasks);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");

  const updateTask = (taskId: string, state: TaskState) => {
    const update = allTasks.find((task) => task.id === taskId);
    const imutableTaskList = allTasks.filter(({ id }) => taskId !== id);
    if (!update) return;
    setAllTasks([...imutableTaskList, { ...update, state: state }]);
  };
  const ontitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscription(e.target.value);
  };
  const openAddTaskForm = () => {
    setIsAddingTask(true);
  };
  const closeAddTaskForm = () => {
    setTitle("");
    setDiscription("");
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
        <Box p={2} bg="white" borderRadius={4}>
          {isAddingTask ? (
            <FormControl p={2} as={"form"} onSubmit={addTask}>
              <TextInput
                label={"Title"}
                value={title}
                onChangeHandle={ontitleChange}
              />
              <TextInput
                label={"description"}
                value={description}
                onChangeHandle={onDescriptionChange}
              />
              <Stack spacing={2} direction={"row"} align="center" p={1} mt={2}>
                <PrimariyButton
                  text="cancel"
                  onClickHandle={closeAddTaskForm}
                />
                <PrimariyButton text="add" type="submit" />
              </Stack>
            </FormControl>
          ) : (
            <PrimariyButton
              text="add task"
              width="full"
              onClickHandle={openAddTaskForm}
            />
          )}
        </Box>
      </TaskList>
      <TaskList tasks={allTasks} stauts="progress" updateTask={updateTask} />
      <TaskList tasks={allTasks} stauts="done" updateTask={updateTask} />
    </Flex>
  );
};
