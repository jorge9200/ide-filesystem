import React, { useState } from 'react';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';

import { ExplorerFile } from '../../utils';
import { Directory } from './Directory';
import { File } from './File';

type Explorer = {
  file: ExplorerFile;
  selectedFile: ExplorerFile;
  setSelectedFile: React.Dispatch<React.SetStateAction<ExplorerFile>>;
}

export const Explorer: React.FC<Explorer> = ({ file, selectedFile, setSelectedFile }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (file.children.length === 0) {
    return (
      <Box
        sx={{ cursor: 'default', display: 'flex', alignItems: 'center', paddingY: '4px', bgcolor: `${selectedFile && selectedFile.name === file.name ? grey[300] : ''}` }}
        onClick={() => { setSelectedFile(file) }}
        data-test="file"
      >
        <File file={file} />
      </Box>)
  } else {
    return (
      <section>
        <Box
          sx={{ cursor: 'default', display: 'flex', alignItems: 'center', marginY: '2px' }}
          onClick={() => setIsOpen(!isOpen)}
          data-test="directory"
        >
          <Directory file={file} isOpen={isOpen} />
        </Box>
        {isOpen &&
          <Box sx={{ marginLeft: '10px' }}>
            {file.children.map((child: ExplorerFile) => <Explorer file={child} selectedFile={selectedFile} setSelectedFile={setSelectedFile} key={child.name} />)}
          </Box>}
      </section>
    )
  }
}
