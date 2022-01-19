const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.json());
const noteRoute = require("./routes/notes");
const userRoute = require("./routes/user");

//Load data from JSON file into memory
const rawData = fs.readFileSync("server/db.json");
const data = JSON.parse(rawData);

app.use("/api/notes", noteRoute);
app.use("/api/users", userRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
