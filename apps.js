const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const router = require("./routes");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.listen(port, () => {
  console.log(`Listening port ${port}`)
})