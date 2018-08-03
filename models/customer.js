module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      toppings: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
    });

    Customer.associate = function(models) {
        // We're saying that a customer should belong to a burger
        // A Customer can't be created without an burger due to the foreign key constraint
        Customer.belongsTo(models.Burger, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Customer;
  };