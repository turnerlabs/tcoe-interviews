let app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`stock's api listening on port ${port}`)
})