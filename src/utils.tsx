export type DefaultFile = {
  path: string,
  contents: string,
};

export type ExplorerFile = {
  name: string,
  children: ExplorerFile[] | [],
  contents: string,
};

export const pathsToTree = (files: DefaultFile[]) => {
  let tree = { roots: [] };

  // Alphabetize files on horizontal display
  files.sort((fileA, fileB) => {
    return fileA.path.split('/').pop() < fileB.path.split('/').pop() ? -1 : 1;
  })

  // Transform list of files into tree with path structure
  for (const file of files) {
    let context = tree;

    for (const routeChunk of file.path.split('/')) {
      if (!context[routeChunk]) {
        context[routeChunk] = { roots: [] };
        context.roots.push({ name: routeChunk, contents: file.contents, children: context[routeChunk].roots });
      }

      context = context[routeChunk];
    }
  }

  const roots: ExplorerFile[] = tree.roots;
  return roots;
}