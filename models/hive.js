module.exports = function(sequelize, DataTypes) {
    let Hive = sequelize.define("Hive", {
        name: DataTypes.STRING
    })

    Hive.associate = function(models) {
        Hive.hasMany(models.Thought, {

        })
    }

    return Hive;
}

