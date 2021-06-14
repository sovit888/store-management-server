const { buildSchema } = require("graphql");

let schema = buildSchema(`
type Query{
    hello(id:Int):[Posts]
}
type Posts{
    name:String
    id:Int
}
`);

let resolver = {
  hello: ({ id }) => {
    console.log(id);
    return [
      { name: "Sovit", id: 1 },
      { id, name: "sunil" },
    ];
  },
};

module.exports = {
  productSchema: schema,
  productResolver: resolver,
};
