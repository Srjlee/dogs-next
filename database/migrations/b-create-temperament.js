module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('temperaments', {
        id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4,primaryKey: true},
        name: {type: Sequelize.STRING},
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    }, );
    },
    async down(queryInterface) {
      await queryInterface.dropTable('temperaments');
    }
  };