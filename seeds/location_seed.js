exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('location').del()
      .then(function () {
        // Inserts seed entries
        return knex('location').insert([{
          id: 1,
          city: 'Los Angeles',
          state: 'CA'
        },
        {
          id: 2,
          city: 'Portland',
          state: 'OR'
        },
        {
          id: 3,
          city: 'New York',
          state: 'NY'
        }
        ]);
      });
  })
};
