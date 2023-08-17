import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import uniqid from 'uniqid';
import { useState } from "react";
import { useTasksDispatch } from "../todo-container/tasks-context/tasks-context";
import { tasksReducerCases } from "../todo-container/tasks-context/tasks-reducer";

const taskDefault = "";

function AddTask() {
  const [task, setTask] = useState(taskDefault);
  const dispatch = useTasksDispatch();

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    dispatch({
      type: tasksReducerCases.add,
      task: {id: uniqid(), name: task, isDone: false},
    });
    
    setTask(taskDefault);
  }

  return (
    <form style={{margin: "1.25rem 0.75rem 0.75rem 0.75rem",}} onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        value={task}
        InputProps={{
          endAdornment: (
            <IconButton
              type="submit"
              color="primary"
              size="small"
              disabled={!task.trim()}
            >
              <AddIcon />
            </IconButton>
          ),
        }}
        label="Имя новой задачи"
        variant="standard"
        size="small"
        sx={{
          width: "100%",
        }}
      />
    </form>
  );
}

export { AddTask };
