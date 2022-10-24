const express = require('express')
const app = express();

app.get('/api/stocks', (req, res) => {  
  
  let open = Math.random() * 10000 + "." + Math.random() * 99;
  let high = Math.random() * 10000 + "." + Math.random() * 99;
  let low = Math.random() * 10000 + "." + Math.random() * 99;
  let close = Math.random() * 10000 + "." + Math.random() * 99;

  res.send({
    "date": req.query.date,
    "open": Number.parseFloat(open).toFixed(2),
    "high": Number.parseFloat(high).toFixed(2),
    "low": Number.parseFloat(low).toFixed(2),
    "close": Number.parseFloat(close).toFixed(2),
  })
})

app.get('/', (req, res) => {  
  res.send("stocks api v1, have fun!");
})

module.exports = app;