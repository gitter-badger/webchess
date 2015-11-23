function Tabuleiro () {

	var colunas = ["8", "7", "6", "5", "4", "3", "2", "1"];
	var linhas = ["A", "B", "C", "D", "E", "F", "G", "H"];
	var tabuleiro = criarTabuleiro();

	function criarTabuleiro() {
		var tabuleiro = {};
		colunas.forEach(function (coluna) {
			tabuleiro[coluna] = criarLinhas(coluna);
		});
		return tabuleiro;
	};

	function criarLinhas(coluna) {
		var casas = {};
		linhas.forEach(function (linha) {
			casas[linha] = new Casa(coluna, linha);
		});
		return casas;
	};

	this.casas = function () {
		return tabuleiro;
	}

	this.inserirPeca = function (peca, coluna, linha) {
		tabuleiro[coluna][linha].peca(peca);
	};

	this.colunas = function () {
		return colunas;
	}
};