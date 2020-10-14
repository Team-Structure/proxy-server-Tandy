const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const { checkApiUrl } = require('./middleware/api');

const app = express();

app.use('/', express.static(path.join(__dirname, './public')));

app.use('/api', checkApiUrl, (req, res) => {
  fetch(req.serviceUrl)
    .then((fetchRes) => {
      if (!fetchRes.ok) {
        res.status(fetchRes.status).send(fetchRes.statusText);
        return;
      }
      return fetchRes.json();
    })
    .then((fetchData) => res.json(fetchData))
    .catch((err) => res.status(400).send('Bad Request. Invalid URL.'));
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
