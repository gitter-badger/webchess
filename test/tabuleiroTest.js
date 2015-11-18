describe("Tabuleiro Testes", function() {

	it("casas de tabuleiro vazio", function() {
		var tabuleiro = new Tabuleiro();
		var tabuleiroEsperado = {
			"A" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"B" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ],
			"C" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"D" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ],
			"E" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"F" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ],
			"G" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"H" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ]
		}

		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	it("casas de tabuleiro com peão branco na A2", function() {
		var tabuleiro = new Tabuleiro();
		tabuleiro.adicionaPeca(new Peao("A", 2, "branco"), "A", 2);

		var tabuleiroEsperado = {
			"A" : [ "casa-preta", "casa-branca peao-branco", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"B" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ],
			"C" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"D" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ],
			"E" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"F" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ],
			"G" : [ "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca" ],
			"H" : [ "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta", "casa-branca", "casa-preta" ]
		}

		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	function casasToString(casas) {
		var casasString = {};
		for (var coluna in casas) {
			var linhas = [];
			for (var linha in casas[coluna])
				
				linhas.push(casas[coluna][linha].toString());
			casasString[coluna] = linhas;
		}
		return casasString;
	}
});