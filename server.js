const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "Better late than never, but never late is better.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency."
];

app.get('/', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(`
    <html>
      <body style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; font-family:sans-serif; background:#f4f4f9;">
        <h1 style="color:#333;">Daily Inspiration</h1>
        <p style="font-size:1.5rem; font-style:italic; color:#555; text-align:center; max-width:600px;">
          "${randomQuote}"
        </p>
        <button onclick="location.reload()" style="padding:10px 20px; cursor:pointer; background:#007bff; color:white; border:none; border-radius:5px;">New Quote</button>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
