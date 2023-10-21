const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://Dharam2001:Dharam2001@cluster0.2gmve3u.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
