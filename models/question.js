const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Question extends Model{

}
//question model for database
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
            type: DataTypes.STRING,
            get: function(){
                return JSON.parse(this.getDataValue('choices'));
            },
            set: function(val){
                return this.setDataValue('choices', JSON.stringify(val));
            },
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