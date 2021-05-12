const express = require('express')
const app = express()

const path = require('path')

const db = require('./db/db')

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'/src'))

app.use(express.static(path.join(__dirname,'/src/public')))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
	res.render("index")
})

app.get('/cadastro', (req, res) => {
	res.render("cadastro")
})

app.post('/cadastro', async (req, res) => {

	const dados = { nome : req.body.nome }

	var inserir = await db.conn.query("INSERT INTO users SET ?", dados, (err, result) => {
		if (err) {
			res.send("Falha ao cadastrar")
		}
		res.send('cadastro Realizado com Sucesso')
	})

	db.conn.end()

})

app.listen(3000, function() {
	console.log('Servidor rodando na porta 3000')
})