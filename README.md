## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

Only E2E testing was made. It can be executed by running `npx cypress open` on the console. You will need to have the development server runing as the testings are made on it.

## Future improvements
- Styling can be improved, some styles with [MUI](https://mui.com/) have been made in order to have something at least visible. Refactor use of `sx` MUI property and use styled components or other framework like [Tailwind](https://tailwindcss.com/) instead (personal preference).
- UI/UX can be improved, I would like to change icons depending file type, add hover states, improve the code editor and improve the general look of the app.
- Testing can be improved, by adding more coverage and unit-testing. Drag and drop functionality haven't been tested but some cypress support commands has been added in order to be done in future aditions.
- Add a backend (via express or nextjs) and a real DB to support changes on files and paths, this will help to maintain an updated object on both client and server.
- Once a backend is added, remove the use of both flat/tree objects on client side, only one should be managed (tree one probably, for better rendering).
- Fix bug that make moving all files from a folder to make it disappear, caused by transforming tree into list on every movement.
- Improve typing and add types for uses of third party libraries like [DnD](https://docs.dndkit.com/).
- Finish secondary goals like:
    - Implement the feature of adding new files and folders to the file tree.
    - Implement the feature of deleting files and folders from the file tree.
    - Being able to have a full-text search in the file pane so you can search for a file by name (not by path).
