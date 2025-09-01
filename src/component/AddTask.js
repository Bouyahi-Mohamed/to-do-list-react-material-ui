import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useTasks ,useSnackBar} from "../context/Tasks";



export default function AddTask() {
  const { tasks, setTasks } = useTasks();
  const [newTask, setNewTask] = useState({ title: "", description: "", state: false });
  const { SnackBarInfo, setSnackBarInfo } = useSnackBar();

  const handleAddTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, { ...newTask, id: crypto.randomUUID() }]);
    setNewTask({ title: "", description: "", state: false });
    localStorage.setItem('tasks', JSON.stringify([...tasks, { ...newTask, id: crypto.randomUUID() }]));
    setSnackBarInfo({ ...SnackBarInfo, open: true, message: "Task added successfully!", severity: "success" });
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" }, mt: 2 , display: 'flex', justifyContent: 'center', justifyItems: 'center'}}
      noValidate
      autoComplete="off"
    >
      <TextField value={newTask.title} sx={{ flex: 4 ,flexGrow: 4 }} id="outlined-basic" label="Add Title" variant="outlined"  color="danger" onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}/>
      <TextField value={newTask.description} sx={{ flex: 4 ,flexGrow: 4 }} id="outlined-basic" label="Add Description" variant="outlined"  color="danger" onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}/>
      <Button sx={{ flex: 1 }} variant="contained" color="success" onClick={handleAddTask}>
        Add Task
      </Button>
    </Box>
  );
}
