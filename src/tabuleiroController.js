window.onload = function() {
	var body = document.getElementsByTagName("body")[0];

	var tabuleiro = new Tabuleiro();
	var casas = tabuleiro.casas();
	for (var linha in casas){
		var divLinha = criaDiv(body, "linha");
		for(var coluna in casas[linha]) {
			criaDiv(divLinha, "coluna " + casas[linha][coluna].classe());
		}
	}
}

function criaDiv(elementoPai, classe) {
	var div = document.createElement("div");
	div.setAttribute("class", classe);
	elementoPai.appendChild(div);
	return div;
}