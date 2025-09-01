
import {useContext} from 'react';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useDialogDelete } from '../context/Tasks';


export default function DialogDelete() {
  const { DialogDeleteInfo, setDialogDeleteInfo } = useDialogDelete();
  function handleClose() {
    setDialogDeleteInfo({ ...DialogDeleteInfo, open: false });
  }
  return (
    <React.Fragment>
      <Dialog
        open={DialogDeleteInfo.open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            borderRadius: 3,
            padding: 3,
            boxShadow: 24,
          },
        }}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 'medium', color: 'text.primary' }}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              cursor: 'pointer',
            }}
          />
            {DialogDeleteInfo.title}
        </DialogTitle>
        <DialogContent sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
          <DialogContentText id="alert-dialog-slide-description">
            {DialogDeleteInfo.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', padding: 2 }}>
          <Button onClick={handleClose} color="inherit">No</Button>
          <Button onClick={()=>{
            DialogDeleteInfo.handleAction();
          }} color="error" variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}