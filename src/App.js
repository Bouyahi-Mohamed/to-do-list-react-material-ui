import './App.css';
import TodoList from './component/TodoList';
import RootContainer from './component/RootContainer';
import Title from './component/Title';
import ListButton from './component/NavButton';
import AddTask from './component/AddTask';
import SnackBar from './component/SneakBar';
import DialogDelete from './component/DialogDelete';
import DialogEdit from './component/DialogEdit';
import {TasksContext,NavBotsContext,SnackBarContext,DialogDeleteContext,DialogEditContext} from './context/Tasks';
import { useState } from 'react';
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const navbarStorage = JSON.parse(localStorage.getItem('navbar')) || 'all';
function App() {
  const [navBots, setNavBots] = useState(navbarStorage);
  const [tasks, setTasks] = useState(storedTasks);
  const [SnackBarInfo, setSnackBarInfo] = useState({ open: false, message: '', severity: 'success' });
  const [DialogDeleteInfo, setDialogDeleteInfo] = useState({ open: false, title: '', message: '', handleAction: () => {} });
  const [DialogEditInfo, setDialogEditInfo] = useState({ open: false, id: null, title: '', titletodo: '', description: '', handleAction: () => {} });

  return (
    <NavBotsContext.Provider value={{navBots, setNavBots}}>
    <TasksContext.Provider value={{tasks, setTasks}}>
      <SnackBarContext.Provider value={{SnackBarInfo, setSnackBarInfo}}>
      <RootContainer>
        <SnackBar />
        <Title />
        <ListButton />
        <DialogDeleteContext.Provider value={{ DialogDeleteInfo, setDialogDeleteInfo }}>
         <DialogEditContext.Provider value={{ DialogEditInfo, setDialogEditInfo }}>
          <DialogEdit />
          <DialogDelete />
          <TodoList />
        </DialogEditContext.Provider>
        </DialogDeleteContext.Provider>
          <AddTask />
      </RootContainer>
    </SnackBarContext.Provider>
  </TasksContext.Provider>
</NavBotsContext.Provider>
  );
} 

export default App;
