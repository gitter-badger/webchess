function Casa (coluna, linha) {

	const BRANCA = "branca";
	const PRETA = "preta";

	var peca = null;

	this.nome = coluna + "" + linha

	this.classe = function () {
		var classe = [];
		classe.push(classeCasa());
		classe.push(classePeca());

		return classe.join(" ").trim();
	}

	this.peca = function (novaPeca) {
		peca = novaPeca;
	}

	this.toDiv = function () {
		var div = document.createElement("div");
		div.setAttribute("class", this.classe());
		return div;
	}

	function classeCasa() {
		return "casa " + corPelaPosicao();
	}

	function classePeca() {
		return peca ? peca.classe() : "";
	}

	function corPelaPosicao() {
		if (isLinhaPar()) {
			if(isColunaPar())
				return PRETA;
			
			return BRANCA;
		}
		
		if(isColunaPar())
			return BRANCA;
		
		return PRETA;
	}

	function isColunaPar(){
		return coluna % 2 === 0;
	}

	function isLinhaPar(){
		return linha.charCodeAt(0) % 2 === 0;
	}
}