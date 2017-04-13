exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('location').del()
      .then(function () {
        // Inserts seed entries
        return knex('location').insert([
          {
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
          },
          {
            id: 4,
            city: 'San Diego',
            state: 'CA'
          },
          {
            id: 5,
            city: 'Columbus',
            state: 'OH'
          },
          {
            id: 6,
            city: 'Chicago',
            state: 'IL'
          },
          {
            id: 7,
            city: 'Gangnam',
            state: 'Seoul'
          },
          {
            id: 8,
            city: 'Kansas City',
            state: 'MI'
          },
          {
            id: 9,
            city: 'Santa Monica',
            state: 'CA'
          },
          {
            id: 10,
            city: 'Irvine',
            state: 'CA'
          }
        ]);
      });
  })
};
