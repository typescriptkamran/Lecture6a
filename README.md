# Lecture6a

# Setting Up a Node.js Project with TypeScript

This guide will walk you through the steps to set up a Node.js project with TypeScript. Follow these instructions to get started.

## Prerequisites

1. Install Node.js version 18.17.1 LTS from the official Node.js website: [Node.js](https://nodejs.org/en).
2. Install TypeScript globally using the following command:
   ```sh
   npm install -g typescript
   ```

## Getting Started

1. Create a new folder for your project and open it in your preferred code editor.
2. Inside the folder, create a file named `index.ts`.

## Initialize TypeScript Configuration

1. Initialize TypeScript configuration by running:
   ```sh
   tsc --init
   ```
2. Generate JavaScript files from TypeScript:
   ```sh
   tsc
   ```

## Initialize Node.js Project

1. Initialize a Node.js project by running:
   ```sh
   npm init -y
   ```

## Install Node.js Type Definitions

Install type definitions for Node.js using the following command:
```sh
npm i @types/node -D
```

## Configure tsconfig.json and package.json

1. Adjust the `tsconfig.json` file according to the instructions from the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/esm-node.html):
   - Set `"target": "ES2022"`
   - Set `"module": "NodeNext"`
   - Set `"moduleResolution": "NodeNext"`
   - If using JSON files, uncomment `"resolveJsonModule": true`
   - Set `"outDir": "./dist"` to specify an output folder for emitted files.

2. In the `package.json` file, add `"type": "module"` under the project's name.

## Create .gitignore File

1. Create a file named `.gitignore`.
2. Inside the `.gitignore` file, write:
   ```
   node_modules
   ```

This will exclude the `node_modules` directory from version control.

Now you're ready to start building your Node.js project using TypeScript! Happy coding!
```

