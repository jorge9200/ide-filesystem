import React, { useState } from 'react';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';

import { ExplorerFile } from '../../utils';
import { Directory } from './Directory';
import { File } from './File';
import { Draggable } from '../../DnD/Draggable';
import { Droppable } from '../../DnD/Droppable';

type Explorer = {
  file: ExplorerFile;
  selectedFile: ExplorerFile;
}

export const Explorer: React.FC<Explorer> = ({ file, selectedFile }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (file.children.length === 0) {
    return (
      <Draggable id={file.name} data={file}>
        <Box
          sx={{ cursor: 'default', display: 'flex', alignItems: 'center', paddingY: '4px', bgcolor: `${selectedFile && selectedFile.name === file.name ? grey[300] : ''}` }}
          data-cy="file"
        >
          <File file={file} />
        </Box>
      </Draggable>)
  } else {
    return (
      <section>
        <Droppable key={file.name} id={file.name} data={file}>
          <Box
            sx={{ cursor: 'default', display: 'flex', alignItems: 'center', marginY: '2px' }}
            onClick={() => setIsOpen(!isOpen)}
            data-cy="directory"
          >
            <Directory file={file} isOpen={isOpen} />
          </Box>
        </Droppable>
        {isOpen &&
          <Box sx={{ marginLeft: '10px' }}>
            {file.children.map((child: ExplorerFile) => <Explorer file={child} selectedFile={selectedFile} key={child.name} />)}
          </Box>}
      </section>
    )
  }
}
