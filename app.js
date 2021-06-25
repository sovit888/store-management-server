require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const resolver = require("./utils/resolver");
const schema = require("./utils/schema");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/static", express.static(path.resolve(__dirname, "assets")));

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
});

const attributeRoutes = require("./routes/attribute");
const attributeValueRoutes = require("./routes/attributevalue");
const authRoutes = require("./routes/auth");
const brandRoutes = require("./routes/brand");
const categoryRoutes = require("./routes/category");
const groupRoutes = require("./routes/group");
const orderRoutes = require("./routes/order");
const passwordRoutes = require("./routes/password");
const productRoutes = require("./routes/product");
const profileRoutes = require("./routes/profile");
const storeRoutes = require("./routes/store");
const userRoutes = require("./routes/user");

app.use("/api", attributeRoutes);
app.use("/api", attributeValueRoutes);
app.use("/api", authRoutes);
app.use("/api", brandRoutes);
app.use("/api", categoryRoutes);
app.use("/api", groupRoutes);
app.use("/api", orderRoutes);
app.use("/api", passwordRoutes);
app.use("/api", productRoutes);
app.use("/api", profileRoutes);
app.use("/api", storeRoutes);
app.use("/api", userRoutes);

app.use(
  "/api/graphql",
  graphqlHTTP({
    rootValue: resolver,
    schema: schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT);
