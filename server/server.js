const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postApi = require("./routes/post");
const userApi = require("./routes/user");
const profileApi = require("./routes/profile");
const bodyparser = require("body-parser");

const app = express();

app.use(cors()); // Add this line to enable CORS
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use("/api/posts", postApi);
app.use("/api/users", userApi);
app.use("/api/profile", profileApi);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Connect to MongoDB
mongoose.connect(
   "mongodb+srv://lostasauchi:jZjjV2ifEgwS2weh@cluster0.xftf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    bufferCommands: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });

// Export the app
module.exports = app;
