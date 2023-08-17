import { useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "./tasks-context";
import { tasksReducer } from "./tasks-reducer";

const tasksDefault = [];
let tasksCache;
try {
  tasksCache = JSON.parse(localStorage.getItem("tasks"));
} catch {
  console.error("Ошибка при преобразовании JSON");
}

function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    tasksCache || tasksDefault
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export { TasksProvider };
