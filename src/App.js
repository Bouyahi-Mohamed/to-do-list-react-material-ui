import './App.css';
import TodoList from './component/TodoList';
import RootContainer from './component/RootContainer';
import Title from './component/Title';
import ListButton from './component/NavButton';
import AddTask from './component/AddTask';
import SnackBar from './component/SneakBar';
import DialogDelete from './component/DialogDelete';
import DialogEdit from './component/DialogEdit';
import {DialogDeleteContext,DialogEditContext,TasksProvider,NavBotsProvider,SnackBarProvider,DialogDeleteProvider,DialogEditProvider} from './context/Tasks';
import { useState } from 'react';

function App() {
  
  const [DialogDeleteInfo, setDialogDeleteInfo] = useState({ open: false, title: '', message: '', handleAction: () => {} });
  const [DialogEditInfo, setDialogEditInfo] = useState({ open: false, id: null, title: '', titletodo: '', description: '', handleAction: () => {} });

  return (
<NavBotsProvider>
    <TasksProvider>
      <SnackBarProvider>
      <RootContainer>
        <SnackBar />
        <Title />
        <ListButton />
        <DialogDeleteProvider>
         <DialogEditProvider>
          <DialogEdit />
          <DialogDelete />
          <TodoList />
        </DialogEditProvider>
        </DialogDeleteProvider>
          <AddTask />
      </RootContainer>
    </SnackBarProvider>
  </TasksProvider>
</NavBotsProvider>
  );
} 

export default App;
