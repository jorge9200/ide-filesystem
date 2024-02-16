import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import DEFAULT_FILES from '../defaultFiles';

import { DefaultFile, ExplorerFile, modifyPath, pathsToTree } from '../utils';
import { Explorer } from './Explorer/Explorer';
import { Editor } from './Editor';

export const Workspace = () => {
  const sensors = useSensors(useSensor(MouseSensor));
  const [selectedFile, setSelectedFile] = useState<ExplorerFile>();
  const [defaultFiles, setDefaultFiles] = useState<DefaultFile[]>(DEFAULT_FILES)
  const [roots, setRoots] = useState<ExplorerFile[]>(pathsToTree(DEFAULT_FILES));

  const updateFiles = (modifiedFiles: DefaultFile[]) => {
    setDefaultFiles(modifiedFiles);
    setRoots(pathsToTree(modifiedFiles));
  }

  const modifyFile = (newContent: string) => {
    const modifiedFiles = defaultFiles.map((file) => file.path.includes(selectedFile.name) ? { ...file, contents: newContent } : file);
    updateFiles(modifiedFiles);
  }

  const handleDragEnd = (event) => {
    const fileDragged = event.active.data.current.node;
    if (!event.over) return setSelectedFile(fileDragged);

    const dirDropped = event.over.data.current.node;
    const newPath = `${dirDropped.path}/${fileDragged.name}`;
    const modifiedFiles = modifyPath(defaultFiles, fileDragged.name, newPath);
    updateFiles(modifiedFiles);
  }

  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={20} minSize={10}>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          <Box sx={{ bgcolor: grey[100], padding: '15px', height: '100%' }} data-cy="explorer-box">
            {roots.map((root) => <Explorer file={root} selectedFile={selectedFile} key={root.name} />)}
          </Box>
        </DndContext>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={80} minSize={40}>
        <Box sx={{ height: '100%' }} data-cy="editor-box">
          {selectedFile && <Editor selectedFile={selectedFile} modifyFile={modifyFile} />}
        </Box>
      </Panel>
    </PanelGroup>
  )
};
