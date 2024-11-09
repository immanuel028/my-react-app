import React, { useState } from 'react';
import { Button } from '@mui/material';
import DetailsModal from './DetailModal';

const DetailButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Applicant Registration
      </Button>
      <DetailsModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default DetailButton;
