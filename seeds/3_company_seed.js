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
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/Microsoft.jpg',
            email: 'info@microsoft.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 3,
            industry_id: 3,
            location_id: 3,
            name: 'Hackreactor',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/hackreactor.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 4,
            industry_id: 2,
            location_id: 2,
            name: 'Facebook',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/facebook.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 5,
            industry_id: 5,
            location_id: 5,
            name: 'NFL',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/nfl.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 6,
            industry_id: 6,
            location_id: 6,
            name: 'NBA',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/nba.jpeg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 7,
            industry_id: 7,
            location_id: 7,
            name: 'Samsung',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/samsung.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 8,
            industry_id: 8,
            location_id: 8,
            name: 'Sony',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/Sony.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 9,
            industry_id: 9,
            location_id: 9,
            name: 'Panasonic',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/Panasonic.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 10,
            industry_id: 10,
            location_id: 10,
            name: 'Twitter',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/Twitter.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 11,
            industry_id: 1,
            location_id: 1,
            name: 'ESPN',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/ESPN.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 12,
            industry_id: 2,
            location_id: 2,
            name: 'Kellogs',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/Kellogs.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 13,
            industry_id: 3,
            location_id: 3,
            name: 'McDonalds',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/McDonalds.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 14,
            industry_id: 4,
            location_id: 4,
            name: 'Burger King',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/bk.jpeg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 15,
            industry_id: 5,
            location_id: 5,
            name: 'CA Gov',
            profile_img: 'https://s3-us-west-1.amazonaws.com/highfivestatic/CAgov.jpg',
            email: 'info@info.com',
            address: '',
            auth0_id: ''
          },
          {
            id: 16,
            industry_id: 5,
            location_id: 5,
            name: 'airbnb',
            profile_img: '',
            email: 'airbnb@gmail.com',
            address: '',
            auth0_id: 'auth0|58f7a50abef25408f66aa180'
          }
        ]);
      });
  });
};
