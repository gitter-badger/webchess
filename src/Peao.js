function Peao(coluna, linha) {


	this.getPosicoesPossiveis = function() {

		return [coluna,new Number(linha)+1];
	}
}