import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import { useTasksDispatch } from "../todo-container/tasks-context/tasks-context";
import { useState } from "react";
import { tasksReducerCases } from "../todo-container/tasks-context/tasks-reducer";

function EditTask(props) {
  const { id, name: defaultName, setIsEditing, isEditingDefault } = props;

  const [newName, setNewName] = useState(defaultName);
  const dispatch = useTasksDispatch();

  function handleChangeName(e) {
    setNewName(e.target.value);
  }

  function handleClickDone() {
    dispatch({
      type: tasksReducerCases.changeName,
      id,
      name: newName,
    });

    setIsEditing(isEditingDefault);
  }

  const InputProps = {
    endAdornment: (
      <IconButton
        onClick={handleClickDone}
        disabled={!newName.trim()}
        color="primary"
        size="small"
      >
        <DoneIcon />
      </IconButton>
    ),
  };

  return (
    <Box
      sx={{
        m: "0rem 0.75rem 0.5rem 0.75rem",
      }}
    >
      <TextField
        value={newName}
        onChange={handleChangeName}
        InputProps={InputProps}
        label="Редактирование задачи"
        variant="standard"
        size="small"
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
}

export { EditTask };
