import React from 'react';
import { Explorer } from './Explorer/Explorer';
import { Editor } from './Editor';
import Box from '@mui/material/Box';

export const Workspace = () => {
  return <Box sx={{
    display: 'grid',
    gridAutoColumns: '1fr',
    gap: 1,
    height: '100%'
  }}>
    <Box sx={{ gridRow: '1', gridColumn: 'span 1', bgcolor: 'text.disabled' }}>
      <Explorer />
    </Box>
    <Box sx={{ gridRow: '1', gridColumn: 'span 3' }}>
      <Editor />
    </Box>
  </Box>;
};
