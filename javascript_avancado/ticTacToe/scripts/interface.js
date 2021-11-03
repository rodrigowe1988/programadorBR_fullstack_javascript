document.addEventListener('DOMContentLoaded', () => {

	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		square.addEventListener('click', handleClick);
	})
})

function handleClick(event) {
	let square = event.target;
	let position = square.id;

	function winner() {
		if (playerTime == 0) {
			return "Cachorrinho";
		} else {
			return "Gatinho";
		}
	}

	if (handleMove(position)){

		setTimeout(() => {
			alert(`O jogo acabou e o vencedor foi o ${winner()}`);
		}, 10);
	};
	updateSquare(position);
}

function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let symbol = board[position];
	square.innerHTML = `<div class='${symbol}'></div>`;
}
