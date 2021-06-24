const Calc = require('./calc');

console.log("Олена Файяд");
console.log("Демонстрація Ряду Тейлора ch(x):");

var steps = process.argv[2] ?? 4;
console.log("Кількість ітерацій: " + steps);
var res = Calc.ATaylorCh(2, steps);
console.log(res);