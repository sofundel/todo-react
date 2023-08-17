import { AddTask } from "../add-task/add-task";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TasksProvider } from "./tasks-context/tasks-provider";
import { TasksListContainer } from "../tasks-list-container/tasks-list-container";

function TodoContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,

        width: "32.125rem",
        height: "47.875rem",
        padding: "2rem",

        backgroundColor: "white",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h4" color="primary" sx={{ p: "0.75rem" }}>
        TODO
      </Typography>
      <TasksProvider>
        <AddTask />
        <TasksListContainer />
      </TasksProvider>
    </Box>
  );
}

export { TodoContainer };
