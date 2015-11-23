angular.module("tabuleiro", []);
angular.module("tabuleiro").controller("tabuleiroController", function ($scope) {
	var tabuleiro = new Tabuleiro()

	tabuleiro.inserirPeca(new Peca("peao", "branco"), 2, "A");

	$scope.casas = tabuleiro.casas();
	$scope.colunas = tabuleiro.colunas();
});
