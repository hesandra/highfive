exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('question').del()
      .then(function() {
        // Inserts seed entries
        return knex('question').insert([
             {
        id: 1,
        title: '',
        type: 'data structure',
        level: 0,
        question: 'Design an elevator',
      },
      {
        id: 2,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you verify a prime number?',

      },
      {
        id: 3,
        title: '',
        type: 'behavioral',
        level: 0,
        question: 'Elaborate how you solved an every day problem',
      },
      {
        id: 4,
        title: '',
        type: 'data structure',
        level: 1,
        question: 'Build a system for a valet parking lot',
      },
      {
        id: 5,
        title: '',
        type: 'algorithm',
        level: 1,
        question: 'If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.',
      },
      {
        id: 6,
        title: '',
        type: 'behavioral',
        level: 1,
        question: 'What would you do if someone in your team decides to not listen to anything you say?',
      },
      {
        id: 7,
        title: '',
        type: 'data structure',
        level: 2,
        question: 'If you had to recreate a better version of paypal, how would you do it?',
      },
      {
        id: 8,
        title: '',
        type: 'algorithm',
        level: 2,
        question: 'How would you create all permutation of a string?',
      },
      {
        id: 9,
        title: '',
        type: 'behavioral',
        level: 2,
        question: 'How would you deal with a conflict in your team?',
      },
      {
        id: 10,
        title: '',
        type: 'data structure',
        level: 0,
        question: 'How would you build a system design for Venmo',
      },
      {
        id: 11,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How will you remove duplicate characters from a sting?',

      },
      {
        id: 12,
        title: '',
        type: 'behavioral',
        level: 0,
        question: 'What was the most uncompfortable situation you have ever been in and how did you solve it?',

      },
      {
        id: 13,
        title: '',
        type: 'data structure',
        level: 1,
        question: 'What would be the system design for an amusement park?',

      },
      {
        id: 14,
        title: '',
        type: 'algorithm',
        level: 1,
        question: 'From a unsorted array, check whether there are any two numbers that will sum up to a given number?',

      },
      {
        id: 15,
        title: '',
        type: 'behavioral',
        level: 1,
        question: 'What would you do if two people in your team just do not get along?',
    
      },
      {
        id: 16,
        title: '',
        type: 'data structure',
        level: 2,
        question: 'How would you build a car rental service?',

      },
      {
        id: 17,
        title: '',
        type: 'algorithm',
        level: 2,
        question: 'Given an array of numbers, return an array with roman numbers',

      },
      {
        id: 18,
        title: '',
        type: 'behavioral',
        level: 2,
        question: 'What is your biggest fear and how have you overcome it?',
      },
      {
        id: 19,
        title: '',
        type: 'data structure',
        level: 0,
        question: 'What is system design?',
      },
      {
        id: 20,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How will you verify a word as palindrome?',
       
      },
      {
        id: 21,
        title: '',
        type: 'behavioral',
        level: 0,
        question: 'Have you ever considered giving up because something felt too difficult to do?',
   
      },
      {
        id: 22,
        title: '',
        type: 'data structure',
        level: 1,
        question: 'How would you build a system for charter flights?',
  
      },
      {
        id: 23,
        title: '',
        type: 'algorithm',
        level: 1,
        question: 'Given an array, return the biggest difference between two numbers in the array',

      },
      {
        id: 24,
        title: '',
        type: 'behavioral',
        level: 1,
        question: 'If you had the chance to solve a problem of the past differently, how would you do it?',

      },
      {
        id: 25,
        title: '',
        type: 'data structure',
        level: 2,
        question: 'How would you build the system design for an airport security check',
  
      },
      {
        id: 26,
        title: '',
        type: 'algorithm',
        level: 2,
        question: 'Given an array of numbers as input, generate an array that has all possible solutions for multiplying, dividing, adding and substracting all numbers with each other in the array',
  
      },
      {
        id: 27,
        title: '',
        type: 'behavioral',
        level: 2,
        question: 'What vocational failure in your life has affected you the most?',

      },
      {
        id: 28,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How could you find all prime factors of a number?',

      },
      {
        id: 29,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How do get nth Fibonacci number?',

      },
      {
        id: 30,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you find the greatest common divisor of two numbers?',

      },
      {
        id: 31,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you remove duplicate members from an array?',
    
      },
      {
        id: 32,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you merge two sorted array?',

      },
      {
        id: 33,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you swap two numbers without using a temporary variable?',

      },
      {
        id: 34,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you reverse a string in JavaScript?',

      },
      {
        id: 35,
        title: '',
        type: 'algorithm',
        level: 0,
        question: 'How would you reverse words in a sentence?',

      }
        ]);
      });
  });
};
