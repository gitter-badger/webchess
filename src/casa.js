function Casa (linha, coluna, cor) {

	var cor = cor;

	var getCor = function () {
		return cor;
	}

	var getClasse = function () {
		return "casa " + cor;
	}

	this.getCor = getCor;
	this.getClasse = getClasse;
}