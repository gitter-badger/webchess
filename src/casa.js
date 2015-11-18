function Casa (coluna, linha) {

	const BRANCA = "branca";
	const PRETA = "preta";

	var peca = null;

	function obtemCorPelaPosicao () {
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

	this.toString = function () {
		var stringCasa = "casa-" + obtemCorPelaPosicao();
		var stringPeca = peca ? peca.toString() : null;
		return [stringCasa, stringPeca].join(" ").trim();
	}

	this.peca = function (novaPeca) {
		peca = novaPeca;
	}
}