import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

import { ExplorerFile, pathsToTree } from '../utils';
import defaultFiles from '../defaultFiles';
import { Explorer } from './Explorer/Explorer';
import { Editor } from './Editor';

export const Workspace = () => {
  let roots = pathsToTree(defaultFiles);
  const [selectedFile, setSelectedFile] = useState<ExplorerFile>();

  const updateFile = (fileName: string, newContent: string) => {
    defaultFiles.filter((file) => file.path.includes(fileName)).at(0).contents = newContent
    roots = pathsToTree(defaultFiles);
  }

  return <Box sx={{
    display: 'grid',
    gridAutoColumns: '1fr',
    gap: 1,
    height: '100%'
  }}>
    <Box sx={{ gridRow: '1', gridColumn: 'span 1', bgcolor: grey[100], padding: '15px' }} data-test="explorer-box">
      {roots.map((root) => <Explorer file={root} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />)}
    </Box>
    <Box sx={{ gridRow: '1', gridColumn: 'span 3' }} data-test="editor-box">
      {selectedFile && <Editor selectedFile={selectedFile} updateFile={updateFile} />}
    </Box>
  </Box>;
};
