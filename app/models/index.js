const path = require('path');
const dbConfig = require(path.join(__dirname,"../config/db.config"));

const mongoose = require("mongoose");

const db={}

db.mongoose = mongoose;
db.url = dbConfig.url;
db.product = require("./Product.model.js")(mongoose);

module.exports = db;