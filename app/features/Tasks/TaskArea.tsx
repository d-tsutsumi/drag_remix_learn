import { Flex } from "@chakra-ui/react";
import { TaskList } from "./components";

import { Tasks } from "./lib/mock";

export const TaskArea = () => {
  return (
    <Flex
      color={"white"}
      sx={{ height: "calc(100vh - 150px)" }}
      bg={"transparent"}
      justifyContent={"space-between"}
      gap={5}
      mt={2}
    >
      <TaskList tasks={Tasks} stauts="pendding" />
      <TaskList tasks={Tasks} stauts="progress" />
      <TaskList tasks={Tasks} stauts="done" />
    </Flex>
  );
};
