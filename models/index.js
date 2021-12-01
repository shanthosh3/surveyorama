const User = require("./User");
const Survey = require("./Survey");
// const Question = require("./Question");

Survey.belongsTo(User,{
    foreignKey: "userID",
    onDelete: "CASCADE"
});

User.hasMany(Survey, {
    foreignKey: 'userID'
});

// Question.belongsTo(Survey,{
//     foreignKey: "surveyID",
//     onDelete: 'SET NULL'
// });

// Survey.hasMany(Question,{
//     foreignKey: "surveyID"
// });

module.exports = { User, Survey }