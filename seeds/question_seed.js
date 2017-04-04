exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function() {
      // Inserts seed entries
      return knex('question').insert([{
        id: 1,
        type: 'Data Structure',
        question: 'What is a data structure?'
      },
      {
        id: 2,
        type: 'Algorithm',
        question: 'What is the reverse of 2+2?'
      }
      ]);
    })
};