export default function tasksReducer(currentTasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        description: action.payload.description,
        ischecked: false,
      };
      const updatedTasks = [...currentTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "REMOVE_TASK": {
      const updatedTasks = currentTasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "EDIT_TASK": {
      const updatedTasks = currentTasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "SET_TASKS": {
      localStorage.setItem("tasks", JSON.stringify(action.payload));
      return action.payload;
    }
    default:
      return currentTasks;
  }
}
