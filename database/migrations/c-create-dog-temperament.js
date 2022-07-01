module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Dog_Temperamento', {
        dogId: {
            type: Sequelize.UUID,
            //defaultValue: Sequelize.UUIDV4,
            references: {
              model: "dogs",
              key: "id",  
            }
          },
          temperamentId: {
            type: Sequelize.UUID,
            //defaultValue: Sequelize.UUIDV4,
            references: {
              model: "temperaments",
              key: "id",
            }
          }, 
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          } 
          
            
          
          
         
        });
    },
    async down(queryInterface) {
      await queryInterface.dropTable('Dog_Temperamento');
    }
  };