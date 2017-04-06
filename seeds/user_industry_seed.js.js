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
          }
        ]);
      });
  });
};
