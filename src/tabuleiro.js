function Tabuleiro () {

	var tabuleiro = {
		"8" : linhasDaColuna("8"),
		"7" : linhasDaColuna("7"),
		"6" : linhasDaColuna("6"),
		"5" : linhasDaColuna("5"),
		"4" : linhasDaColuna("4"),
		"3" : linhasDaColuna("3"),
		"2" : linhasDaColuna("2"),
		"1" : linhasDaColuna("1")
	}

	function linhasDaColuna(coluna) {
		return {
			"A" : new Casa(coluna, "A"),
			"B" : new Casa(coluna, "B"),
			"C" : new Casa(coluna, "C"),
			"D" : new Casa(coluna, "D"),
			"E" : new Casa(coluna, "E"),
			"F" : new Casa(coluna, "F"),
			"G" : new Casa(coluna, "G"),
			"H" : new Casa(coluna, "H")
		}
	}

	this.casas = function () {
		return tabuleiro;
	}

	this.inserirPeca = function (peca, coluna, linha) {
		tabuleiro[coluna][linha].peca(peca);
	}
}