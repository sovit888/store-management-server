const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Query{
    name:String
}
`);
