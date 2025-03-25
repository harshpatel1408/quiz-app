export const quizData = {
    "categories": [
      {
        "id": "js_basics",
        "name": "JavaScript Basic",
        "questions": [
          {
            "id": "q1",
            "question": "What is the correct syntax for referring to an external script called 'script.js'?",
            "options": [
              "A. <script name='script.js'>",
              "B. <script href='script.js'>",
              "C. <script src='script.js'>",
              "D. <script file='script.js'>"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "q2",
            "question": "Which company developed JavaScript?",
            "options": [
              "A. Microsoft",
              "B. Netscape",
              "C. Google",
              "D. Mozilla"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "q3",
            "question": "What is the output of `console.log(typeof null)`?",
            "options": [
              "A. null",
              "B. undefined",
              "C. object",
              "D. string"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "q4",
            "question": "Which of the following is NOT a JavaScript data type?",
            "options": [
              "A. Boolean",
              "B. Number",
              "C. Character",
              "D. Undefined"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "q5",
            "question": "How do you create a function in JavaScript?",
            "options": [
              "A. function = myFunction()",
              "B. function myFunction()",
              "C. create myFunction()",
              "D. define myFunction()"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "q6",
            "question": "What will `console.log(2 + '2')` output?",
            "options": [
              "A. 4",
              "B. 22",
              "C. NaN",
              "D. Undefined"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "q7",
            "question": "What is the default value of `let` variables in JavaScript?",
            "options": [
              "A. 0",
              "B. null",
              "C. undefined",
              "D. NaN"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "q8",
            "question": "Which symbol is used for comments in JavaScript?",
            "options": [
              "A. //",
              "B. <!-- -->",
              "C. #",
              "D. /* */"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "q9",
            "question": "What is the output of `console.log(0 == false)`?",
            "options": [
              "A. true",
              "B. false",
              "C. undefined",
              "D. error"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "q10",
            "question": "What is the scope of a variable declared with `let`?",
            "options": [
              "A. Global",
              "B. Function",
              "C. Block",
              "D. Object"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          }
        ]
      },
      {
        "id": "reactjs",
        "name": "React.js",
        "questions": [
          {
            "id": "r1",
            "question": "What is the command to create a new React app?",
            "options": [
              "A. npm init react-app my-app",
              "B. npx create-react-app my-app",
              "C. npm start react my-app",
              "D. npx react-create-app my-app"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "r2",
            "question": "What is a React component?",
            "options": [
              "A. A reusable piece of UI",
              "B. A function returning HTML",
              "C. Both A and B",
              "D. None of the above"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "r3",
            "question": "Which method is used to update state in React class components?",
            "options": [
              "A. this.changeState()",
              "B. this.setState()",
              "C. this.updateState()",
              "D. this.modifyState()"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "r4",
            "question": "What is JSX in React?",
            "options": [
              "A. A syntax extension for JavaScript",
              "B. A templating language",
              "C. A JavaScript library",
              "D. A CSS framework"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "r5",
            "question": "What is the purpose of useEffect in React?",
            "options": [
              "A. To manage side effects",
              "B. To replace setState",
              "C. To handle props",
              "D. None of the above"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "r6",
            "question": "Which React hook is used to manage state?",
            "options": [
              "A. useState",
              "B. useContext",
              "C. useReducer",
              "D. All of the above"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "r7",
            "question": "What does React use for efficient updates?",
            "options": [
              "A. DOM",
              "B. Virtual DOM",
              "C. Shadow DOM",
              "D. Synthetic DOM"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "r8",
            "question": "What is the default port for React development server?",
            "options": [
              "A. 3000",
              "B. 8000",
              "C. 8080",
              "D. 5000"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "r9",
            "question": "What is the purpose of React.Fragment?",
            "options": [
              "A. To style components",
              "B. To group elements without adding extra nodes to the DOM",
              "C. To handle API calls",
              "D. To render lists"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "r10",
            "question": "How do you pass data from a parent to a child component?",
            "options": [
              "A. Using state",
              "B. Using props",
              "C. Using context",
              "D. Using refs"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          }
        ]
      },
      {
        "id": "nodejs",
        "name": "Node.js",
        "questions": [
          {
            "id": "n1",
            "question": "What is Node.js?",
            "options": [
              "A. A web browser",
              "B. A runtime environment for JavaScript",
              "C. A JavaScript framework",
              "D. A package manager"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "n2",
            "question": "Which module is used to create a web server in Node.js?",
            "options": [
              "A. http",
              "B. fs",
              "C. url",
              "D. path"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "n3",
            "question": "What is npm?",
            "options": [
              "A. Node.js Package Manager",
              "B. Node.js Plugin Manager",
              "C. Node.js Program Manager",
              "D. Node.js Proxy Manager"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "n4",
            "question": "Which function is used to read files in Node.js?",
            "options": [
              "A. readFile()",
              "B. fs.readFile()",
              "C. file.read()",
              "D. open.readFile()"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "n5",
            "question": "What is the purpose of the 'path' module in Node.js?",
            "options": [
              "A. To handle file paths",
              "B. To make HTTP requests",
              "C. To parse URLs",
              "D. To manage memory"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          },
          {
            "id": "n6",
            "question": "How do you install a package globally in npm?",
            "options": [
              "A. npm install <package-name>",
              "B. npm install -g <package-name>",
              "C. npm global <package-name>",
              "D. npm install global <package-name>"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "n7",
            "question": "Which statement is true about Node.js?",
            "options": [
              "A. It is multi-threaded",
              "B. It is single-threaded",
              "C. It is asynchronous and single-threaded",
              "D. It is synchronous and multi-threaded"
            ],
            "correctAnswer": "C",
            "timeLimit": 10
          },
          {
            "id": "n8",
            "question": "Which method is used to handle events in Node.js?",
            "options": [
              "A. eventListener()",
              "B. on()",
              "C. emit()",
              "D. trigger()"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "n9",
            "question": "What does 'process' represent in Node.js?",
            "options": [
              "A. A core module for handling streams",
              "B. A global object that provides information about the current process",
              "C. A method for handling errors",
              "D. A library for building REST APIs"
            ],
            "correctAnswer": "B",
            "timeLimit": 10
          },
          {
            "id": "n10",
            "question": "Which command starts a Node.js application?",
            "options": [
              "A. node <filename>",
              "B. start <filename>",
              "C. npm run <filename>",
              "D. run <filename>"
            ],
            "correctAnswer": "A",
            "timeLimit": 10
          }
        ]
      }
    ]
  }
  