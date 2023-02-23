import type { FC } from "react";
import { Box, FormControl, Stack } from "@chakra-ui/react";
import { TextInput, PrimariyButton } from "~/features/shared";
import { Form } from "@remix-run/react";

export type NewTaskProps = {
  isAddingTask: boolean;
  openAddTaskForm: () => void;
  closeAddTaskForm: () => void;
};

export const NewTask: FC<NewTaskProps> = ({
  closeAddTaskForm,
  openAddTaskForm,
  isAddingTask,
}) => {
  return (
    <Box p={2} bg="white" borderRadius={4}>
      {isAddingTask ? (
        <Form method="post">
          <FormControl p={2}>
            <TextInput label={"title"} />
            <TextInput label={"description"} />
            <Stack spacing={2} direction={"row"} align="center" p={1} mt={2}>
              <PrimariyButton text="cancel" onClickHandle={closeAddTaskForm} />
              <PrimariyButton text="add" type="submit" />
            </Stack>
          </FormControl>
        </Form>
      ) : (
        <PrimariyButton
          text="add task"
          width="full"
          onClickHandle={openAddTaskForm}
        />
      )}
    </Box>
  );
};
