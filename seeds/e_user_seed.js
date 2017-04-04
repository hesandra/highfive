exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'Andrew Yi',
          email: 'a@a.com',
          auth0_id: 'adssa',
          location_id: 1,
          profile_img: 'profile_img_here'
        },
        {
          id: 2,
          name: 'Josh Hickman',
          email: 'j@j.com',
          auth0_id: 'asdas',
          location_id: 1,
          profile_img: 'profile_img_here'
        },
        {
          id: 3,
          name: 'Sandra J',
          email: 's@s.com',
          auth0_id: 'auth0 id here',
          location_id: 2,
          profile_img: 'profile_img_here'
        }
      ]);
    });
};
