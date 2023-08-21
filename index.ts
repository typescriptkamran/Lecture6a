import a from "./data/data1.js"
import {b, c, sum} from "./data/data1.js"
import {num1, num2, students} from "./data/data2.js"


console.log("🚀 ~ file: index.ts:4 ~ students:", students)
console.log("🚀 ~ file: index.ts:4 ~ num1:", num1)






















/*  
Steps to star node project with typescript:
1. install node js 18.17.1 LTS  version from https://nodejs.org/en
2. to install typesript from command prompt run: 
install npm install -g typescript
3. open new folder with vs code editor
Make a file index.ts
4. to initialize the project with typescript: 
tsc --init
tsc
5. Make it a Node.js project by giving the following command:

 npm init -y

6. nstall types module for Node.js with command on command prompt:
 npm i @types/node -D

7. Need to change in tsconfig.json and package.json files according to following documentation:
https://www.typescriptlang.org/docs/handbook/esm-node.html
in tsconfig.json:
line 14:  "target": "ES2022",
line 28:  "module": "NodeNext",
line 30:  "moduleResolution": "NodeNext"
if using json files then uncomment the following line
line 42:  "resolveJsonModule": true,

in package.json add the following under name:
in line 3: "type": "module",
8. make .gitignore file and write in it: 
 node_modules

 */