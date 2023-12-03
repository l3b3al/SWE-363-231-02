const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware function to process form
app.post('/submit-form', (req, res) => {
  // You can access the form data in req.body
  console.log(req.body);

  // For now, just confirm the submission to the user
  res.send('Form submission processed.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});