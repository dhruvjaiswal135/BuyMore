const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utilites/db");


// used for the frontend server integration with backend.
app.use(
  cors({
    // change was 5173 instead of 3000
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// bodyParser is a middleware that processes the incoming request body and makes it accessible in your Express routes through req.body.
app.use(bodyParser.json());
// Middleware to parse cookies from the incoming request headers.
app.use(cookieParser());


app.use("/api", require("./routes/authroutes"));
app.use("/api", require("./routes/dashboard/categoryRoute"));
app.get("/", (req, res) => res.send("My backend"));
//to access the environment variables
const port = process.env.PORT;
app.listen(port, () => console.log(`server is running at port ${port}`));
dbConnect(); // connecting to the database
