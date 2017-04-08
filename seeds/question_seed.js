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
          question: 'What is a data structure?',
        },
        {
          id: 2,
          title: '',
          type: 'algorithm',
          level: 0,
          question: 'What is an algorithm?',
        },
        {
          id: 3,
          title: '',
          type: 'behavioral',
          level: 0,
          question: 'Name how you solved an every day problem',
        },
        {
          id: 4,
          title: '',
          type: 'data structure',
          level: 1,
          question: 'What is the reverse of 2+24?',
        },
        {
          id: 5,
          title: '',
          type: 'algorithm',
          level: 1,
          question: 'What is the reverse of 2+5?',
        },
        {
          id: 6,
          title: '',
          type: 'behavioral',
          level: 1,
          question: 'What is the reverse of 2+4?',
        },
        {
          id: 7,
          title: '',
          type: 'data structure',
          level: 2,
          question: 'What is the reverse of 2+67?',
        },
        {
          id: 8,
          title: '',
          type: 'algorithm',
          level: 2,
          question: 'What is the reverse of 90?',
        },
        {
          id: 9,
          title: '',
          type: 'behavioral',
          level: 2,
          question: 'What is the reverse of [1,2,3]?',
        },
        {
          id: 10,
          title: '',
          type: 'data structure',
          level: 0,
          question: 'What is a data structure 894032?',
        },
        {
          id: 11,
          title: '',
          type: 'algorithm',
          level: 0,
          question: 'What is the reverse of 2+fda2?',
        },
        {
          id: 12,
          title: '',
          type: 'behavioral',
          level: 0,
          question: 'What is the reverse of 2+2431?',
        },
        {
          id: 13,
          title: '',
          type: 'data structure',
          level: 1,
          question: 'What is the reverse of 532+2?',
        },
        {
          id: 14,
          title: '',
          type: 'algorithm',
          level: 1,
          question: 'What is the reverse of 2+4322?',
        },
        {
          id: 15,
          title: '',
          type: 'behavioral',
          level: 1,
          question: 'What is the reverse of 4322+2?',
        },
        {
          id: 16,
          title: '',
          type: 'data structure',
          level: 2,
          question: 'What is the reverse of 2+2432?',
        },
        {
          id: 17,
          title: '',
          type: 'algorithm',
          level: 2,
          question: 'What is the reverse of 2+55552?',
        },
        {
          id: 18,
          title: '',
          type: 'behavioral',
          level: 2,
          question: 'What is the reverse of 23434+2?',
        },
        {
          id: 19,
          title: '',
          type: 'data structure',
          level: 0,
          question: 'What is a data structure * 10?',
        },
        {
          id: 20,
          title: '',
          type: 'algorithm',
          level: 0,
          question: 'What is the reverse of 2rewqrq+2?',
        },
        {
          id: 21,
          title: '',
          type: 'behavioral',
          level: 0,
          question: 'What is the reverse of 2zzzzz+2?',
        },
        {
          id: 22,
          title: '',
          type: 'data structure',
          level: 1,
          question: 'What is the reverse of 2+rrrr2?',
        },
        {
          id: 23,
          title: '',
          type: 'algorithm',
          level: 1,
          question: 'What is the reverse of wwww2+2?',
        },
        {
          id: 24,
          title: '',
          type: 'behavioral',
          level: 1,
          question: 'What is the reverse of 2twew+2?',
        },
        {
          id: 25,
          title: '',
          type: 'data structure',
          level: 2,
          question: 'What is the reverse of 2rewew+2?',
        },
        {
          id: 26,
          title: '',
          type: 'algorithm',
          level: 2,
          question: 'What is the reverse of 2rewrew+2?',
        },
        {
          id: 27,
          title: '',
          type: 'behavioral',
          level: 2,
          question: 'What is the reverse of 2reww+2?',
        }
        ]);
      })
  })
};