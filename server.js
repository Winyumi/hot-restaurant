app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "reservation_add.html"));
});

app.get("/reservationView", function(req,res){
    res.sendFile(path.join(__dirname, "reservation_view.html"));
});

