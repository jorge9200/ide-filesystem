import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';


export const Directory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
      <span>Folder</span>
    </Box>
  )
};
