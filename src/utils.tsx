export type DefaultFile = {
  path: string,
  contents: string,
};

export type ExplorerFile = {
  name: string,
  children: ExplorerFile[] | [],
  contents: string,
  path: string,
};

export const sortFiles = (roots: ExplorerFile[]) => {
  roots.sort((fileA, fileB) => {
    if (fileA.children.length && !fileB.children.length) {
      return -1;
    } else if (!fileA.children.length && fileB.children.length) {
      return 1;
    } else {
      return fileA.name.toLowerCase().localeCompare(fileB.name.toLowerCase());
    }
  })
  roots.forEach((file) => {
    if (file.children.length) sortFiles(file.children);
  })
}

export const pathsToTree = (files: DefaultFile[]) => {
  let tree = { roots: [] };

  // Transform flat list of files into tree with path structure
  for (const file of files) {
    let context = tree;

    for (const routeChunk of file.path.split('/')) {
      if (!context[routeChunk]) {
        context[routeChunk] = { roots: [] };

        const chunkPathIndex = file.path.split('/').indexOf(routeChunk) + 1;
        context.roots.push({
          name: routeChunk,
          contents: file.contents,
          children: context[routeChunk].roots,
          path: file.path.split('/').slice(0, chunkPathIndex).join('/'),
        });
      }

      context = context[routeChunk];
    }
  }

  const roots: ExplorerFile[] = tree.roots;
  sortFiles(roots);
  return roots;
}

export const modifyPath = (defaultFiles: DefaultFile[], name: string, newPath: string) => {
  return defaultFiles.map((file) => (file.path.includes(name) ? { ...file, path: newPath } : file));
}