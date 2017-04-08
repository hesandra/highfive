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
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers',
            submission_id: 1,
            question_id: 1
          },
          {
            id: 2,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 2,
            question_id: 2
          },
          {
            id: 3,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers',
            submission_id: 3,
            question_id: 3
          },
          {
            id: 4,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 1,
            question_id: 1
          },
          {
            id: 5,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers',
            submission_id: 2,
            question_id: 2
          },
          {
            id: 6,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 3,
            question_id: 3
          }
        ]);
      })
  })
};