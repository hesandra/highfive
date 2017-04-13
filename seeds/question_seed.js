exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('question').del()
        .then(function () {
          return knex('question').insert([
            { id: 1, title: '', type: 'Behavioral', level: 0, question: 'Elaborate how you solved an every day problem.' },
            { id: 2, title: '', type: 'Behavioral', level: 0, question: 'What is your greatest strength?' },
            { id: 3, title: '', type: 'Behavioral', level: 0, question: 'What is your greatest weakness?' },
            { id: 4, title: '', type: 'Behavioral', level: 0, question: 'What makes a person smart?' },
            { id: 5, title: '', type: 'Behavioral', level: 0, question: 'Explain to me what programming is.' },
            { id: 6, title: '', type: 'Behavioral', level: 0, question: 'Have you ever considered giving up because something felt too difficult to do?' },
            { id: 7, title: '', type: 'Behavioral', level: 0, question: 'What is your biggest fear and how have you overcome it?' },
            { id: 8, title: '', type: 'Behavioral', level: 0, question: 'What was the most uncomfortable situation you have ever been in and why?' },
            { id: 9, title: '', type: 'Behavioral', level: 0, question: 'What would you do if two people in your team just do not get along?' },
            { id: 10, title: '', type: 'Behavioral', level: 0, question: 'What vocational failure in your life has affected you the most?' },
            { id: 11, title: '', type: 'Algorithm', level: 0, question: 'How would you verify a prime number?' },
            { id: 12, title: '', type: 'Algorithm', level: 0, question: 'Reverse a string.' },
            { id: 13, title: '', type: 'Algorithm', level: 0, question: 'Given an array of numbers, return an array with roman numbers.' },
            { id: 14, title: '', type: 'Algorithm', level: 0, question: 'How would you reverse words in a sentence?' },
            { id: 15, title: '', type: 'Algorithm', level: 0, question: 'How would you swap two numbers without using a temporary variable?' },
            { id: 16, title: '', type: 'Algorithm', level: 0, question: 'How would you remove duplicate members from an array?' },
            { id: 17, title: '', type: 'Algorithm', level: 0, question: 'Given an array of numbers as input, generate an array that has all possible solutions for multiplying, dividing, adding and substracting all numbers with each other in the array.' },
            { id: 18, title: '', type: 'Algorithm', level: 0, question: 'How would you create all permutations of a string?' },
            { id: 19, title: '', type: 'Algorithm', level: 0, question: 'From a unsorted array, check whether there are any two numbers that will sum up to a given number.' },
            { id: 20, title: '', type: 'Algorithm', level: 0, question: 'How would you verify a word as palindrome?' },
            { id: 21, title: '', type: 'System Design', level: 0, question: 'Design an elevator.' },
            { id: 22, title: '', type: 'System Design', level: 0, question: 'Design a parking lot.' },
            { id: 23, title: '', type: 'System Design', level: 0, question: 'Design Venmo.' },
            { id: 24, title: '', type: 'System Design', level: 0, question: 'Design Mint.' },
            { id: 25, title: '', type: 'System Design', level: 0, question: 'Design a League of Legends character.' },
            { id: 26, title: '', type: 'System Design', level: 0, question: 'Design an NCAA bracket.' },
            { id: 27, title: '', type: 'System Design', level: 0, question: 'Design an NBA playoff Bracket.' },
            { id: 28, title: '', type: 'System Design', level: 0, question: 'Design a clothing factory.' },
            { id: 29, title: '', type: 'System Design', level: 0, question: 'Design a calculator.' },
            { id: 30, title: '', type: 'System Design', level: 0, question: 'Design a Blackjack game.' }
          ]);
        });
    });
};
