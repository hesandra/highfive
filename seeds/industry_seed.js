exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('industry').del()
      .then(function () {
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
            name: 'Education'
          }
        ]);
      });    
  })
};
