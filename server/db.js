const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://forum:YIMCrSU7di5FCJcY@cluster0.ij2wqqw.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  });
};
module.exports = connectToMongo;
