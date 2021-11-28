const User = require("./user");
const Survey = require("./survey");

Survey.belongsTo(User,{
    foreignKey: "userId",
    onDelete: "CASCADE"
})
