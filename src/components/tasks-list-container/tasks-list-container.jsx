import Box from "@mui/material/Box";
import { useTasks } from "../todo-container/tasks-context/tasks-context";
import { TasksList } from "../tasks-list/tasks-list";

function TasksListContainer() {
  const tasks = useTasks();
  const planTasks = tasks.filter((task) => !task.isDone);
  const doneTasks = tasks.filter((task) => task.isDone).reverse();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <TasksList isVisible={planTasks.length !== 0} title={`ПЛАН (${planTasks.length})`} tasks={planTasks} />
      <TasksList isVisible={doneTasks.length !== 0} title={`ГОТОВО (${doneTasks.length})`} tasks={doneTasks} />
    </Box>
  );
}

export { TasksListContainer };
