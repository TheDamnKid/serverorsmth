const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// News reports including the requested "67 Kid" story
const newsReports = [
  { 
    id: 1, 
    title: "Tragedy or Hoax? The '67 Kid' Death Reports Explained", 
    content: "Reports have flooded social media claiming that the '67 Kid' has died. While viral videos suggest a tragic end for the meme icon, recent updates confirm the creator is safe and these claims are likely part of an internet hoax." 
  },
  { 
    id: 2, 
    title: "Viral '67' Meme Declared 'Dead' by Gen Alpha", 
    content: "The infamous '67' catchphrase has officially been labeled as 'brainrot' by its own community, with many declaring the meme itself is now 'dead' after its peak in late 2025." 
  }
];

app.get('/', (req, res) => {
  res.render('index', { reports: newsReports });
});

app.get('/report/:id', (req, res) => {
  const report = newsReports.find(r => r.id === parseInt(req.params.id));
  if (!report) return res.status(404).send('Article not found');
  res.render('report', { report });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`News portal live at http://0.0.0:${PORT}`);
});
