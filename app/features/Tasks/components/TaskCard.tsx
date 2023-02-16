import type { FC, DragEvent } from "react";
import { useContext } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

import { UiContext } from "~/context/ui";
import type { TaskType } from "../lib";

type Props = {
  task: TaskType;
};

export const TaskCard: FC<Props> = ({ task }) => {
  const { name, description, title } = task;
  const { dragOff, dragOn } = useContext(UiContext);
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", task.id);
    dragOn();
  };
  const onDragEnd = () => {
    dragOff();
  };

  return (
    <Card
      m={3}
      w="xs"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {title}
            </Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
