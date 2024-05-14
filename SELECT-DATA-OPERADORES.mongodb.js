/*Seleciona livros com valor maior que 100reais*/
use('libri-database');
db['libri-colletion'].find({valor:{$gt:100}});

/*Seleciona livros com valor menor que 100 reais*/
use('libri-database');
db['libri-colletion'].find({valor:{$lt:100}});

/*Seleciona livros com valor lmaior ou igua que 100 reais*/
use('libri-database');
db['libri-colletion'].find({valor:{$gte:100}});
/*Seleciona livros com valor menor ou igua que 100 reais*/
use('libri-database');
db['libri-colletion'].find({valor:{$lte:100}});

/*Seleciona livros entre um intervalo de valores de 100 até 150 ($lte) E ($gte)*/
use('libri-database');
db['libri-colletion'].find({valor:{$gte:100, $lte:150}});

/*Seleciona livros entre um intervalo de valores de 100 até 150 ($lte) E ($gte)* - Ordenação Ascendente*/
use('libri-database');
db['libri-colletion'].find({valor:{$gte:100, $lte:150}}).sort({valor:1});