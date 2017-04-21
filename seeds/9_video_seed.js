exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('video').del()
      .then(function () {
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
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer:  'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 7,
            question_id: 11
          },
          {
            id: 8,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 7,
            question_id: 22
          },
          {
            id: 9,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 7,
            question_id: 6
          },
          {
            id: 10,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'asdsads',
            // 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 8,
            question_id: 11
          },
          {
            id: 11,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 8,
            question_id: 22
          },
          {
            id: 12,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 8,
            question_id: 6
          },
           {
            id: 13,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 9,
            question_id: 11
          },
          {
            id: 14,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 9,
            question_id: 22
          },
          {
            id: 15,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 9,
            question_id: 6
          },
          {
            id: 16,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 10,
            question_id: 11
          },
          {
            id: 17,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 10,
            question_id: 22
          },
          {
            id: 18,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 10,
            question_id: 6
          },
          {
            id: 19,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 11,
            question_id: 11
          },
          {
            id: 20,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 11,
            question_id: 22
          },
          {
            id: 21,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 11,
            question_id: 6
          },
          {
            id: 22,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 12,
            question_id: 11
          },
          {
            id: 23,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 12,
            question_id: 22
          },
          {
            id: 24,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 12,
            question_id: 6
          },
          {
            id: 25,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 13,
            question_id: 11
          },
          {
            id: 26,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 13,
            question_id: 22
          },
          {
            id: 27,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 13,
            question_id: 6
          },
          {
            id: 28,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 14,
            question_id: 11
          },
          {
            id: 29,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 14,
            question_id: 22
          },
          {
            id: 30,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 14,
            question_id: 6
          },
          {
            id: 31,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 15,
            question_id: 11
          },
          {
            id: 32,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 15,
            question_id: 22
          },
          {
            id: 33,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 15,
            question_id: 6
          },
          {
            id: 34,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 16,
            question_id: 11
          },
          {
            id: 35,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 16,
            question_id: 22
          },
          {
            id: 36,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 16,
            question_id: 6
          },
          {
            id: 37,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 47,
            question_id: 11
          },
          {
            id: 38,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 47,
            question_id: 22
          },
          {
            id: 39,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 47,
            question_id: 6
          },
          {
            id: 40,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 49,
            question_id: 11
          },
          {
            id: 41,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 49,
            question_id: 22
          },
          {
            id: 42,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 49,
            question_id: 6
          },
          {
            id: 43,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_24418.webm',
            answer: 'function isPrime(number) {\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}',
            submission_id: 50,
            question_id: 11
          },
          {
            id: 44,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha2_63040.webm',
            answer: '',
            submission_id: 50,
            question_id: 22
          },
          {
            id: 45,
            href: 'https://s3-us-west-1.amazonaws.com/highfivehrla13/Sandra+Jayasingha1_83672.webm',
            answer: '',
            submission_id: 50,
            question_id: 6
          }
        ]);
      })
  })
};





 //'function isPrime(number) { \n if (typeof number !== "number" || !Number.isInteger(number)) {\n return false;\n}\n if (number < 2) {\n return false;\n}\n if (number ===2) {\n return true;\n } else if (number % 2 === 0) { \n return false;\n} \n for (var i = 3; i*i <= number; i += 2) { \n if (number % i === 0) { \n return false;\n }\n}\n return true;\n}'