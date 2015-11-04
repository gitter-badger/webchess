function Peao (coluna, linha) {

	this.getPosicoesPossiveis = function() {
		return [coluna, linha + 1];
	}
}