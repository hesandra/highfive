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
          question: 'What is a data structure?',
          jobpost_id: 1
        },
        {
          id: 2,
          type: 'algorithm',
          level: 0,
          question: 'What is an algorithm?',
          jobpost_id: 1
        },
        {
          id: 3,
          type: 'behavioral',
          level: 0,
          question: 'Name how you solved an every day problem',
          jobpost_id: 1
        },
        {
          id: 4,
          type: 'data structure',
          level: 1,
          question: 'What is the reverse of 2+24?',
          jobpost_id: 1
        },
        {
          id: 5,
          type: 'algorithm',
          level: 1,
          question: 'What is the reverse of 2+5?',
          jobpost_id: 1
        },
        {
          id: 6,
          type: 'behavioral',
          level: 1,
          question: 'What is the reverse of 2+4?',
          jobpost_id: 1
        },
        {
          id: 7,
          type: 'data structure',
          level: 2,
          question: 'What is the reverse of 2+67?',
          jobpost_id: 1
        },
        {
          id: 8,
          type: 'algorithm',
          level: 2,
          question: 'What is the reverse of 90?',
          jobpost_id: 1
        },
        {
          id: 9,
          type: 'behavioral',
          level: 2,
          question: 'What is the reverse of [1,2,3]?',
          jobpost_id: 1
        },
        {
          id: 10,
          type: 'data structure',
          level: 0,
          question: 'What is a data structure 894032?',
          jobpost_id: 1
        },
        {
          id: 11,
          type: 'algorithm',
          level: 0,
          question: 'What is the reverse of 2+fda2?',
          jobpost_id: 1
        },
        {
          id: 12,
          type: 'behavioral',
          level: 0,
          question: 'What is the reverse of 2+2431?',
          jobpost_id: 1
        },
        {
          id: 13,
          type: 'data structure',
          level: 1,
          question: 'What is the reverse of 532+2?',
          jobpost_id: 2
        },
        {
          id: 14,
          type: 'algorithm',
          level: 1,
          question: 'What is the reverse of 2+4322?',
          jobpost_id: 2
        },
        {
          id: 15,
          type: 'behavioral',
          level: 1,
          question: 'What is the reverse of 4322+2?',
          jobpost_id: 2
        },
        {
          id: 16,
          type: 'data structure',
          level: 2,
          question: 'What is the reverse of 2+2432?',
          jobpost_id: 2
        },
        {
          id: 17,
          type: 'algorithm',
          level: 2,
          question: 'What is the reverse of 2+55552?',
          jobpost_id: 2
        },
        {
          id: 18,
          type: 'behavioral',
          level: 2,
          question: 'What is the reverse of 23434+2?',
          jobpost_id: 2
        },
        {
          id: 19,
          type: 'data structure',
          level: 0,
          question: 'What is a data structure * 10?',
          jobpost_id: 2
        },
        {
          id: 20,
          type: 'algorithm',
          level: 0,
          question: 'What is the reverse of 2rewqrq+2?',
          jobpost_id: 2
        },
        {
          id: 21,
          type: 'behavioral',
          level: 0,
          question: 'What is the reverse of 2zzzzz+2?',
          jobpost_id: 2
        },
        {
          id: 22,
          type: 'data structure',
          level: 1,
          question: 'What is the reverse of 2+rrrr2?',
          jobpost_id: 2
        },
        {
          id: 23,
          type: 'algorithm',
          level: 1,
          question: 'What is the reverse of wwww2+2?',
          jobpost_id: 2
        },
        {
          id: 24,
          type: 'behavioral',
          level: 1,
          question: 'What is the reverse of 2twew+2?',
          jobpost_id: 3
        },
        {
          id: 25,
          type: 'data structure',
          level: 2,
          question: 'What is the reverse of 2rewew+2?',
          jobpost_id: 3
        },
        {
          id: 26,
          type: 'algorithm',
          level: 2,
          question: 'What is the reverse of 2rewrew+2?',
          jobpost_id: 3
        },
        {
          id: 27,
          type: 'behavioral',
          level: 2,
          question: 'What is the reverse of 2reww+2?',
          jobpost_id: 3
        }
        ]);
      })
  })
};