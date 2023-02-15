import type { TaskType } from "../lib/type";
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
import type { FC } from "react";

type Props = {
  task: TaskType;
};

export const TaskCard: FC<Props> = ({ task }) => {
  const { name, description, title } = task;
  return (
    <Card m={3} w="xs">
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
