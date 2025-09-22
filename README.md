# Random data page
This is a TypeScript + HTML project that fetches data about people from an external API and displays it dynamically on a webpage using DOM manipulation.

## Goals of the Assignment
1. Practice TypeScript Fundamentals
- Define and use custom types (Person).
3. Master DOM Manipulation
- Use getElementById and createElement to interact with the DOM.
4. Work with Realistic Data
- Consume data from the Mockaroo API.
- Parse and format dates, booleans, and strings for display.
5. Improve Data Presentation
- Display summaries (e.g., total number of children).
- Format and label data for readability (e.g., converting can_program to "Yes"/"No").
6. Build a Foundation for Future Features
- Prepare for enhancements like filtering, sorting, and exporting data.


## Project Structure
```

├── index.html          // Main HTML entry point  
├── main.ts             // TypeScript logic  
├── main.js             // Compiled JavaScript output  
├── tsconfig.json       // TypeScript configuration  
├── package.json        // Project metadata and dependencies  
├── package-lock.json   // Locked versions of installed packages  
├── node_modules/       // Installed libraries  
└── README.md           // Project documentation
```
## Setup Instructions
1. Initialize the project:
```
 npm init -y
```
 
2. Install TypeScript:
```
 npm install typescript --save-dev
```
3. Create TypeScript configuration file:
```
 npx tsc --init
```
4.	Generates a `tsconfig.json` file to configure the TypeScript compiler. Example configuration:
```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
5. Create a new `main.ts` file and write your logic inside.
```
 main.ts
```
6. Сompile `main.ts` to generate `main.js` file:
```
 npx tsc main.ts
```
7. Compile TypeScript to JavaScript:
```
 npx tsc
```
8. Create a new `index.html` file and link the compiled script:
```
index.html
```
```
<script src="main.js" type="module"></script>
```
9. Open `index.html` in your browser using Live Server to see the output results

## Technologies Used
- TypeScript
- HTML5
- DOM API
- Mockaroo (for data generation)

## Fetches data from 
[Mockaroo API](https://my.api.mockaroo.com/people.json?key=74a64e00)

##  Output Link
This is the link to the output results: https://tanjasav.github.io/M3G10-Loops_and_Iterators/
