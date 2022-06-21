module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('dogs', {

      id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4,primaryKey: true},
      name: {type: Sequelize.STRING,allowNull: false},
        height: {type: Sequelize.STRING,allowNull: false},
        weight: {type: Sequelize.STRING,allowNull: false},
        life_span: {type: Sequelize.STRING},
        image: {type: Sequelize.STRING},
    }, {
      timestamps: false
    });
    },
    async down(queryInterface) {
      await queryInterface.dropTable('dogs');
    }
  };