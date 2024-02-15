import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { ExplorerFile } from '../../utils';

type Directory = {
  file: ExplorerFile;
  isOpen: boolean;
}

export const Directory: React.FC<Directory> = ({ file, isOpen }) => {
  return (
    <>
      {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
      <span>{file.name}</span>
    </>
  )
};
