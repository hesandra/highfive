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
            industry_id: 3,
            location_id: 3,
            name: 'Hackreactor',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 4,
            industry_id: 2,
            location_id: 2,
            name: 'Hackreactor',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 4,
            industry_id: 4,
            location_id: 4,
            name: 'Yahoo',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 5,
            industry_id: 5,
            location_id: 5,
            name: 'NFL',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 6,
            industry_id: 6,
            location_id: 6,
            name: 'NBA',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 7,
            industry_id: 7,
            location_id: 7,
            name: 'LG',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 8,
            industry_id: 8,
            location_id: 8,
            name: 'Sony',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 9,
            industry_id: 9,
            location_id: 9,
            name: 'Panasonic',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 10,
            industry_id: 10,
            location_id: 10,
            name: 'Samsung',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/mock_company_1_hq.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          }
        ]);
      });
  });
};
