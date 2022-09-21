const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('I am Biswajit Giri, I am a Devops Engineer and JAVA developer.')
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});