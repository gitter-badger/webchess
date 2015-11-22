angular.module("tabuleiro", []);
angular.module("tabuleiro").controller("tabuleiroController", function ($scope) {
	$scope.tabuleiro = new Tabuleiro();
});
