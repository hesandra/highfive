exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('video').del()
      .then(function () {
        // Inserts seed entries
        return knex('video').insert([
          {
            id: 1,
            href: 'href_here',
            note: 'video notes',
            submitter_id: 1,
            question_id: 1
          },
          {
            id: 2,
            href: 'href_here',
            note: 'video notes2',
            submitter_id: 2,
            question_id: 2
          },
          {
            id: 3,
            href: 'href_here',
            note: 'video notes',
            submitter_id: 3,
            question_id: 3
          },
          {
            id: 4,
            href: 'href_here',
            note: 'video notes2',
            submitter_id: 1,
            question_id: 1
          },
          {
            id: 5,
            href: 'href_here',
            note: 'video notes',
            submitter_id: 2,
            question_id: 2
          },
          {
            id: 6,
            href: 'href_here',
            note: 'video notes2',
            submitter_id: 3,
            question_id: 3
          }
        ]);
      })
  })
};