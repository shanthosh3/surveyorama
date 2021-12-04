const User = require("./user");
const Survey = require("./survey");
const Question = require("./question");

Survey.belongsTo(User,{
    foreignKey: "userID",
    onDelete: "CASCADE"
});

User.hasMany(Survey, {
    foreignKey: 'userID'
});

Question.belongsTo(Survey,{
    foreignKey: "surveyID",
    onDelete: 'SET NULL'
});

Survey.hasMany(Question,{
    foreignKey: "surveyID"
});

module.exports = { User, Survey, Question }