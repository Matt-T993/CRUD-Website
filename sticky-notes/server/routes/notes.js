const router = require("express").Router();
const fs = require("fs");
const rawData = fs.readFileSync("server/db.json");
const data = JSON.parse(rawData);

router.get("/", async (req, res) => {
  res.json(data.notes);
});

router.post("/", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  data.notes = data.notes.filter((u) => u.id !== id);
  console.log(id);
  res.status(200).json("deleted");
});

module.exports = router;
