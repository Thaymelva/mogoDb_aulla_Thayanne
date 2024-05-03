/*Define o nome do banco de dado */
//const database = 'libri-database';


///Acessa o banco de dados livri-database

use(database);

///SELECIONA TODOS OS DADOS DE TODOS OS ARQUIVOS DA COLLECTION

db['libri-colletion'].find();

/*##############################################*/
// const database = 'libri-database';
// use(database);
// /*SELECIONAR DADOS BASEADOS EM UM CRÍTERIO DE BUSCA */
// db['libri-colletion'].find({"categoria":"Ficção Cientifica"});

// const database = 'libri-database';
use(database);
/*SELECIONAR DADOS BASEADOS EM UM CRÍTERIO DE BUSCA */
db['libri-colletion'].find({"categoria":"Ficção Cientifica"}, {"_id":0, "codigo":0, "imagem":0});

/*SELECIONAR BASEADOS EM UM CRITIREIO DE BUSCA POR UMA PARTE DE STRING DE UM CAMPO */

const database = 'libri-database'

use(database);

db['libri-colletion'].find({"titulo":/robôs/i},{_id: 0, codigo: false, imagem: false});


