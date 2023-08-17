import { createContext, useContext } from "react";

const tasksContextDefault = null;
const tasksDispatchContextDefault = null;

const TasksContext = createContext(tasksContextDefault);
const TasksDispatchContext = createContext(tasksDispatchContextDefault);

function useTasks() {
  return useContext(TasksContext);
}

function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export { TasksContext, TasksDispatchContext, useTasks, useTasksDispatch };
