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
        type: 'data structure',
        level: 0,
        question: 'Design an elevator',
        jobpost_id: 1
      },
      {
        id: 2,
        type: 'algorithm',
        level: 0,
        question: 'How would you verify a prime number?',
        jobpost_id: 1
      },
      {
        id: 3,
        type: 'behavioral',
        level: 0,
        question: 'Elaborate how you solved an every day problem',
        jobpost_id: 1
      },
      {
        id: 4,
        type: 'data structure',
        level: 1,
        question: 'Build a system for a valet parking lot',
        jobpost_id: 1
      },
      {
        id: 5,
        type: 'algorithm',
        level: 1,
        question: 'If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.',
        jobpost_id: 1
      },
      {
        id: 6,
        type: 'behavioral',
        level: 1,
        question: 'What would you do if someone in your team decides to not listen to anything you say?',
        jobpost_id: 1
      },
      {
        id: 7,
        type: 'data structure',
        level: 2,
        question: 'If you had to recreate a better version of paypal, how would you do it?',
        jobpost_id: 1
      },
      {
        id: 8,
        type: 'algorithm',
        level: 2,
        question: 'How would you create all permutation of a string?',
        jobpost_id: 1
      },
      {
        id: 9,
        type: 'behavioral',
        level: 2,
        question: 'How would you deal with a conflict in your team?',
        jobpost_id: 1
      },
      {
        id: 10,
        type: 'data structure',
        level: 0,
        question: 'How would you build a system design for Venmo',
        jobpost_id: 1
      },
      {
        id: 11,
        type: 'algorithm',
        level: 0,
        question: 'How will you remove duplicate characters from a sting?',
        jobpost_id: 1
      },
      {
        id: 12,
        type: 'behavioral',
        level: 0,
        question: 'What was the most uncompfortable situation you have ever been in and how did you solve it?',
        jobpost_id: 1
      },
      {
        id: 13,
        type: 'data structure',
        level: 1,
        question: 'What would be the system design for an amusement park?',
        jobpost_id: 1
      },
      {
        id: 14,
        type: 'algorithm',
        level: 1,
        question: 'From a unsorted array, check whether there are any two numbers that will sum up to a given number?',
        jobpost_id: 1
      },
      {
        id: 15,
        type: 'behavioral',
        level: 1,
        question: 'What would you do if two people in your team just do not get along?',
        jobpost_id: 1
      },
      {
        id: 16,
        type: 'data structure',
        level: 2,
        question: 'How would you build a car rental service?',
        jobpost_id: 1
      },
      {
        id: 17,
        type: 'algorithm',
        level: 2,
        question: 'Given an array of numbers, return an array with roman numbers',
        jobpost_id: 1
      },
      {
        id: 18,
        type: 'behavioral',
        level: 2,
        question: 'What is your biggest fear and how have you overcome it?',
        jobpost_id: 1
      },
      {
        id: 19,
        type: 'data structure',
        level: 0,
        question: 'What is system design?',
        jobpost_id: 1
      },
      {
        id: 20,
        type: 'algorithm',
        level: 0,
        question: 'How will you verify a word as palindrome?',
        jobpost_id: 1
      },
      {
        id: 21,
        type: 'behavioral',
        level: 0,
        question: 'Have you ever considered giving up because something felt too difficult to do?',
        jobpost_id: 1
      },
      {
        id: 22,
        type: 'data structure',
        level: 1,
        question: 'How would you build a system for charter flights?',
        jobpost_id: 1
      },
      {
        id: 23,
        type: 'algorithm',
        level: 1,
        question: 'Given an array, return the biggest difference between two numbers in the array',
        jobpost_id: 1
      },
      {
        id: 24,
        type: 'behavioral',
        level: 1,
        question: 'If you had the chance to solve a problem of the past differently, how would you do it?',
        jobpost_id: 1
      },
      {
        id: 25,
        type: 'data structure',
        level: 2,
        question: 'How would you build the system design for an airport security check',
        jobpost_id: 1
      },
      {
        id: 26,
        type: 'algorithm',
        level: 2,
        question: 'Given an array of numbers as input, generate an array that has all possible solutions for multiplying, dividing, adding and substracting all numbers with each other in the array',
        jobpost_id: 1
      },
      {
        id: 27,
        type: 'behavioral',
        level: 2,
        question: 'What vocational failure in your life has affected you the most?',
        jobpost_id: 1
      },
      {
        id: 28,
        type: 'algorithm',
        level: 0,
        question: 'How could you find all prime factors of a number?',
        jobpost_id: 1
      },
      {
        id: 29,
        type: 'algorithm',
        level: 0,
        question: 'How do get nth Fibonacci number?',
        jobpost_id: 1
      },
      {
        id: 30,
        type: 'algorithm',
        level: 0,
        question: 'How would you find the greatest common divisor of two numbers?',
        jobpost_id: 1
      },
      {
        id: 31,
        type: 'algorithm',
        level: 0,
        question: 'How would you remove duplicate members from an array?',
        jobpost_id: 1
      },
      {
        id: 32,
        type: 'algorithm',
        level: 0,
        question: 'How would you merge two sorted array?',
        jobpost_id: 1
      },
      {
        id: 33,
        type: 'algorithm',
        level: 0,
        question: 'How would you swap two numbers without using a temporary variable?',
        jobpost_id: 1
      },
      {
        id: 34,
        type: 'algorithm',
        level: 0,
        question: 'How would you reverse a string in JavaScript?',
        jobpost_id: 1
      },
      {
        id: 35,
        type: 'algorithm',
        level: 0,
        question: 'How would you reverse words in a sentence?',
        jobpost_id: 1
      }
        ]);
      })
  })
};