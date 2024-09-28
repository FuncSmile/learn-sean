const express = require("express");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

const PORT = 3001;

const SUPABASE_URL = "https://lplgnigjjbpuoodcwige.supabase.co";
const SUPABASE_SERVICE_ROLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwbGduaWdqamJwdW9vZGN3aWdlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzU0ODUwNiwiZXhwIjoyMDQzMTI0NTA2fQ.qLR7xW0wA4SUIHfTYMBCe0mvRXJRYYifATrcBugU2dI";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (req, res) => {
  console.log("API endpoint hit");
  const getBlog = await db.from("blog").select();
  res.json({ getBlog });
});

app.post("/", async (req, res) => {
  const { title, description } = req.body;
  console.log(
    `Attempting to create blog with title: ${title} and description: ${description}`
  );
  const createBlog = await db.from("blog").insert({ title, description });
  console.log(
    `Success: ${
      createBlog.error ? createBlog.error.message : "New blog created"
    }`
  );
  res.json({ createBlog });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
