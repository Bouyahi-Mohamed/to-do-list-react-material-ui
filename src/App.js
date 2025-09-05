import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import './App.css';
import { ThemeProviderWrapper } from './Contexts/Theme';
import { Typography } from '@mui/material';

function App() {
  return (
    <ThemeProviderWrapper>
      <div className="App">
      <Typography variant="h1"  fontFamily={'IBM'}>السلام عليكم</Typography>
      <Typography variant="h1" fontFamily={'Ubuntu'}>it is good </Typography>


        <h1>Welcome to the Practice UI</h1>
        <Button variant="contained"><AccountCircleIcon /> Profile</Button>
      </div>
    </ThemeProviderWrapper>
  );
}

export default App;