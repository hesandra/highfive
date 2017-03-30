module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable(
      'company',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        name: {
          type: Sequelize.STRING
        },
        profile_img: {
          type: Sequelize.STRING
        },
        industry: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        address: {
          type: Sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'industry',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        name: {
          type: Sequelize.STRING
        
      }
    )

    queryInterface.createTable(
      'jobpost',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        title: {
          type: Sequelize.STRING
        },
        level: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        company_id: {
          type: Sequelize.INTEGER
        }
      }
    )

    queryInterface.createTable(
      'location',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        state: {
          type: Sequelize.STRING
        },
        city: {
          type: Sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'question',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        type: {
          type: Sequelize.INTEGER
        },
        question: {
          type: Sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'submission',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.INTEGER
        },
        jobpost_id: {
          type: Sequelize.INTEGER
        }
      }
    )

    queryInterface.createTable(
      'user',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        profile_img: {
          type: Sequelize.STRING
        }
      }
    )

    queryInterface.createTable(
      'video',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        href: {
          type: Sequelize.STRING
        },
        note: {
          type: Sequelize.STRING
        },
        submissions_id: {
          type: Sequelize.INTEGER
        },
        question_id: {
          type: Sequelize.INTEGER
        }
      }
    )

  },
  down: function(queryInterface, Sequelize) {
    queryInterface.dropAllTables()
  }
}