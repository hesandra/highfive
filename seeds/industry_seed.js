exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('industry').del()
      .then(() => {
        // Inserts seed entries
        return knex('industry').insert([
          {
            id: 1,
            name: 'Sports',
          },
          {
            id: 2,
            name: 'Finance',
          },
          {
            id: 3,
            name: 'Fashion',
          },
          {
            id: 4,
            name: 'Ad-Tech'
          },
          {
            id: 5,
            name: 'Gaming'
          },
          {
            id: 6,
            name: 'Entertainment'
          },
          {
            id: 7,
            name: 'Electronic'
          },
          {
            id: 8,
            name: 'Aviation'
          },
          {
            id: 9,
            name: 'Food'
          },
          {
            id: 10,
            name: 'Travel'
          },
          {
            id: 11,
            name: 'Transportion'
          },
          {
            id: 12,
            name: 'Space Aviation'
          },
          {
            id: 13,
            name: 'Beauty'
          },
          {
            id: 14,
            name: 'Fitness'
          },
          {
            id: 15,
            name: 'Social Media'
          },
          {
            id: 16,
            name: 'Healthcare'
          },
          {
            id: 17,
            name: 'Arts'
          }
        ]);
      });
  });
};
