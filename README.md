# 🚀 Hook Mining Engine

👉 Live App: https://hookminingengine.onrender.com/

---

## 🧠 Problem

Creators and marketers struggle to consistently write **viral hooks**.
Most rely on guesswork instead of real data.

---

## 💡 Solution

Hook Mining Engine analyzes **real viral content** and generates high-performing hooks instantly.

It combines:

* Real user-generated content (Reddit)
* Web-wide insights (Google via Serper)
* AI-powered analysis (Groq LLaMA)

---

## ⚙️ How It Works

1. User enters a topic (e.g. *fitness*)
2. System fetches:

   * Reddit posts (public JSON API)
   * Google search results (Serper API)
3. Merges both datasets
4. AI analyzes:

   * Hook patterns
   * Categories
   * Summary insight
5. AI generates **ready-to-use viral hooks**

---

## 🔧 Tech Stack

**Frontend**

* HTML, CSS, Vanilla JavaScript

**Backend**

* Node.js + Express

**APIs / Tools**

* Reddit (public endpoints)
* Serper API (Google Search)
* Groq API (LLaMA 3.1 model)

---

## 🚀 Features

* 🔍 Real-time viral content analysis
* 🌐 Multi-source data (Reddit + Google)
* 🧠 AI-powered pattern extraction
* ✨ Instant hook generation
* 📊 Progress tracking UI
* 📋 Copy-to-clipboard hooks

---

## 📂 Project Structure

```bash
hook-mining-engine/
│
├── server.js        # Backend API
├── public/
│   └── index.html  # Frontend UI
├── .env            # API keys (not committed)
├── package.json
```

---

## ⚡ Setup & Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/hook-mining-engine.git
cd hook-mining-engine
npm install
```

Create `.env` file:

```env
GROQ_API_KEY=your_key
SERPER_API_KEY=your_key
```

Run server:

```bash
node server.js
```

Open:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

| Variable       | Description   |
| -------------- | ------------- |
| GROQ_API_KEY   | AI processing |
| SERPER_API_KEY | Google search |

---

## 🔮 Future Improvements

* Trend tracking over time
* Platform-specific hooks (Twitter, LinkedIn)
* Auto-posting integrations
* Hook performance scoring

---

## 🙌 Author

Piyush Sharma
