var express = require('express');
var cors = require('cors')
var mysql = require('mysql');
var app = express();

app.use(cors())

var pool = mysql.createPool({
	connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "sqlpumpkin99",
  database: "sf_game"
});

app.listen(3000, () => {
 console.log("Server running 👍");
});

app.get("/ships", (req, res, next) => {
 pool.getConnection(function(err, connection) {
 	connection.query("SELECT * FROM ships", function (err, result, fields) {
  connection.release();
    if (err) throw err;
    //if (err) throw err;
    console.log(result);
    res.json(result);
  });
});
});