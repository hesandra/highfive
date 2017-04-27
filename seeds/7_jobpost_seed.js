exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('jobpost').del()
        .then(() => {
          const seedArray = [];
          let id, company_id, title, level, description, industry_id, location_id;
          let counterToTen = 1;
          let companyCounter = 1;

          for (let i = 1; i <= 160; i += 1) {
            id = i;
            counterToTen += 1;
            companyCounter += 1;
            if (counterToTen / 11 === 1) {
              counterToTen = 1;
            }
            if (companyCounter / 16 === 1) {
              companyCounter = 1;
            }

            if (i % 10 === 1 || i % 10 === 2 || i % 10 === 3 || i % 10 === 4) {
              title = 'Jr Dev';
              level = 0;
              description = 'Looking for Jr Dev';
            }
            if (i % 10 === 5 || i % 10 === 6 || i % 10 === 7) {
              title = 'Mid Dev';
              level = 1;
              description = 'Looking for Mid Dev';
            }
            if (i % 10 === 0 || i % 10 === 8 || i % 10 === 9) {
              title = 'Sr Dev';
              level = 2;
              description = 'Looking for Sr Dev';
            }

            const newObj = {
              id,
              company_id: companyCounter,
              title,
              level,
              description,
              industry_id: counterToTen,
              location_id: counterToTen
            };

            seedArray.push(newObj);
          }

          return knex('jobpost').insert(seedArray);

          // return knex('jobpost').insert([
          //   { id: 1, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 2, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 3, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 4, company_id: 4, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 5, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 6, company_id: 6, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 7, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 8, company_id: 8, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 9, company_id: 9, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 10, company_id: 10, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 11, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 12, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 13, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 14, company_id: 7, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 15, company_id: 6, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 16, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 17, company_id: 4, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 18, company_id: 3, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 19, company_id: 2, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 20, company_id: 1, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 21, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 22, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 23, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 24, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 25, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 26, company_id: 4, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 27, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 28, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 29, company_id: 7, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 30, company_id: 8, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 31, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 32, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 33, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 34, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 35, company_id: 1, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 36, company_id: 2, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 37, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 38, company_id: 4, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 39, company_id: 5, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 40, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 41, company_id: 7, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 42, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 43, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 44, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 45, company_id: 11, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 46, company_id: 12, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 47, company_id: 1, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 48, company_id: 2, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 49, company_id: 3, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 50, company_id: 4, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 51, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 52, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 53, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 54, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 55, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 56, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 57, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 58, company_id: 12, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 59, company_id: 1, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 60, company_id: 2, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 61, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 62, company_id: 4, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 63, company_id: 5, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 64, company_id: 6, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 65, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 66, company_id: 8, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 67, company_id: 9, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 68, company_id: 10, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 69, company_id: 11, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 70, company_id: 12, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 71, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 72, company_id: 5, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 73, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 74, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 75, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 76, company_id: 10, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 77, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 78, company_id: 8, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 79, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 80, company_id: 10, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 91, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 92, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 93, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 94, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 95, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 96, company_id: 4, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 97, company_id: 8, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 98, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 99, company_id: 5, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 100, company_id: 7, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          //   { id: 101, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 102, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 103, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 105, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 106, company_id: 10, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 107, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 108, company_id: 6, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 109, company_id: 5, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 110, company_id: 4, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },

          //   { id: 111, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 112, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 113, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 114, company_id: 11, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 115, company_id: 11, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 116, company_id: 11, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 117, company_id: 11, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 118, company_id: 11, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 119, company_id: 11, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 120, company_id: 11, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 121, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 122, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 123, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 124, company_id: 12, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 125, company_id: 12, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 126, company_id: 12, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 127, company_id: 12, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 128, company_id: 12, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 129, company_id: 12, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 130, company_id: 12, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 131, company_id: 13, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 132, company_id: 13, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 133, company_id: 13, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 134, company_id: 13, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 135, company_id: 13, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 136, company_id: 13, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 137, company_id: 13, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 138, company_id: 13, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 139, company_id: 13, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 140, company_id: 13, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 141, company_id: 14, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 142, company_id: 14, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 143, company_id: 14, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 144, company_id: 14, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 145, company_id: 14, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 146, company_id: 14, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 147, company_id: 14, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 148, company_id: 14, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 149, company_id: 14, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 150, company_id: 14, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          //   { id: 151, company_id: 15, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          //   { id: 152, company_id: 15, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          //   { id: 153, company_id: 15, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          //   { id: 154, company_id: 15, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          //   { id: 155, company_id: 15, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          //   { id: 156, company_id: 15, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          //   { id: 157, company_id: 15, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          //   { id: 158, company_id: 15, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          //   { id: 159, company_id: 15, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          //   { id: 160, company_id: 15, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 }
          // ]);
        });
    });
};