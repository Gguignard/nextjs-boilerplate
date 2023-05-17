This is a boilerplate for [Next.js](https://nextjs.org/). Including project structure & some dependancies (see package.json for details).

## Getting Started

Start by running the following commands

```bash
npm install
# or
yarn install
# or
pnpm install
```

then

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

The boilerplate comes with folders to help to organize your project. The folders we describe are the one below the `src` folder.

### API

Will contains all file related to API call. You should create one file for each controller you used (in case your backend is on micro-services architecture and you have the same controller for different micro-service. You can create a sub folder for each micro-service).

### App

Nextjs app folder see [Next.js Getting started](https://nextjs.org/docs/getting-started/installation).

### Common

Common code shared across the project.  
Currently contains 2 folders.

- components - React shared components
- hooks - custom React hooks

### Interfaces

Contains all types & interfaces definitions for the project

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
