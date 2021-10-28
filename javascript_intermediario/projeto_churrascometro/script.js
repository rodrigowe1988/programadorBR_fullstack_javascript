/*regras do churrasco
* carne 	->	400g por pessoa, se for + de 6 horas = 650g
* cerveja	->	1200ml por pessoa, se for + de 6 horas = 2000ml
* refri		->	1000 ml por pessoa, se for + de 6 horas = 1500ml
// crianças valem por 0,5 pessoa
*/

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');



function calcular() {
	let adultos = inputAdultos.value;
	let criancas = inputCriancas.value;
	let duracao = inputDuracao.value;

	let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
	let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
	let qtdTotalBebida = bebidaPorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);

	function carnePorPessoa(duracao){
		if (duracao > 0 && duracao <= 6)
			return 450;
		else if (duracao > 6)
			return 650;
	}

	function cervejaPorPessoa(duracao){
		if (duracao > 0 && duracao <= 6)
			return 1200;
		else if (duracao > 6)
			return 2000;
	}

	function bebidaPorPessoa(duracao){
		if (duracao > 0 && duracao <= 6)
			return 1000;
		else if (duracao > 6)
			return 1500;
	}

	let lista = document.getElementById('lista');
	if (adultos >= 0 && criancas >= 0 && duracao >= 0) {
		lista.children[0].textContent = `${qtdTotalCarne / 1000} kg de carne.`
		lista.children[1].textContent = `${qtdTotalCerveja / 1000} litros de cerveja.`
		lista.children[2].textContent = `${qtdTotalBebida / 1000} litros de bebida.`
	} else

	for (let i = 0; i < 3; i++) {
		lista.children[i].textContent = `Valor ${i + 1} inválido.`;
	}



}
