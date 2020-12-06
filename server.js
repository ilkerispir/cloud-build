const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
  var config = {
    method: 'GET',
    url: 'https://webhook.site/1b77942e-74a1-47af-b13e-a60dd4f4d3f2',
  };  
  var reponse = await axios(config);

  res.status(200).json({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});