import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const DetailsModal = ({ open, handleClose }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Details submitted:', details);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Fill Up Your Details</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          name="name"
          value={details.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          name="email"
          value={details.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Message"
          type="text"
          fullWidth
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={details.message}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
