export type TaskType = {
  id: number;
  state: TaskDoingState;
  description: string;
  name: string;
  title: string
};

export type TaskDoingState = "pendding" | "progress" | "done";
