function Peao (coluna, linha, cor) {

	this.toString = function () {
		return "peao-" + cor;
	}

	this.getPosicoesPossiveis = function() {
		return [coluna + (linha + 1)];
	}
}