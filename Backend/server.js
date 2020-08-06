const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = new express();
const port = process.env.PORT || 5000;

require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());

//connecting with DB
const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Successfully connected to DB");
  }
);
const connection = mongoose.connect;

///////importing routes/////////
const BlogRoute = require("./route/BlogApi");

//making the routes used
app.use("/", BlogRoute);

app.listen(port, () => {
  console.log(`Server is running at : ${port}`);
});
