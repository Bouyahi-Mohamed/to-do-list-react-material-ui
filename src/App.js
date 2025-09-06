
import './App.css';
import { ThemeProviderWrapper } from './Contexts/Theme';
// import React from 'react';
import { useEffect ,useState} from 'react';
// matieral ui components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import components
import BasicCard from './components/Card';
// external libraries
import axios from 'axios';


function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Example API call using axios
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=36.8065&lon=10.1815&appid=c680c19447bdb188d17ae242bb0a7c5b')
      .then(response => {
        // Handle the API response
        setWeatherData(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ThemeProviderWrapper>
       <Container maxWidth="false" >
        <Box sx={{ bgcolor: '#1976d2', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BasicCard weatherData={weatherData} />
        </Box>
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;