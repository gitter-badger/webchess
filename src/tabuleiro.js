function Tabuleiro () {

	var tabuleiro = {
		"A" : linhasDaColuna("A"),
		"B" : linhasDaColuna("B"),
		"C" : linhasDaColuna("C"),
		"D" : linhasDaColuna("D"),
		"E" : linhasDaColuna("E"),
		"F" : linhasDaColuna("F"),
		"G" : linhasDaColuna("G"),
		"H" : linhasDaColuna("H")
	}

	function linhasDaColuna(coluna) {
		return [
			new Casa(coluna, 1),
			new Casa(coluna, 2),
			new Casa(coluna, 3),
			new Casa(coluna, 4),
			new Casa(coluna, 5),
			new Casa(coluna, 6),
			new Casa(coluna, 7),
			new Casa(coluna, 8)
		];
	}

	this.casas = function () {
		return tabuleiro;
	}

	this.adicionaPeca = function (peca, linha, coluna) {
		tabuleiro[linha][coluna-1].peca(peca);
	}
}