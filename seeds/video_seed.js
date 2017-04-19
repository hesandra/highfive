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
            answer: '',
            submission_id: 2,
            question_id: 2
          },
          {
            id: 6,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 3,
            question_id: 3
          },

          //below is Sandra's input
          {
            id: 7,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'static bool IsPrime(int number) {for (int i = 2; i < number; i++) {if (number % i == 0 && i != number) return false;} return true;}',
            submission_id: 7,
            question_id: 11
          },
          {
            id: 8,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: '',
            submission_id: 7,
            question_id: 22
          },
          {
            id: 9,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: '',
            submission_id: 7,
            question_id: 6
          },
          {
            id: 10,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 8,
            question_id: 1
          },
          {
            id: 11,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: '',
            submission_id: 8,
            question_id: 2
          },
          {
            id: 12,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 8,
            question_id: 3
          },
           {
            id: 13,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 9,
            question_id: 1
          },
          {
            id: 14,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: '',
            submission_id: 9,
            question_id: 2
          },
          {
            id: 15,
            href: 'https://highfivehrla13.s3.amazonaws.com/blah1.webm',
            answer: 'video answers2',
            submission_id: 9,
            question_id: 3
          }
        ]);
      })
  })
};