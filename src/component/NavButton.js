import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { useNavBots,useSnackBar } from '../context/contextTasks';
export default function ListButton() {
  const { navBots, setNavBots } = useNavBots();
  const { SnackBarInfo, setSnackBarInfo } = useSnackBar();

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setNavBots(newAlignment);
      setSnackBarInfo({ ...SnackBarInfo, open: true, message: `Navigation set to ${newAlignment}`, severity: "info" });
    }
  };

  return (
    <Box  sx={{
        display: 'flex',
        justifyContent: 'center',
    
      my: 2
      }}>
    <ToggleButtonGroup
      sx={{
        display: 'flex',
        justifyContent: 'center',
        "& .MuiToggleButton-root": {
          transition: "background-color 120ms, color 120ms, border-color 120ms",
        },
        "& .MuiToggleButton-root:hover": {
          backgroundColor: "#3c29eeff",
          color: "white",
          borderColor: "none",
        },
        "& .Mui-selected": {
          color: "white",
          backgroundColor: "#6b7070ff",
        },
      }}
      value={navBots}
      exclusive // This prop makes sure only one button can be selected at a time
      onChange={handleChange}
      aria-label="Platform"
      color="white"
    >
      <ToggleButton sx={{ backgroundColor: navBots === 'all' ? "#3c29eeff" : 'primary.main' ,color: 'white'}} value='all' onClick={() => {setNavBots('all')
        localStorage.setItem('navbar', JSON.stringify('all'));
      }}>All</ToggleButton>
      <ToggleButton sx={{ backgroundColor: navBots === 'done' ? "#3c29eeff" : 'primary.main' ,color: 'white'}} value='done' onClick={() => {setNavBots('done')
        localStorage.setItem('navbar', JSON.stringify('done'));
      }}>Done</ToggleButton>
      <ToggleButton sx={{ backgroundColor: navBots === 'undone' ? "#3c29eeff" : 'primary.main' ,color: 'white'}} value='undone' onClick={() => {setNavBots('undone')
        localStorage.setItem('navbar', JSON.stringify('undone'));
      }}>Undone</ToggleButton>
    </ToggleButtonGroup>
</Box>  
  );
}
