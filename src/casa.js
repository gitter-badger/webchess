function Casa (coluna, linha) {

	const BRANCA = "branca";
	const PRETA = "preta";

	var peca = null;

	this.classe = function () {
		var classe = [];
		classe.push(classeCasa());
		classe.push(classePeca());

		return classe.join(" ").trim();
	}

	this.peca = function (novaPeca) {
		peca = novaPeca;
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

	function isLinhaPar(){
		return linha % 2 === 0;
	}

	function isColunaPar(){
		return coluna.charCodeAt(0) % 2 === 0;
	}
}