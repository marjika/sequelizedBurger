module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burgerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    Burger.associate = function(models) {
      // Associating Burger with customers
      // When a Burger is deleted, also delete any associated customers
      Burger.hasMany(models.Customer, {
        onDelete: "cascade"
      });
    };
    return Burger;
  };