function Peao (coluna, linha, cor) {

	this.getPosicoesPossiveis = function() {
		return [coluna + (linha + 1)];
	}
}