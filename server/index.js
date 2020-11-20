const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// app.get('http://52.26.193.201:3000/products/list', (req, res) => {
//   res.send(res.data);
// });

// Listening for requests on the PORT
app.listen(PORT, () => {
  console.log(`Serving up now at ${JSON.stringify(PORT)}`);
});
