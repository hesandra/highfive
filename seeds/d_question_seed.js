exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function() {
      // Inserts seed entries
      return knex('question').insert([{
        id: 1,
        type: 'data structure',
        level: 0,
        question: 'What is a data structure?',
        jobpost_id: 1
      },
      {
        id: 2,
        type: 'algorithm',
        level: 0,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 3,
        type: 'behavioral',
        level: 0,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 4,
        type: 'data structure',
        level: 1,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 5,
        type: 'algorithm',
        level: 1,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 6,
        type: 'behavioral',
        level: 1,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 7,
        type: 'data structure',
        level: 2,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 8,
        type: 'algorithm',
        level: 2,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      },
      {
        id: 9,
        type: 'behavioral',
        level: 2,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      }
      ]);
    })
};