export type TaskType = {
  id: string;
  state: TaskState;
  description: string;
  name: string;
  title: string
};

export type TaskState = "pendding" | "progress" | "done";
