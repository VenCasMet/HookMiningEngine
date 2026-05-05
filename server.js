const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});


// 🔍 STEP A: Get FREE Reddit data
app.post("/get-content", async (req, res) => {
  const { topic } = req.body;

  try {
    const response = await axios.get(
      `https://www.reddit.com/search.json?q=${topic}&limit=10`
    );

    const posts = response.data.data.children.map(
      post => post.data.title
    );

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching Reddit data");
  }
});

// 🌐 STEP A2: Get Google results via Serper
app.post("/google-search", async (req, res) => {
  const { topic } = req.body;

  try {
    const response = await axios.post(
      "https://google.serper.dev/search",
      { q: topic },
      {
        headers: {
          "X-API-KEY": process.env.SERPER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const results = response.data.organic.map(item => item.title);

    res.json(results);
  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).send("Serper error");
  }
});

// 🧠 STEP B: Analyze hooks using Groq (FREE AI)
app.post("/analyze", async (req, res) => {
  const { posts } = req.body;

  try {
    const prompt = `
Analyze these posts and extract viral hooks.

Also give a 1-line insight like:
"What type of hooks are working most here?"

Then return:
- Summary
- Hooks
- Categories

Posts:
${posts.join("\n")}
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data.choices[0].message.content);
  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).send("AI error");
  }
});


// ✍️ STEP C: Generate hooks
app.post("/generate", async (req, res) => {
  const { topic } = req.body;

  try {
    const prompt = `
    Generate 10 viral hooks about "${topic}".
    Use curiosity, fear, numbers, and bold claims.
    `;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data.choices[0].message.content);
  } catch (err) {
    res.status(500).send("Error generating hooks");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));