let todos_paragrafos = document.getElementsByTagName("p");
console.log(todos_paragrafos);

let class_paragrafo = document.getElementsByClassName("paragrafo");
console.log(class_paragrafo);

let id_paragrafo = document.getElementById("p1");
console.log(id_paragrafo);
id_paragrafo.textContent = "alterei o conteúdo do parágrafo com JS"

//usando o innerHTML para criar um loop e adicionar tags de título
for (let i = 0; i < class_paragrafo.length; i++)
	class_paragrafo[i].innerHTML = `<h${i + 1}>Alterado para Valor ${i + 1}<h${i}>`;

//alterando a classe do elemento usando JS
id_paragrafo.className = "new_class";

//ou usando o style para alterar diretamente um estilo do elemento
id_paragrafo.style = "color:green";

let paragrafo3 = document.getElementById("paragrafo3");
console.log(paragrafo3)
paragrafo3.style.color = "#347454";
