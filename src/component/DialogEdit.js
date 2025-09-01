import {  useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useDialogEdit } from  "../context/Tasks";
import TextField from "@mui/material/TextField";
import Fade from '@mui/material/Fade';

export default function DialogEdit() {
  const { DialogEditInfo, setDialogEditInfo } = useDialogEdit();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (DialogEditInfo.open) {
      setTitle(DialogEditInfo.titletodo || "");
      setDescription(DialogEditInfo.description || "");
    }
  }, [DialogEditInfo.open, DialogEditInfo.titletodo, DialogEditInfo.description]);

  function handleClose() {
    setDialogEditInfo({ ...DialogEditInfo, open: false });
  }

  return (
    <Dialog
      open={DialogEditInfo.open}
      onClose={handleClose}
      slots={{ transition: Fade }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            p: 2,
            minWidth: { xs: 260, sm: 400 },
            backdropFilter: 'blur(4px)',
            position: 'relative',
            mx: 'auto',
            my: 'auto',
          },
        },
        backdrop: {
          sx: { backgroundColor: 'rgba(0,0,0,0.25)' },
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
        {DialogEditInfo.title}
      </DialogTitle>
      <DialogActions sx={{ flexDirection: 'column', alignItems: 'stretch', gap: 2, p: 2 }}>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label='Title'
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="description"
          name="description"
          label='Description'
          type="text"
          fullWidth
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button
            type="submit"
            onClick={() => {
              DialogEditInfo.handleAction(title, description);
            }}
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}