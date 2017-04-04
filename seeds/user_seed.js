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
        location_id: '1',
        profile_img: 'profile_img_here'
      },
      {
        id: 1,
        name: 'Josh Hickman',
        email: 'j@j.com',
        location_id: '1',
        profile_img: 'profile_img_here'
      },
      {
        id: 1,
        name: 'Sandra J',
        email: 's@s.com',
        location_id: '2',
        profile_img: 'profile_img_here'
      }
      ]);
    })
};