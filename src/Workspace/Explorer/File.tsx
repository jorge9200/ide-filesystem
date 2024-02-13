import React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Box from '@mui/material/Box';


export const File = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} >
      <InsertDriveFileIcon />
      <span>File</span>
    </Box>
  )
};
