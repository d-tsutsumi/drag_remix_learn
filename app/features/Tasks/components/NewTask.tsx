import type { FC } from "react";
import { Box, FormControl, Stack } from "@chakra-ui/react";
import { TextInput, PrimariyButton } from "~/features/shared";

export type NewTaskProps = {
  isAddingTask: boolean;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  onSubmitHandle: (e: React.FormEvent<HTMLDivElement>) => void;
  openAddTaskForm: () => void;
  closeAddTaskForm: () => void;
};

export const NewTask: FC<NewTaskProps> = (props) => {
  const {
    isAddingTask,
    openAddTaskForm,
    onSubmitHandle,
    title,
    setTitle,
    description,
    setDescription,
    closeAddTaskForm,
  } = props;
  return (
    <Box p={2} bg="white" borderRadius={4}>
      {isAddingTask ? (
        <FormControl p={2} as={"form"} onSubmit={onSubmitHandle}>
          <TextInput
            label={"Title"}
            value={title}
            onChangeHandle={(e) => setTitle(e.target.value)}
          />
          <TextInput
            label={"description"}
            value={description}
            onChangeHandle={(e) => setDescription(e.target.value)}
          />
          <Stack spacing={2} direction={"row"} align="center" p={1} mt={2}>
            <PrimariyButton text="cancel" onClickHandle={closeAddTaskForm} />
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
  );
};
