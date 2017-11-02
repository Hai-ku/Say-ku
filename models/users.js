module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  },
    userName: DataTypes.STRING
  },
    password: DataTypes.STRING
  });

  users.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    users.hasMany(models.haiku, {
      onDelete: "cascade"
    });
  };

  return users;
};
