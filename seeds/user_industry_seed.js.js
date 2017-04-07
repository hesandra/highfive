exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('user_industry').del()
        .then(function() {
          // Inserts seed entries
          return knex('user_industry').insert([
            {
              id: 1,
              user_id: 1,
              industry_id: 1
            },
            {
              id: 2,
              user_id: 1,
              industry_id: 2
            },
            {
              id: 3,
              user_id: 2,
              industry_id: 2
            },
            {
              id: 4,
              user_id: 3,
              industry_id: 3
            }
          ]);
        });
    });
};
