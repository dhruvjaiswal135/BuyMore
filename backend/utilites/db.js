const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL,);
    // The 'useNewUrlParser' option ensures that the latest URL string parser is used.
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};
