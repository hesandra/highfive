exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
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
        }
      ]);
    })
};