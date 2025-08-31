## Getting Started, to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page based on the page name by modifying app/[page-name]/page.tsx. The page auto-updates as you edit the file. 

## Collab To start editing, run in the terminal:
```bash
git clone https://github.com/giraen/envisiond.git
```

Then open VSCode on that folder Create a new branch with your name in it
```bash
git checkout -b [feature-your-name]
```

Then after applying any changes
```bash
git add .
git commit -m "your comment here"
```

**NOTE:** Before pushing on a new feature, check if there is a new update from the dev branch
```bash
git checkout dev
git pull origin dev
git checkout [feature-your-name]
git merge dev
git push origin [feature-your-name]
```

**NOTE:** Before starting on a new feature, check if there is a new update from the dev branch
```bash
git checkout dev
git pull origin dev
git checkout -b [feature-your-name]
```

**NOTE:** For first time cloning of the repository, run
```bash
npm install
```
This command will run the necessary packages for the project to run