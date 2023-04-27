export const questions = [
    {
        question: "How do you declare the variable \'shoes\' in javascript?",
        answers:  [
            {text: 'let shoes =', correct: true},
            {text: 'dec shoes =', correct: false},
            {text: 'this shoes =', correct: false},
            {text:'shoes =', correct: false},
                ]
    },
    {
        question: "What does the 'typeof' operator do in JavaScript?",
        answers: [
          { text: "Checks if a value is null", correct: false },
          { text: "Checks if a value is undefined", correct: false },
          { text: "Returns the data type of a value", correct: true },
          { text: "Checks if a value is a number", correct: false }
        ]
      },
      {
        question: "What is the correct way to write a comment in JavaScript?",
        answers: [
          { text: "// This is a comment", correct: true },
          { text: "<!-- This is a comment -->", correct: false },
          { text: "' This is a comment", correct: false },
          { text: "/* This is a comment */", correct: false }
        ]
      },
      {
        question: "What is an immediately-invoked function expression (IIFE) in JavaScript?",
        answers: [
          { text: "A function that runs as soon as it is defined", correct: true },
          { text: "A function that is defined but never used", correct: false },
          { text: "A function that is only executed when called", correct: false },
          { text: "A function that is called by another function", correct: false }
        ]
      },
      {
        question: "What is the difference between '==' and '===' operators in JavaScript?",
        answers: [
          { text: "'==' compares the value only, while '===' compares value and type", correct: true },
          { text: "'===' compares the value only, while '==' compares value and type", correct: false },
          { text: "'==' compares value and type, while '===' compares the value only", correct: false },
          { text: "There is no difference between '==' and '===' operators in JavaScript", correct: false }
        ]
      },
      {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: [
          { text: "'null' is a value that represents 'no value', while 'undefined' means a variable has been declared but has not been assigned a value", correct: true },
          { text: "'undefined' is a value that represents 'no value', while 'null' means a variable has been declared but has not been assigned a value", correct: false },
          { text: "There is no difference between 'null' and 'undefined' in JavaScript", correct: false },
          { text: "'null' and 'undefined' are the same thing in JavaScript", correct: false }
        ]
      },
      {
        question: "What is the purpose of the 'return' keyword in JavaScript functions?",
        answers: [
          { text: "To stop the execution of a function", correct: false },
          { text: "To specify the value that a function should return", correct: true },
          { text: "To define a variable within a function", correct: false },
          { text: "To declare a new function", correct: false }
        ]
      },
      {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: [
        {text: 'Enforces stricter parsing and error handling of code', correct: true},
        {text: 'Allows for looser variable declaration rules', correct: false},
        {text: 'Disables garbage collection in memory management', correct: false},
        {text: 'Enables automatic semicolon insertion', correct: false},
        ]
        },
        
        {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        answers: [
        {text: "'let' is block-scoped, while 'var' is function-scoped", correct: true},
        {text: "'var' is block-scoped, while 'let' is function-scoped", correct: false},
        {text: "'let' is used for declaring constants, while 'var' is used for variables", correct: false},
        {text: 'There is no difference between the two', correct: false},
        ]
        },
        
        {
        question: "What does the 'map' method do in JavaScript arrays?",
        answers: [
        {text: 'Creates a new array with the results of calling a provided function on every element in the calling array', correct: true},
        {text: 'Sorts the elements of an array in place', correct: false},
        {text: 'Returns the first element in the array that satisfies a provided testing function', correct: false},
        {text: 'Removes the last element from an array and returns it', correct: false},
        ]
        },
]