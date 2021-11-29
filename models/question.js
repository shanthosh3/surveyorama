const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")

class Question extends Model{

}

Question.init(
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
        choices: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        surveyID: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'survey',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,   
        modelName: "question"
    },
)

module.exports = Question;