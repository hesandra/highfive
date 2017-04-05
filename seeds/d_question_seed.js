exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function() {
      // Inserts seed entries
      return knex('question').insert([{
        id: 1,
        type: 'Data Structure',
        level: 1,
        question: 'What is a data structure?',
        jobpost_id: 1
      },
      {
        id: 2,
        type: 'Algorithm',
        level: 2,
        question: 'What is the reverse of 2+2?',
        jobpost_id: 1
      }
      ]);
    })
};