module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('temperaments', {
        name: {
            type: Sequelize.STRING,          
        }
    }, {
      timestamps: false
    });
    },
    async down(queryInterface) {
      await queryInterface.dropTable('temperaments');
    }
  };