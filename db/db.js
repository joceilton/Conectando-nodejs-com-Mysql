const mysql = require('mysql')

var conn = mysql.createConnection({
		host: "localhost",
		user: "Joceilton",
		password: "S5v2da22",
		database: "test"
	})

	conn.connect( (err) => {
		if (err) throw err;
		//console.log("Conectado")
	})

module.exports = {
	conn
}