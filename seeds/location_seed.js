exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([{
        id: 1,
        name: 'Los Angeles'
      },
      {
        id: 2,
        name: 'Portland'
      }
      ]);
    });
};
