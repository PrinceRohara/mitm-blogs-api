const mongoose = require("mongoose");

const dbConnect = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(console.log("connected to db"))
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
