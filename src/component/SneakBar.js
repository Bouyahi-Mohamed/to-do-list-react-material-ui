import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSnackBar } from '../context/Tasks';

export default function Snackbars() {
  const { SnackBarInfo , setSnackBarInfo } = useSnackBar();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarInfo({ ...SnackBarInfo, open: false });
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar open={SnackBarInfo.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={SnackBarInfo.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {SnackBarInfo.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
