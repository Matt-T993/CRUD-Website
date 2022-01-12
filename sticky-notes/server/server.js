const express = require("express");
const cors = require("cors");
const fs = require("fs");

//Load data from JSON file into memory
const rawData = fs.readFileSync("server/db.json");
const data = JSON.parse(rawData);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/notes", async (req, res) => {
  res.json(data.notes);
});

app.post("/api/notes", async (req, res) => {
  const body = req.body;
  console.log(body);

  const newNotes = {
    text: body.text,
    date: new Date().toLocaleDateString(),
    id: data.notes.length + 1,
  };

  await data.notes.push(newNotes);
  res.json(newNotes);
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = Number(req.params.id);

  data.notes = data.notes.filter((u) => u.id !== id);
  console.log(id);
  res.status(200).json("deleted");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
