exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function() {
      // Inserts seed entries
      return knex('company').insert([
        {
          id: 1,
          name: 'Google',
          email: 'info@google.com',
          auth0_id: 'jfdklöa',
          profile_img: 'jfkdöa',
          industry_id: 1,
          location_id: 1
        },
        {
          id: 2,
          name: 'Microsoft',
          email: 'info@microsoft.com',
          auth0_id: 'jfdklöa',
          profile_img: 'jfkdöa',
          industry_id: 2,
          location_id: 2
        },
        {
          id: 3,
          name: 'Netflix',
          email: 'info@netflix.com',
          auth0_id: 'jfdklöa',
          profile_img: 'jfkdöa',
          industry_id: 2,
          location_id: 2
        }
      ]);
    });
};
