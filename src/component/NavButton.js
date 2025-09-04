import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavBots, useSnackBar } from '../context/contextTasks';

export default function NavButton() {
  const { navBots, setNavBots } = useNavBots();
  const { SnackBarInfo, setSnackBarInfo } = useSnackBar();

  const buttons = [
    { label: 'All', value: 'all' },
    { label: 'Done', value: 'done' },
    { label: 'Undone', value: 'undone' }
  ];

  const handleClick = (value) => {
    setNavBots(value);
    setSnackBarInfo({ ...SnackBarInfo, open: true, message: `Navigation set to ${value}`, severity: "info" });
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
      {buttons.map(btn => (
        <Button
          key={btn.value}
          variant={navBots === btn.value ? 'contained' : 'outlined'}
          color={navBots === btn.value ? 'primary' : 'inherit'}
          sx={{
            borderRadius: 2,
            boxShadow: navBots === btn.value ? 3 : 0,
            fontWeight: navBots === btn.value ? 700 : 400,
            textTransform: 'capitalize',
            transition: 'box-shadow 0.2s, background 0.2s',
            ':hover': {
              boxShadow: 4,
              backgroundColor: navBots === btn.value ? 'primary.main' : 'grey.100',
            },
          }}
          onClick={() => handleClick(btn.value)}
        >
          {btn.label}
        </Button>
      ))}
    </Stack>
  );
}
