// Dependencies
// =============================================================
<<<<<<< HEAD
const Express = require('express');
const path = require('path');
=======
const express = require('express');

>>>>>>> 51b5662efdc02bdaeead1d8156b22710d7ec3396
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
app.post("/reservationView",function(req,res){
    var newtables = req.body;
    tables.push(newtables);
    alert("Reservation confirm")
})

app.get("/", function(req, res) {
<<<<<<< HEAD
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
  
=======
    res.sendFile(__dirname + "/public/index.html");
  });

app.get("/reservation", function(req,res){
    res.sendFile(__dirname + "/public/tables.html");
});

app.get("/reservationView", function(req,res){
    res.sendFile(__dirname + "/public/reservation_view.html");
>>>>>>> 51b5662efdc02bdaeead1d8156b22710d7ec3396
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
