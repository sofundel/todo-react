const tasksReducerCases = {
  add: "add",
  delete: "delete",
  changeStatus: "changeStatus",
  changeName: "changeName",
};

function tasksReducer(tasks, action) {
  switch (action.type) {
    case tasksReducerCases.add: {
      const newTasks = [...tasks, action.task];

      try {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      } catch {
        console.error("Ошибка при преобразовании JSON");
      }
      return newTasks;
    }
    case tasksReducerCases.delete: {
      const newTasks = tasks.filter((task) => task.id !== action.id);

      try {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      } catch {
        console.error("Ошибка при преобразовании JSON");
      }
      return newTasks;
    }
    case tasksReducerCases.changeStatus: {
      const newTasks = [...tasks];
      newTasks.forEach((task) => {
        if (task.id === action.id) task.isDone = !action.isDone;
      });

      try {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      } catch {
        console.error("Ошибка при преобразовании JSON");
      }

      return newTasks;
    }
    case tasksReducerCases.changeName: {
      const newTasks = [...tasks];
      newTasks.forEach((task) => {
        if (task.id === action.id) task.name = action.name;
      });

      try {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      } catch {
        console.error("Ошибка при преобразовании JSON");
      }

      return newTasks;
    }
    default: {
      // eslint-disable-next-line no-console
      console.warn(`В tasksReduser необработанный кейс: ${action.type}`);

      return newTasks;
    }
  }
}

export { tasksReducer, tasksReducerCases };
