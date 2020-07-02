const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const reservationRouter = require('./routes/reservation');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// app.use('/addReservation', reservationRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.listen(3000, () => {
  console.log(`Server it s started on port 3000`);
});