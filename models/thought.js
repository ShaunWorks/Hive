module.exports = function(sequelize, DataTypes) {
    let Thought = sequelize.define("Thought", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    })

    Thought.associate = function(models) {
        Thought.belongsTo(models.Hive, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Thought;
}