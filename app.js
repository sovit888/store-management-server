require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { productResolver, productSchema } = require("./graphql/product");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true,
});

const authRoutes = require("./routes/auth");
const brandRoutes = require("./routes/brand");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const productRoutes = require("./routes/product");
const storeRoutes = require("./routes/store");

app.use("/api", authRoutes);
app.use("/api", brandRoutes);
app.use("/api", categoryRoutes);
app.use("/api", orderRoutes);
app.use("/api", productRoutes);
app.use("/api", storeRoutes);

app.use(
  "/api/products",
  graphqlHTTP({
    rootValue: productResolver,
    schema: productSchema,
    graphiql: true,
  })
);

app.listen(process.env.PORT);
