const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Survey extends Model{

}
//survey model for database
Survey.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user',
                key: 'id'
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,   
        modelName: "survey"
    },
)

module.exports = Survey;