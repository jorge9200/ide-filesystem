import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { ExplorerFile } from '../utils';

type Editor = {
  selectedFile: ExplorerFile;
  updateFile: (fileName: string, newContent: string) => void;
}

export const Editor: React.FC<Editor> = ({ selectedFile, updateFile }) => {
  return <CodeEditor
    value={selectedFile.contents}
    language={selectedFile.name.split('.').pop()}
    placeholder="Please enter some code."
    onChange={(evn) => updateFile(selectedFile.name, evn.target.value)}
    padding={15}
    style={{
      backgroundColor: "white",
      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
    }}
  />
};
