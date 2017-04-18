exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          {
            id: 1,
            name: 'Andrew Yi',
            email: 'a@a.com',
            auth0_id: '',
            location_id: 1,
            profile_img: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125',
            github_url: 'https://github.com/andrewjyi',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'
          },
          {
            id: 2,
            name: 'Josh Hickman',
            email: 'j@j.com',
            auth0_id: 'asdas',
            location_id: 2,
            profile_img: 'https://avatars2.githubusercontent.com/u/15853188?v=3',
            github_url: 'https://github.com/Jahosh',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'

          },
          {
            id: 3,
            name: 'Sandra J',
            email: 's@s.com',
            auth0_id: '',
            location_id: 3,
            profile_img: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125',
            github_url: 'https://github.com/hesandra',
            linkedin_url: 'https://www.linkedin.com/in/josh-hickman-3b6a2051/'
          },
          {
            id: 4,
            name: 'Superman',
            email: 's@s.com',
            auth0_id: '',
            location_id: 4,
            profile_img: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125',
            github_url: 'https://github.com/superman',
            linkedin_url: 'https://www.linkedin.com/in/superman/'
          },
          {
            id: 5,
            name: 'Regina Lee',
            email: 'r@r.com',
            auth0_id: '',
            location_id: 5,
            profile_img: '',
            github_url: 'https://github.com/reginavlee',
            linkedin_url: 'https://www.linkedin.com/in/reginavlee/'
          },
          {
            id: 6,
            name: 'Armen Rostamian',
            email: 'ar@ar.net',
            auth0_id: '',
            location_id: 6,
            profile_img: '',
            github_url: 'https://github.com/armenr',
            linkedin_url: 'https://www.linkedin.com/in/armenr/'
          },
          {
            id: 7,
            name: 'Alex Kim',
            email: 'ak@ak.com',
            auth0_id: '',
            location_id: 7,
            profile_img: '',
            github_url: 'https://github.com/jinhwanee93',
            linkedin_url: 'https://www.linkedin.com/in/alexandrekim93/'
          },
          {
            id: 8,
            name: 'Brandon Kleiman',
            email: 'bk@bk.com',
            auth0_id: '',
            location_id: 8,
            profile_img: '',
            github_url: 'https://github.com/BrandonKleiman',
            linkedin_url: 'https://www.linkedin.com/in/brandonkleiman/'
          },
          {
            id: 9,
            name: 'Emily Yang',
            email: 'ey@ey.com',
            auth0_id: '',
            location_id: 9,
            profile_img: '',
            github_url: 'https://github.com/yangemilym',
            linkedin_url: 'https://www.linkedin.com/in/yangemilym/'
          },
          {
            id: 10,
            name: 'Zach Carr',
            email: 'zc@zc.com',
            auth0_id: '',
            location_id: 10,
            profile_img: '',
            github_url: 'https://github.com/zc0311',
            linkedin_url: 'https://www.linkedin.com/in/zachcarrla/'
          },
          {
            id: 11,
            name: 'Marcie Anderson',
            email: 'ma@ma.com',
            auth0_id: '',
            location_id: 1,
            profile_img: '',
            github_url: 'https://github.com/iawen28',
            linkedin_url: 'https://www.linkedin.com/in/marcieanderson/'
          }
        ]);
      });
  })
};
