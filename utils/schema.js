const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Query{
    users:Int
    groups:Int
    sales:Int
    income:Int
    brands:[SameType]
    stores:[SameType]
    categorys:[SameType]
    attributes:[Attribute]
    products:[Products]
}
type Products{
    name:String
    _id:String
    price:Int
}
type SameType{
    name:String
}
type Attribute{
    name:String
    attribute:SameType
}
`);
