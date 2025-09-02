
export default function tasksReducer(state= { tasks: [] }, action) {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = { id: crypto.randomUUID(), title: action.payload.title, description: action.payload.description, state: false };

    localStorage.setItem('tasks', JSON.stringify([...(state.tasks || []), newTask]));
      return {
        ...state,
        tasks: [...(state.tasks || []), newTask],
      };
    case 'REMOVE_TASK': {
      const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case 'EDIT_TASK': {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case 'SET_TASKS': {
      const updatedTasks = action.payload;
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    default:
      return state;
  }
}