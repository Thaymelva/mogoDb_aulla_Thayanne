/*Define o nome do banco de dado */
const database = 'libri-database';

/*Define o nome da collection */
const collection = 'libri-colletion';

///Acessa o banco de dados livri-database

use(database);


/* Cria a collection livri-colection*/

db.createCollection(collection);