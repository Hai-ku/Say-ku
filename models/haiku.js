module.exports = function(sequelize, DataTypes) {
  var haiku = sequelize.define("haiku", {
    
    Syntax: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  haiku.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    haiku.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return haiku;