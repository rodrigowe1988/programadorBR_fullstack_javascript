let soma = require("./soma");
let mult = require("./mult");

console.log(process.argv)

//corta os dois primeiros elementos do array
let args = process.argv.slice(2);

console.log(args);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == 's')
	c = soma(a, b);
else if (args[0] == 'm')
	c = mult(a, b);
else
	c = "Opção inválida";

console.log(c);
