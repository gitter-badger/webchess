function Casa (coluna, linha) {

	const BRANCA = "branca";
	const PRETA = "preta";

	var obtemCorPelaPosicao = function() {
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

	this.toString = function(){
		return "casa-" + obtemCorPelaPosicao();
	}
}