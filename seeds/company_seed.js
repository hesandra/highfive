exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('company').del()
      .then(function() {
        // Inserts seed entries
        return knex('company').insert([
          {
            id: 1,
            name: 'Google',
            email: 'info@google.com',
            industry_id: 1,
            location_id: 1
          },
          {
            id: 2,
            name: 'Microsoft',
            email: 'info@microsoft.com',
            industry_id: 2,
            location_id: 2
          },
          {
            id: 3,
            name: 'Netflix',
            email: 'info@netflix.com',
            industry_id: 2,
            location_id: 2
          }
        ]);
      });
  })
};
