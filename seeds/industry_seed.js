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
            name: 'Fishing'
          }
        ]);
      });
  });
};
