
import './App.css';
import { ThemeProviderWrapper } from './Contexts/Theme';
// matieral ui components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import components
import BasicCard from './components/Card';


function App() {
  return (
    <ThemeProviderWrapper>
       <Container maxWidth="false" >
        <Box sx={{ bgcolor: '#1976d2', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BasicCard />
        </Box>
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;