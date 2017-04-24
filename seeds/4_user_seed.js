exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          {
            id: 6,
            name: 'Andrew Yi',
            email: 'a@a.com',
            auth0_id: '',
            location_id: 1,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAllAAAAJDk0NTNhYzIxLTlhY2ItNDkwNi04NGNiLWNjNDcxM2JmYjhhNQ.jpg',
            github_url: 'https://github.com/andrewjyi',
            linkedin_url: 'https://www.linkedin.com/in/andrewjyi/'
          },
          {
            id: 7,
            name: 'Josh Hickman',
            email: 'j@j.com',
            auth0_id: 'asdas',
            location_id: 2,
            profile_img: 'https://avatars2.githubusercontent.com/u/15853188?v=3',
            github_url: 'https://github.com/Jahosh',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'

          },
          {
            id: 8,
            name: 'Sandra Jayasingha',
            email: 's@s.com',
            auth0_id: '',
            location_id: 3,
            profile_img: 'https://avatars1.githubusercontent.com/u/18369270?v=3&s=460',
            github_url: 'https://github.com/hesandra',
            linkedin_url: 'https://www.linkedin.com/in/henkelsandra/'
          },
          {
            id: 4,
            name: 'Regina Lee',
            email: 'r@r.com',
            auth0_id: '',
            location_id: 5,
            profile_img: 'https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/17358980_10158361295515263_363005577058082924_o.jpg?oh=c2d7a5b6ee38658a439c3e739829fab2&oe=594D0D7D',
            github_url: 'https://github.com/reginavlee',
            linkedin_url: 'https://www.linkedin.com/in/reginavlee/'
          },
          {
            id: 5,
            name: 'Armen Rostamian',
            email: 'ar@ar.net',
            auth0_id: '',
            location_id: 6,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAyvAAAAJDRmNzA0Y2QwLTA5MTYtNDkyZi1iODY1LWQ1ZjA5YTE0YmYwYQ.jpg',
            github_url: 'https://github.com/armenr',
            linkedin_url: 'https://www.linkedin.com/in/armenr/'
          },
          {
            id: 1,
            name: 'Alex Kim',
            email: 'ak@ak.com',
            auth0_id: '',
            location_id: 7,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARgAAAAJGQzZTUwYTYyLTJkMmEtNDJjYi1hODUwLTIwYjAwMTM2ZGIzMQ.jpg',
            github_url: 'https://github.com/jinhwanee93',
            linkedin_url: 'https://www.linkedin.com/in/alexandrekim93/'
          },
          {
            id: 2,
            name: 'Brandon Kleiman',
            email: 'bk@bk.com',
            auth0_id: '',
            location_id: 8,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhyAAAAJGFhYWY4ZGQ1LWQxM2UtNDk5ZC1hZDBjLWVlZjU4NWFhMjliZg.jpg',
            github_url: 'https://github.com/BrandonKleiman',
            linkedin_url: 'https://www.linkedin.com/in/brandonkleiman/'
          },
          {
            id: 3,
            name: 'Emily Yang',
            email: 'ey@ey.com',
            auth0_id: '',
            location_id: 9,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAH3AAAAJDQ4YWZjOTIyLTk4MDQtNGE2Ni04ZWI1LTNlNDg1ZjJkZmQ2MQ.jpg',
            github_url: 'https://github.com/yangemilym',
            linkedin_url: 'https://www.linkedin.com/in/yangemilym/'
          },
          {
            id: 9,
            name: 'Zach Carr',
            email: 'zc@zc.com',
            auth0_id: '',
            location_id: 10,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuvAAAAJGVmOGIwZTVhLWM3ODQtNGUwZS1hNDI3LTI2ZjM1YTBlNmRkNg.jpg',
            github_url: 'https://github.com/zc0311',
            linkedin_url: 'https://www.linkedin.com/in/zachcarrla/'
          },
          {
            id: 10,
            name: 'Marcie Anderson',
            email: 'ma@ma.com',
            auth0_id: '',
            location_id: 1,
            profile_img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAbZAAAAJDRiMGRiYzM2LTEyZmEtNGRjZS04N2U4LTJkZTE0NzkwNGU5Zg.jpg',
            github_url: 'https://github.com/iawen28',
            linkedin_url: 'https://www.linkedin.com/in/marcieanderson/'
          }
        ]);
      });
  })
};
