import type { FC } from "react";

import { Flex } from "@chakra-ui/react";
import type { TaskType } from "./lib";
import { EditTask } from "./components";

type Props = {
  task: TaskType;
};

export const TaskEditContainer: FC<Props> = ({ task }) => {
  return (
    <Flex mt={2} sx={{ height: "calc(100vh - 300px)" }}>
      <EditTask task={task}/>
    </Flex>
  );
};
