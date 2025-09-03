import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CloseIcon from '@mui/icons-material/Close';
//import tasks data
import { useTasks,useDispatch,useSnackBar,useNavBots,useDialogDelete,useDialogEdit} from "../context/contextTasks";
import{ useState } from "react";



// Use React state for cards
export default function TodoList() {
  const tasks  = useTasks();
  const dispatch = useDispatch();
  const { navBots } = useNavBots();
  const [selectedCard] = useState(0);
  return (
    <Box
      sx={{
        width: "90%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px))",
        gap: 2,
        margin: "0 auto",
        overflow: "auto",
        maxHeight: 300,
        minHeight: 300,
        alignContent: "flex-start",

      }}>

  <RenderTodoList tasks={tasks} navBots={navBots} selectedCard={selectedCard} dispatch={dispatch}/>

    </Box>
  );
}

// delete task button with dialog
export function DeleteBtn({ id }) {
  const dispatch = useDispatch();
  const { SnackBarInfo, setSnackBarInfo } = useSnackBar();
  const { DialogDeleteInfo, setDialogDeleteInfo } = useDialogDelete();

const handleDeleteClick = () => {
  setDialogDeleteInfo({
    ...DialogDeleteInfo,
    open: true,
    id: id,
    title: 'Delete Task',
    message: 'Are you sure you want to delete this task?',
    handleAction: () => {
      setDialogDeleteInfo({ ...DialogDeleteInfo, open: false });
      // delete logic here
      dispatch({ type: 'REMOVE_TASK', payload: id });
      setSnackBarInfo({ ...SnackBarInfo, open: true, message: "Task deleted successfully!", severity: "success" });
    }
  });
};

  return (
    <>
      <IconButton
        sx={{
          backgroundColor: "#ffffffff",
          color: "red",
          ":hover": { backgroundColor: "lightgray" },
        }}
        aria-label="delete"
        variant="outlined"
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
     
    </>
  );
}

// update task button with dialog

export  function EditBtn({ id }) {
  const { SnackBarInfo, setSnackBarInfo } = useSnackBar();
  const { DialogEditInfo, setDialogEditInfo } = useDialogEdit();
  const tasks  = useTasks();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    const taskToEdit = tasks.find(t => t.id === id);
    setDialogEditInfo({
      ...DialogEditInfo,
      open: true,
      id: id,
      title: 'Edit Task',
      titletodo: taskToEdit.title || '',
      description: taskToEdit.description || '',
      handleAction: (updatedTitle, updatedDescription) => {
        setDialogEditInfo({ ...DialogEditInfo, open: false });
        // update logic here
        dispatch({ type: 'EDIT_TASK', payload: { id: taskToEdit.id, title: updatedTitle, description: updatedDescription } });
        setSnackBarInfo({ ...SnackBarInfo, open: true, message: "Task updated successfully!", severity: "success" });

      }
    });
  };


  return (
    <>
      <IconButton
        sx={{
          backgroundColor: "#ffffffff",
          color: "blue",
          ":hover": { backgroundColor: "lightgray" },
        }}
        aria-label="edit"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}
  
// check button that defines that action done or undone
function CheckBtn({ id }) {
  const tasks  = useTasks();
  const dispatch = useDispatch();
  const task = tasks.find((t) => t.id === id);
  const { SnackBarInfo, setSnackBarInfo } = useSnackBar();

  if (!task) return null;

  return (
    <>
      <IconButton
        sx={{
          backgroundColor: "#ffffffff",
          color: task.state ? "red" : "green",
          ":hover": { backgroundColor: "lightgray" },
        }}
        aria-label={task.state ? "check" : "close"}
        onClick={() => {
          localStorage.setItem(
            "tasks",
            JSON.stringify(
              tasks.map((c) =>
                c.id === task.id ? { ...c, state: !c.state } : c
              )
            )
          );
          dispatch({ type: 'EDIT_TASK', payload: { id: task.id, state: !task.state } });
          setSnackBarInfo({ ...SnackBarInfo, open: true, message: task.state ? "Task marked as undone!" : "Task marked as done!", severity: "success" });
        }}
      >
        {task.state ? <CloseIcon /> : <CheckIcon />}
      </IconButton>
    </>
  );
}

// function that renders the todo list depending on the selected filter
export function RenderTodoList({ tasks, navBots, selectedCard, setTasks }) {
  return (
    <>
      {tasks
        .filter((task) => {
          if (navBots === "undone") {
            return task.state === false;
          } else if (navBots === "done") {
            return task.state === true;
          }
          return true;
        })
        .map((task, index) => (
          <TodoCard key={task.id} task={task} setTasks={setTasks} selectedCard={selectedCard} index={index}/>
        ))}
    </>
  );
}


// card component that will rendered
function TodoCard({ task ,selectedCard,index}) {
  
  return (
    <>
       <Card key={task.id}>
          <CardActionArea
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              backgroundColor: task.state ? 'green' : "#4994bcff",
            }}
          >
            <CardContent sx={{ height: "100%", color: "#ffffffff" }}>
              <Grid container spacing={2}>
                <Grid item size={8}>
                  <Typography variant="h5" component="h1">
                    {task.title}
                  </Typography>
                  <Typography variant="body2" color="text.white">
                    {task.description}
                  </Typography>
                </Grid>
                <Grid item size={4}>
                  <Stack direction="row" spacing={1}>
                    <DeleteBtn id={task.id} />
                    <EditBtn id={task.id} />
                    <CheckBtn id={task.id} />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>

      </>

  )
}