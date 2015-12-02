function Tabuleiro () {

	var tabuleiro = {
		"8" : colunasDaLinha(8),
		"7" : colunasDaLinha(7),
		"6" : colunasDaLinha(6),
		"5" : colunasDaLinha(5),
		"4" : colunasDaLinha(4),
		"3" : colunasDaLinha(3),
		"2" : colunasDaLinha(2),
		"1" : colunasDaLinha(1)
	}

	function colunasDaLinha(linha) {
		return {
			"A": new Casa("A", linha),
			"B": new Casa("B", linha),
			"C": new Casa("C", linha),
			"D": new Casa("D", linha),
			"E": new Casa("E", linha),
			"F": new Casa("F", linha),
			"G": new Casa("G", linha),
			"H": new Casa("H", linha)
		};
	}

	this.casas = function () {
		return tabuleiro;
	}

	this.inserirPeca = function (peca, linha, coluna) {
		tabuleiro[linha][coluna].peca(peca);
	}
}