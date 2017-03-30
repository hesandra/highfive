module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable(
      'companies',
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
          type: Sequelize.STRING,
        },
        profile_img: {
          type: Sequelize.STRING,
        },
        industry:

      }
    )
  },
  down: function(queryInterface, Sequelize) {

  }
}