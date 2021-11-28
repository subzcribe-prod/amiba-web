import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ dialog, setDialog }) {
  const handleDialog = (open) => setDialog({ ...dialog, open });
  const handleAgree = (clickedAgree) => {
    setDialog({ open: false, clickedAgree });
  };

  return (
    <Dialog open={dialog.open} onClose={() => handleDialog(false)}>
      <DialogTitle>Are you sure you want to delete this version?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You won't be able to get back any data associated with it.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleAgree(false)}>Disagree</Button>
        <Button onClick={() => handleAgree(true)} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
