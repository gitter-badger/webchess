describe("Tabuleiro Testes", function() {

	it("casas para tabuleiro vazio", function() {
		var tabuleiro = new Tabuleiro();
		var tabuleiroEsperado = {
			"8" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"7" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"6" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"5" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"4" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"3" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"2" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"1" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" }
		}

		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	it("casas para tabuleiro com peão branco na casa A2", function() {
		var tabuleiro = new Tabuleiro();
		tabuleiro.inserirPeca(new Peao("branco"), "A", 2);

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
		return linhas;
	}
});