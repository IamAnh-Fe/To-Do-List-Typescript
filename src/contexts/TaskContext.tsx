import { createContext } from "react";
import { Task } from "../Types/Types";

const TaskContext = createContext<
  [Task[], React.Dispatch<React.SetStateAction<Task[]>>]
>([[], () => {}]);

export default TaskContext;
