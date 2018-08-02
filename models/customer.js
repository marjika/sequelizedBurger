module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      firstName: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a burger from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our burger is between 1 and 50 characters
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