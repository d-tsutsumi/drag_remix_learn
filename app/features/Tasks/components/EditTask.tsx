import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  FormControl,
  Stack,
  Box,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Form, useNavigate } from "@remix-run/react";
import type { FC } from "react";
import { useState } from "react";
import { TextInput, SecondaryButton, PrimariyButton } from "~/features/shared";
import type { TaskType } from "~/features/Tasks/lib";

type Props = {
  task: TaskType;
};
export const EditTask: FC<Props> = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [state, setState] = useState<string>(task.state);
  const router = useNavigate();

  return (
    <Card align={"center"}>
      <CardHeader>
        <Heading size={"md"} alignItems="center">
          Task Edit
        </Heading>
      </CardHeader>
      <CardBody>
        <Box p={4} bg="white" borderRadius={4}>
          <Form method="put" action={`/task/${task.id}`}>
            <FormControl p={2}>
              <TextInput
                label={"title"}
                initialValue={title}
                setState={setTitle}
              />
              <TextInput
                label={"description"}
                initialValue={description}
                setState={setDescription}
              />
              <RadioGroup mt={2} mb={2} value={state} onChange={setState}>
                <Stack
                  spacing={4}
                  direction={"row"}
                  align="center"
                  p={1}
                  mt={2}
                  gap="2"
                >
                  <Radio
                    value="pendding"
                    name="state"
                    flex={1}
                    checked={task.state === "pendding"}
                  >
                    pendding
                  </Radio>
                  <Radio
                    value="progress"
                    name="state"
                    flex={1}
                    checked={task.state === "progress"}
                  >
                    progress
                  </Radio>
                  <Radio
                    value="done"
                    name="state"
                    flex={1}
                    checked={task.state === "done"}
                  >
                    done
                  </Radio>
                </Stack>
              </RadioGroup>
              <Stack
                spacing={2}
                direction={"row"}
                align="center"
                p={1}
                mt={2}
                gap="2"
              >
                <SecondaryButton
                  text="cancel"
                  width="56"
                  onClickHandle={() => router("/task")}
                />
                <PrimariyButton text="edit" type="submit" width="56" />
              </Stack>
            </FormControl>
          </Form>
        </Box>
      </CardBody>
    </Card>
  );
};
