const express = require("express");

const app = express();
const PORT = 3001;

app.get("/:username", (req, res) => {
  const { username } = req.params;
  console.log({ username });
  console.log("API endpoint hit");
  res.send("this routing works");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
