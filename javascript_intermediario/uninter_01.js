var taxa_juros = "A taxa de juros é fixa";
var valor_inicial = 1700;
var valor_total = 0;


if (valor_inicial < 1500) {
	valor_total = valor_inicial;
	console.log("Valor insuficiente para investimento. Valor sem remuneração: "+ valor_total );
} else  {
	valor_total = valor_inicial * taxa_juros;
	console.log("Valor: "+ valor_total );
}
