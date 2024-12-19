require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/beta', (req, res) => {
  const providedPassword = req.query.password;
  if (providedPassword === process.env.PASSWORD) {
    res.sendFile(path.join(__dirname, 'public', 'beta.html'));
  } else {
    // Serve a simple HTML form asking for the password
    res.send(`
      <html>
        <head>
          <title>Beta Access</title>
        </head>
        <body>
          <h1>Beta Access</h1>
          <form action="/beta" method="get">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});