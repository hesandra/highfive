module.exports = {
  up: function(queryInterface, sequelize) {
    queryInterface.createTable(
      'company',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        name: {
          type: sequelize.STRING
        },
        profile_img: {
          type: sequelize.STRING
        },
        industry: {
          type: sequelize.STRING
        },
        location: {
          type: sequelize.STRING
        },
        email: {
          type: sequelize.STRING
        },
        address: {
          type: sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'industry',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        name: {
          type: sequelize.STRING
        
      }
    )

    queryInterface.createTable(
      'jobpost',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        title: {
          type: sequelize.STRING
        },
        level: {
          type: sequelize.STRING
        },
        description: {
          type: sequelize.STRING
        },
        company_id: {
          type: sequelize.INTEGER
        }
      }
    )

    queryInterface.createTable(
      'location',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        state: {
          type: sequelize.STRING
        },
        city: {
          type: sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'question',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        type: {
          type: sequelize.INTEGER
        },
        question: {
          type: sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'submission',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        user_id: {
          type: sequelize.INTEGER
        },
        status: {
          type: sequelize.INTEGER
        },
        jobpost_id: {
          type: sequelize.INTEGER
        }
      }
    )

    queryInterface.createTable(
      'user',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        name: {
          type: sequelize.STRING
        },
        email: {
          type: sequelize.STRING
        },
        profile_img: {
          type: sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'video',
      {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        updatedAt: {
          type: sequelize.DATE,
          defaultValue: sequelize.NOW
        },
        href: {
          type: sequelize.STRING
        },
        note: {
          type: sequelize.STRING
        },
        submissions_id: {
          type: sequelize.INTEGER
        },
        question_id: {
          type: sequelize.INTEGER
        }
      }
    )

  },
  down: function(queryInterface, sequelize) {

  }
}