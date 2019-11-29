// Dependencies
// =============================================================
const Express = require('express');
const path = require('path');
// Sets up the Express App
// =============================================================
const app = Express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

//POST request for Reservation Table
//================================================================
var tables = [
  {
      TableID : ID,
      Name : name ,
      Email: email,
      Phone : phoneNum
  
  }
  ]

app.post("/reservationView",function(req,res){
  var newtables = req.body;
  tables.push(newtables);
  alert("Reservation confirm");
})


// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "public/reservation_add.html"));
});

app.get("/reservationView", function(req,res){
    res.sendFile(path.join(__dirname, "public/reservation_view.html"));
});

app.post("/tables/add", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newReserveration = req.body;
  
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
