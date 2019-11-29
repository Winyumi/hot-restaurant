// Dependencies
// =============================================================
const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve Static files
app.use(express.static('public'));


//POST request for Reservation Table
//================================================================
var tables = [
  {
    tableID: null,
    name: null,
    email: null,
    phone: null

  }
]

app.post("/reservationView", function (req, res) {
  var newtables = req.body;
  tables.push(newtables);
  alert("Reservation confirm");
})


// Routes
// =============================================================
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


app.get("/tables", function (req, res) {
  res.sendFile(__dirname + "/public/tables.html");
});

app.get("/reservation", function (req, res) {
  res.sendFile(__dirname + "/public/reservation_add.html");
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
