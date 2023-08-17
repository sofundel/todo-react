import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTasksDispatch } from "../todo-container/tasks-context/tasks-context";
import { tasksReducerCases } from "../todo-container/tasks-context/tasks-reducer";
import { useState } from "react";
import { EditTask } from "../edit-task/edit-task";

const isEditingDefault = false;

function Task(props) {
  const {
    task: { id, name, isDone },
  } = props;

  const [isEditing, setIsEditing] = useState(isEditingDefault);
  const dispatch = useTasksDispatch();

  function handleClickDelete() {
    dispatch({
      type: tasksReducerCases.delete,
      id,
    });
  }

  function handleClickEdit() {
    setIsEditing(true);
  }

  function handleChangeStatus() {
    dispatch({
      type: tasksReducerCases.changeStatus,
      id,
      isDone,
    });
  }

  return isEditing ? (
    <EditTask id={id} name={name} setIsEditing={setIsEditing} isEditingDefault={isEditingDefault} />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        wordBreak: "break-word",

        pr: "0.75rem",
        mb: "0.25rem",
        width: "100%",
      }}
    >
      <Checkbox size="small" checked={isDone} onChange={handleChangeStatus} />
      <Typography
        sx={{
          flexGrow: 1,
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pl: "0.75rem",
        }}
      >
        <IconButton
          onClick={handleClickEdit}
          color="primary"
          size="small"
          sx={{ visibility: isDone ? "hidden" : "visible" }}
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleClickDelete} color="warning" size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export { Task };
