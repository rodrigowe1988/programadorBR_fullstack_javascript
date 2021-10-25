function h1click() {
	console.log(`O elemento h1 foi clicado`);
}

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1)

function changeH1(i) {
	h1.innerText = i.value;
}

function hideH4() {
	let h4 = document.getElementsByTagName("h4")[0];
	h4.style.display = "none";
}
