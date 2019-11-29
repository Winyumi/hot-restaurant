// Dependencies
// =============================================================
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

//POST request for Reservation Table
//================================================================
var tables = [
  {
    TableID: ID,
    Name: name,
    Email: email,
    Phone: phoneNum

  }
]

app.post("/reservationView", function (req, res) {
  var newtables = req.body;
  tables.push(newtables);
  alert("Reservation confirm");
})


// var tables = [
// {
//     TableID : ID,
//     Name : name ,
//     Email: email,
//     Phone : phoneNum

// }
// ]

// Routes
// =============================================================
app.post("/reservationView", function (req, res) {
  var newtables = req.body;
  tables.push(newtables);
  alert("Reservation confirm")
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/reservation", function (req, res) {
  res.sendFile(__dirname + "/public/tables.html");
});

app.get("/reservationView", function (req, res) {
  res.sendFile(__dirname + "/public/reservation_view.html");

});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
