exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('jobpost_question').del()
        .then(function() {
          // Inserts seed entries
          return knex('jobpost_question').insert([
            { id: 1, jobpost_id: 1, question_id: 1 },
            { id: 2, jobpost_id: 1, question_id: 11 },
            { id: 3, jobpost_id: 1, question_id: 21 },

            { id: 4, jobpost_id: 2, question_id: 2 },
            { id: 5, jobpost_id: 2, question_id: 12 },
            { id: 6, jobpost_id: 2, question_id: 22 },

            { id: 7, jobpost_id: 3, question_id: 3 },
            { id: 8, jobpost_id: 3, question_id: 13 },
            { id: 9, jobpost_id: 3, question_id: 23 },

            { id: 10, jobpost_id: 4, question_id: 4 },
            { id: 11, jobpost_id: 4, question_id: 14 },
            { id: 12, jobpost_id: 4, question_id: 24 },

            { id: 13, jobpost_id: 5, question_id: 5 },
            { id: 14, jobpost_id: 5, question_id: 15 },
            { id: 15, jobpost_id: 5, question_id: 25 },

            { id: 16, jobpost_id: 6, question_id: 6 },
            { id: 17, jobpost_id: 6, question_id: 16 },
            { id: 18, jobpost_id: 6, question_id: 26 },

            { id: 19, jobpost_id: 7, question_id: 7 },
            { id: 20, jobpost_id: 7, question_id: 17 },
            { id: 21, jobpost_id: 7, question_id: 27 },

            { id: 22, jobpost_id: 8, question_id: 8 },
            { id: 23, jobpost_id: 8, question_id: 18 },
            { id: 24, jobpost_id: 8, question_id: 28 },

            { id: 25, jobpost_id: 9, question_id: 9 },
            { id: 26, jobpost_id: 9, question_id: 19 },
            { id: 27, jobpost_id: 9, question_id: 29 },

            { id: 28, jobpost_id: 10, question_id: 10 },
            { id: 29, jobpost_id: 10, question_id: 20 },
            { id: 30, jobpost_id: 10, question_id: 30 },

            { id: 31, jobpost_id: 11, question_id: 1 },
            { id: 32, jobpost_id: 11, question_id: 11 },
            { id: 33, jobpost_id: 11, question_id: 21 },

            { id: 34, jobpost_id: 12, question_id: 2 },
            { id: 35, jobpost_id: 12, question_id: 12 },
            { id: 36, jobpost_id: 12, question_id: 22 },

            { id: 37, jobpost_id: 13, question_id: 3 },
            { id: 38, jobpost_id: 13, question_id: 13 },
            { id: 39, jobpost_id: 13, question_id: 23 },

            { id: 40, jobpost_id: 14, question_id: 4 },
            { id: 41, jobpost_id: 14, question_id: 14 },
            { id: 42, jobpost_id: 14, question_id: 24 },

            { id: 43, jobpost_id: 15, question_id: 5 },
            { id: 44, jobpost_id: 15, question_id: 15 },
            { id: 45, jobpost_id: 15, question_id: 25 },

            { id: 46, jobpost_id: 16, question_id: 6 },
            { id: 47, jobpost_id: 16, question_id: 16 },
            { id: 48, jobpost_id: 16, question_id: 26 },

            { id: 49, jobpost_id: 17, question_id: 7 },
            { id: 50, jobpost_id: 17, question_id: 17 },
            { id: 51, jobpost_id: 17, question_id: 27 },

            { id: 52, jobpost_id: 18, question_id: 8 },
            { id: 53, jobpost_id: 18, question_id: 18 },
            { id: 54, jobpost_id: 18, question_id: 28 },

            { id: 55, jobpost_id: 19, question_id: 9 },
            { id: 56, jobpost_id: 19, question_id: 19 },
            { id: 57, jobpost_id: 19, question_id: 29 },

            { id: 58, jobpost_id: 20, question_id: 10 },
            { id: 59, jobpost_id: 20, question_id: 20 },
            { id: 60, jobpost_id: 20, question_id: 30 },

            { id: 62, jobpost_id: 21, question_id: 1 },
            { id: 63, jobpost_id: 21, question_id: 11 },
            { id: 64, jobpost_id: 21, question_id: 21 },

            { id: 66, jobpost_id: 22, question_id: 2 },
            { id: 67, jobpost_id: 22, question_id: 12 },
            { id: 68, jobpost_id: 22, question_id: 22 },

            { id: 69, jobpost_id: 23, question_id: 3 },
            { id: 70, jobpost_id: 23, question_id: 13 },
            { id: 71, jobpost_id: 23, question_id: 23 },

            { id: 72, jobpost_id: 24, question_id: 4 },
            { id: 73, jobpost_id: 24, question_id: 14 },
            { id: 74, jobpost_id: 24, question_id: 24 },

            { id: 75, jobpost_id: 25, question_id: 5 },
            { id: 76, jobpost_id: 25, question_id: 15 },
            { id: 77, jobpost_id: 25, question_id: 25 },

            { id: 78, jobpost_id: 26, question_id: 6 },
            { id: 79, jobpost_id: 26, question_id: 16 },
            { id: 80, jobpost_id: 26, question_id: 26 },

            { id: 81, jobpost_id: 27, question_id: 7 },
            { id: 82, jobpost_id: 27, question_id: 17 },
            { id: 83, jobpost_id: 27, question_id: 27 },

            { id: 84, jobpost_id: 28, question_id: 8 },
            { id: 85, jobpost_id: 28, question_id: 18 },
            { id: 86, jobpost_id: 28, question_id: 28 },

            { id: 87, jobpost_id: 29, question_id: 9 },
            { id: 88, jobpost_id: 29, question_id: 19 },
            { id: 89, jobpost_id: 29, question_id: 29 },

            { id: 90, jobpost_id: 30, question_id: 10 },
            { id: 91, jobpost_id: 30, question_id: 20 },
            { id: 92, jobpost_id: 30, question_id: 30 },

            { id: 93, jobpost_id: 31, question_id: 21 },
            { id: 94, jobpost_id: 31, question_id: 2 },
            { id: 95, jobpost_id: 31, question_id: 12 },

            { id: 96, jobpost_id: 32, question_id: 22 },
            { id: 97, jobpost_id: 32, question_id: 3 },
            { id: 98, jobpost_id: 32, question_id: 13 },

            { id: 99, jobpost_id: 33, question_id: 23 },
            { id: 100, jobpost_id: 33, question_id: 4 },
            { id: 101, jobpost_id: 33, question_id: 1 },
            
            { id: 102, jobpost_id: 34, question_id: 11 },
            { id: 103, jobpost_id: 34, question_id: 21 },
            { id: 104, jobpost_id: 34, question_id: 2 },

            { id: 105, jobpost_id: 35, question_id: 12 },
            { id: 106, jobpost_id: 35, question_id: 22 },
            { id: 107, jobpost_id: 35, question_id: 3 },

            { id: 108, jobpost_id: 36, question_id: 13 },
            { id: 109, jobpost_id: 36, question_id: 23 },
            { id: 110, jobpost_id: 36, question_id: 4 },

            { id: 111, jobpost_id: 37, question_id: 1 },
            { id: 112, jobpost_id: 37, question_id: 11 },
            { id: 113, jobpost_id: 37, question_id: 21 },

            { id: 114, jobpost_id: 38, question_id: 2 },
            { id: 115, jobpost_id: 38, question_id: 12 },
            { id: 116, jobpost_id: 38, question_id: 22 },

            { id: 117, jobpost_id: 39, question_id: 3 },
            { id: 118, jobpost_id: 39, question_id: 13 },
            { id: 119, jobpost_id: 39, question_id: 23 },

            { id: 120, jobpost_id: 40, question_id: 4 },
            { id: 121, jobpost_id: 40, question_id: 14 },
            { id: 122, jobpost_id: 40, question_id: 24 },

            { id: 123, jobpost_id: 41, question_id: 1 },
            { id: 124, jobpost_id: 41, question_id: 12 },
            { id: 125, jobpost_id: 41, question_id: 21 },

            { id: 126, jobpost_id: 42, question_id: 2 },
            { id: 127, jobpost_id: 42, question_id: 12 },
            { id: 128, jobpost_id: 42, question_id: 22 },

            { id: 129, jobpost_id: 43, question_id: 3 },
            { id: 130, jobpost_id: 43, question_id: 13 },
            { id: 131, jobpost_id: 43, question_id: 23 },

            { id: 132, jobpost_id: 44, question_id: 4 },
            { id: 133, jobpost_id: 44, question_id: 14 },
            { id: 134, jobpost_id: 44, question_id: 24 },

            { id: 135, jobpost_id: 45, question_id: 5 },
            { id: 136, jobpost_id: 45, question_id: 15 },
            { id: 137, jobpost_id: 45, question_id: 25 },

            { id: 138, jobpost_id: 46, question_id: 6 },
            { id: 139, jobpost_id: 46, question_id: 16 },
            { id: 140, jobpost_id: 46, question_id: 26 },

            { id: 141, jobpost_id: 47, question_id: 7 },
            { id: 142, jobpost_id: 47, question_id: 17 },
            { id: 143, jobpost_id: 47, question_id: 27 },

            { id: 144, jobpost_id: 48, question_id: 8 },
            { id: 145, jobpost_id: 48, question_id: 18 },
            { id: 146, jobpost_id: 48, question_id: 28 },

            { id: 147, jobpost_id: 49, question_id: 9 },
            { id: 148, jobpost_id: 49, question_id: 19 },
            { id: 149, jobpost_id: 49, question_id: 29 },

            { id: 150, jobpost_id: 50, question_id: 10 },
            { id: 151, jobpost_id: 50, question_id: 20 },
            { id: 152, jobpost_id: 50, question_id: 30 },

            { id: 153, jobpost_id: 51, question_id: 1 },
            { id: 154, jobpost_id: 51, question_id: 11 },
            { id: 155, jobpost_id: 51, question_id: 21 },

            { id: 156, jobpost_id: 52, question_id: 2 },
            { id: 157, jobpost_id: 52, question_id: 12 },
            { id: 158, jobpost_id: 52, question_id: 22 },

            { id: 159, jobpost_id: 53, question_id: 3 },
            { id: 160, jobpost_id: 53, question_id: 13 },
            { id: 161, jobpost_id: 53, question_id: 23 },

            { id: 162, jobpost_id: 54, question_id: 4 },
            { id: 163, jobpost_id: 54, question_id: 14 },
            { id: 164, jobpost_id: 54, question_id: 24 },

            { id: 165, jobpost_id: 55, question_id: 5 },
            { id: 166, jobpost_id: 55, question_id: 15 },
            { id: 167, jobpost_id: 55, question_id: 25 },

            { id: 168, jobpost_id: 56, question_id: 6 },
            { id: 169, jobpost_id: 56, question_id: 16 },
            { id: 170, jobpost_id: 56, question_id: 26 },

            { id: 171, jobpost_id: 57, question_id: 7 },
            { id: 172, jobpost_id: 57, question_id: 17 },
            { id: 173, jobpost_id: 57, question_id: 27 },

            { id: 174, jobpost_id: 58, question_id: 8 },
            { id: 175, jobpost_id: 58, question_id: 18 },
            { id: 176, jobpost_id: 58, question_id: 28 },

            { id: 177, jobpost_id: 59, question_id: 9 },
            { id: 178, jobpost_id: 59, question_id: 19 },
            { id: 179, jobpost_id: 59, question_id: 29 },

            { id: 180, jobpost_id: 60, question_id: 10 },
            { id: 181, jobpost_id: 60, question_id: 20 },
            { id: 182, jobpost_id: 60, question_id: 30 },

            { id: 183, jobpost_id: 61, question_id: 1 },
            { id: 184, jobpost_id: 61, question_id: 11 },
            { id: 185, jobpost_id: 61, question_id: 21 },

            { id: 186, jobpost_id: 62, question_id: 2 },
            { id: 187, jobpost_id: 62, question_id: 12 },
            { id: 188, jobpost_id: 62, question_id: 22 },

            { id: 189, jobpost_id: 63, question_id: 3 },
            { id: 190, jobpost_id: 63, question_id: 13 },
            { id: 191, jobpost_id: 63, question_id: 23 },

            { id: 192, jobpost_id: 64, question_id: 4 },
            { id: 193, jobpost_id: 64, question_id: 14 },
            { id: 194, jobpost_id: 64, question_id: 24 },

            { id: 195, jobpost_id: 65, question_id: 5 },
            { id: 196, jobpost_id: 65, question_id: 15 },
            { id: 197, jobpost_id: 65, question_id: 25 },

            { id: 198, jobpost_id: 66, question_id: 6 },
            { id: 199, jobpost_id: 66, question_id: 16 },
            { id: 200, jobpost_id: 66, question_id: 26 },

            { id: 201, jobpost_id: 67, question_id: 7 },
            { id: 202, jobpost_id: 67, question_id: 17 },
            { id: 203, jobpost_id: 67, question_id: 27 },
            
            { id: 204, jobpost_id: 68, question_id: 8 },
            { id: 205, jobpost_id: 68, question_id: 18 },
            { id: 206, jobpost_id: 68, question_id: 28 },

            { id: 207, jobpost_id: 69, question_id: 9 },
            { id: 208, jobpost_id: 69, question_id: 19 },
            { id: 209, jobpost_id: 69, question_id: 29 },

            { id: 210, jobpost_id: 70, question_id: 10 },
            { id: 211, jobpost_id: 70, question_id: 20 },
            { id: 212, jobpost_id: 70, question_id: 30 },

            { id: 213, jobpost_id: 71, question_id: 1 },
            { id: 214, jobpost_id: 71, question_id: 11 },
            { id: 215, jobpost_id: 71, question_id: 21 },

            { id: 216, jobpost_id: 72, question_id: 2 },
            { id: 217, jobpost_id: 72, question_id: 12 },
            { id: 218, jobpost_id: 72, question_id: 22 },

            { id: 219, jobpost_id: 73, question_id: 3 },
            { id: 220, jobpost_id: 73, question_id: 13 },
            { id: 221, jobpost_id: 73, question_id: 23 },

            { id: 222, jobpost_id: 74, question_id: 4 },
            { id: 223, jobpost_id: 74, question_id: 14 },
            { id: 224, jobpost_id: 74, question_id: 24 },

            { id: 225, jobpost_id: 75, question_id: 5 },
            { id: 226, jobpost_id: 75, question_id: 15 },
            { id: 227, jobpost_id: 75, question_id: 25 },

            { id: 228, jobpost_id: 76, question_id: 6 },
            { id: 229, jobpost_id: 76, question_id: 16 },
            { id: 230, jobpost_id: 76, question_id: 26 },

            { id: 231, jobpost_id: 77, question_id: 7 },
            { id: 232, jobpost_id: 77, question_id: 17 },
            { id: 233, jobpost_id: 77, question_id: 27 },

            { id: 234, jobpost_id: 78, question_id: 8 },
            { id: 235, jobpost_id: 78, question_id: 18 },
            { id: 236, jobpost_id: 78, question_id: 28 },

            { id: 238, jobpost_id: 79, question_id: 9 },
            { id: 239, jobpost_id: 79, question_id: 19 },
            { id: 240, jobpost_id: 79, question_id: 29 },

            { id: 241, jobpost_id: 80, question_id: 10 },
            { id: 242, jobpost_id: 80, question_id: 20 },
            { id: 243, jobpost_id: 80, question_id: 30 },

            { id: 244, jobpost_id: 81, question_id: 1 },
            { id: 245, jobpost_id: 81, question_id: 11 },
            { id: 246, jobpost_id: 81, question_id: 21 },

            { id: 247, jobpost_id: 82, question_id: 2 },
            { id: 248, jobpost_id: 82, question_id: 12 },
            { id: 249, jobpost_id: 82, question_id: 22 },

            { id: 250, jobpost_id: 83, question_id: 3 },
            { id: 251, jobpost_id: 83, question_id: 13 },
            { id: 252, jobpost_id: 83, question_id:  23 },

            { id: 253, jobpost_id: 84, question_id: 4 },
            { id: 254, jobpost_id: 84, question_id: 14 },
            { id: 255, jobpost_id: 84, question_id: 24 },

            { id: 256, jobpost_id: 85, question_id: 5 },
            { id: 257, jobpost_id: 85, question_id: 15 },
            { id: 258, jobpost_id: 85, question_id: 25 },

            { id: 259, jobpost_id: 86, question_id: 6 },
            { id: 260, jobpost_id: 86, question_id: 16 },
            { id: 261, jobpost_id: 86, question_id: 26 },

            { id: 262, jobpost_id: 87, question_id: 7 },
            { id: 263, jobpost_id: 87, question_id: 17 },
            { id: 264, jobpost_id: 87, question_id: 27 },

            { id: 265, jobpost_id: 88, question_id: 8 },
            { id: 266, jobpost_id: 88, question_id: 18 },
            { id: 267, jobpost_id: 88, question_id: 28 },

            { id: 268, jobpost_id: 89, question_id: 9 },
            { id: 269, jobpost_id: 89, question_id: 19 },
            { id: 270, jobpost_id: 89, question_id: 29 },

            { id: 271, jobpost_id: 90, question_id: 10 },
            { id: 272, jobpost_id: 90, question_id: 20 },
            { id: 273, jobpost_id: 90, question_id: 30 },

            { id: 274, jobpost_id: 91, question_id: 1 },
            { id: 275, jobpost_id: 91, question_id: 11 },
            { id: 276, jobpost_id: 91, question_id: 21 },

            { id: 277, jobpost_id: 92, question_id: 2 },
            { id: 278, jobpost_id: 92, question_id: 12 },
            { id: 279, jobpost_id: 92, question_id: 22 },

            { id: 280, jobpost_id: 93, question_id: 3 },
            { id: 281, jobpost_id: 93, question_id: 13 },
            { id: 282, jobpost_id: 93, question_id: 23 },

            { id: 283, jobpost_id: 94, question_id: 4 },
            { id: 284, jobpost_id: 94, question_id: 14 },
            { id: 285, jobpost_id: 94, question_id: 24 },

            { id: 286, jobpost_id: 95, question_id: 5 },
            { id: 287, jobpost_id: 95, question_id: 15 },
            { id: 288, jobpost_id: 95, question_id: 25 },

            { id: 289, jobpost_id: 96, question_id: 6 },
            { id: 290, jobpost_id: 96, question_id: 16 },
            { id: 291, jobpost_id: 96, question_id: 26 },

            { id: 292, jobpost_id: 97, question_id: 7 },
            { id: 293, jobpost_id: 97, question_id: 17 },
            { id: 294, jobpost_id: 97, question_id: 27 },

            { id: 295, jobpost_id: 98, question_id: 8 },
            { id: 296, jobpost_id: 98, question_id: 18 },
            { id: 297, jobpost_id: 98, question_id: 28 },

            { id: 298, jobpost_id: 99, question_id: 9 },
            { id: 299, jobpost_id: 99, question_id: 19 },
            { id: 300, jobpost_id: 99, question_id: 29 },

            { id: 301, jobpost_id: 100, question_id: 10 },
            { id: 302, jobpost_id: 100, question_id: 20 },
            { id: 303, jobpost_id: 100, question_id: 30 }

          ]);
        });
    });
};
