import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { ExplorerFile } from '../utils';

type Editor = {
  selectedFile: ExplorerFile;
  modifyFile: (newContent: string) => void;
}

export const Editor: React.FC<Editor> = ({ selectedFile, modifyFile }) => {
  return <CodeEditor
    value={selectedFile.contents}
    language={selectedFile.name.split('.').pop()}
    placeholder="Please enter some code."
    onChange={(evn) => modifyFile(evn.target.value)}
    padding={15}
    style={{
      backgroundColor: "white",
      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
    }}
  />
};
