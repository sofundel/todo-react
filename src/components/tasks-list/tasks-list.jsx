import { Task } from "../task/task";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TasksList(props) {
  const { isVisible, title, tasks } = props;
  return (
    isVisible && (
      <>
        <Typography
          alignSelf="center"
          variant="caption"
          color="rgba(0, 0, 0, 0.60)"
          sx={{ mt: "1.5rem", visibility: {} }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            maxHeight: "13rem",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "0.5rem",
              backgroundColor: "rgba(240, 240, 240, 0.5)",
              borderRadius: "0.5rem",
              height: "auto",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(190, 190, 190, 0.2)",
              borderRadius: "0.5rem",
            },
          }}
        >
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </Box>
      </>
    )
  );
}

export { TasksList };
