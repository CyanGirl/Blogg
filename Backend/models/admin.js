const mongoose = require("mongoose");
const schema = mongoose.Schema;

//creating schema
const AdminData = new schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
});

//creating database in Atlas
const AdData = mongoose.model("Admin", AdminData);

module.exports = AdData;
