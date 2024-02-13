import React from 'react';
import { Directory } from './Directory';
import { File } from './File';
import Stack from '@mui/material/Stack';

export const Explorer = () => {
  return (
    <Stack>
      <Directory />
      <File />
    </Stack>
  )
};
