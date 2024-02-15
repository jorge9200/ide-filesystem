import React from 'react';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import { ExplorerFile } from '../../utils';

type File = {
  file: ExplorerFile;
}

export const File: React.FC<File> = ({ file }) => {
  return (
    <>
      <InsertDriveFileOutlinedIcon fontSize="small" />
      <span>{file.name}</span>
    </>
  )
};
