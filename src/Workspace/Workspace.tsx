import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'

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

  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={20} minSize={10}>
        <Box sx={{ bgcolor: grey[100], padding: '15px', height: '100%' }} data-test="explorer-box">
          {roots.map((root) => <Explorer file={root} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />)}
        </Box>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={80} minSize={40}>
        <Box sx={{ height: '100%' }} data-test="explorer-box">
          {selectedFile && <Editor selectedFile={selectedFile} updateFile={updateFile} />}
        </Box>
      </Panel>
    </PanelGroup>
  )
};
