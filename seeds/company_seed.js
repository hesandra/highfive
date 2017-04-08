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
            industry_id: 1,
            location_id: 1,
            name: 'Google',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@google.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 2,
            industry_id: 2,
            location_id: 2,
            name: 'Microsoft',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@microsoft.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 3,
            industry_id: 2,
            location_id: 2,
            name: 'Hackreactor',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@hr.com',
            address: '',
            auth0_id: ''
          }
        ]);
      });
  });
};
