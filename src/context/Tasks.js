import { createContext , useContext,useState } from "react";

// === start localStorage content ===
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const navbarStorage = JSON.parse(localStorage.getItem('navbar')) || 'all';
// === end localStorage content ===

// === start createContext ===
const TasksContext = createContext({ tasks: storedTasks, setTasks: () => {} });
const NavBotsContext = createContext({ navBots: navbarStorage, setNavBots: () => {} });
const SnackBarContext = createContext({ open: false, message: '', severity: 'success' });
const DialogDeleteContext = createContext({ open: false, id: null, title: '', message: '', handleAction: () => {} });
const DialogEditContext = createContext({ open: false, id: null, title: '', titletodo:'',description: '', handleAction: () => {} });
// === end createContext ===

// === start Tasks Provider ===
const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(storedTasks);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
// === end Tasks Provider ===

// === start NavBots Provider ===
const NavBotsProvider = ({ children }) => {
  const [navBots, setNavBots] = useState(navbarStorage);
  return (
    <NavBotsContext.Provider value={{ navBots, setNavBots }}>
      {children}
    </NavBotsContext.Provider>
  );
};
// === end navBots Provider ===

// === start SnackBar Provider ===
const SnackBarProvider = ({ children }) => {
  const [SnackBarInfo, setSnackBarInfo] = useState({ open: false, message: '', severity: 'success' });
  return (
    <SnackBarContext.Provider value={{ SnackBarInfo, setSnackBarInfo }}>
      {children}
    </SnackBarContext.Provider>
  );
};
// === end SnackBar Provider ===

// === start DialogDelete Provider ===
const DialogDeleteProvider = ({ children }) => {
  const [DialogDeleteInfo, setDialogDeleteInfo] = useState({ open: false, id: null, title: '', message: '', handleAction: () => {} });
  return (
    <DialogDeleteContext.Provider value={{ DialogDeleteInfo, setDialogDeleteInfo }}>
      {children}
    </DialogDeleteContext.Provider>
  );
};
// === end DialogDelete Provider ===

// === start DialogEdit Provider ===
const DialogEditProvider = ({ children }) => {
  const [DialogEditInfo, setDialogEditInfo] = useState({ open: false, id: null, title: '', titletodo:'',description: '', handleAction: () => {} });
  return (
    <DialogEditContext.Provider value={{ DialogEditInfo, setDialogEditInfo }}>
      {children}
    </DialogEditContext.Provider>
  );
};
// === end DialogEdit Provider ===

// === start custom hooks ===
const useTasks = () => {
  return useContext(TasksContext);
};

const useNavBots = () => {
  return useContext(NavBotsContext);
};

const useSnackBar = () => {
  return useContext(SnackBarContext);
};

const useDialogDelete = () => {
  return useContext(DialogDeleteContext);
};

const useDialogEdit = () => {
  return useContext(DialogEditContext);
};

// === end custom hooks ===

export { TasksContext, NavBotsContext, SnackBarContext, DialogDeleteContext, DialogEditContext, TasksProvider, NavBotsProvider, SnackBarProvider, DialogDeleteProvider, DialogEditProvider, useTasks, useNavBots, useSnackBar, useDialogDelete, useDialogEdit };
