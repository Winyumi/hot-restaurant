// Dependencies
// =============================================================
const Express = require('express');

// Sets up the Express App
// =============================================================
const app = Express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "reservation_add.html"));
});

app.get("/reservationView", function(req,res){
    res.sendFile(path.join(__dirname, "reservation_view.html"));
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
