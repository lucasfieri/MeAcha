const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3001;
const mysql = require('mysql');
const cors = require('cors')


app.use(cors())

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);
	
//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : '030816Stiles',
    database : 'meacha'
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

router.get('/setor', (req, res) =>{
    execSQLQuery('SELECT * FROM setor', res);
})

router.get('/corredor', (req, res) =>{
  execSQLQuery('SELECT * FROM corredor', res);
})

router.get('/produto', (req, res) =>{
  execSQLQuery('SELECT * FROM produto', res);
})

router.get('/supermercado', (req, res) =>{
  execSQLQuery('SELECT * FROM supermercado', res);
})

router.get('/variedade', (req, res) =>{
  execSQLQuery('SELECT * FROM variedade', res);
})

router.get('/imagem', (req, res) =>{
  execSQLQuery('SELECT IMAGEM_s FROM supermercado', res);
})