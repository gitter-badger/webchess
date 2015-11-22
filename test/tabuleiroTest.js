describe("Tabuleiro Testes", function() {

	it("casas para tabuleiro vazio", function() {
		var tabuleiro = new Tabuleiro();
		var tabuleiroEsperado = {
			"8" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"7" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" },
			"6" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"5" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" },
			"4" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"3" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" },
			"2" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"1" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" }
		}

		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	it("casas para tabuleiro com peão branco na casa A2", function() {
		var tabuleiro = new Tabuleiro();
		tabuleiro.inserirPeca(new Peca("peao", "branco"), 2, "A");

		var tabuleiroEsperado = {
			"8" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"7" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" },
			"6" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"5" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" },
			"4" : { "A": "casa branca", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"3" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" },
			"2" : { "A": "casa branca peao-branco", "B": "casa preta", "C": "casa branca", "D": "casa preta", "E": "casa branca", "F": "casa preta", "G": "casa branca", "H": "casa preta" },
			"1" : { "A": "casa preta", "B": "casa branca", "C": "casa preta", "D": "casa branca", "E": "casa preta", "F": "casa branca", "G": "casa preta", "H": "casa branca" }
		}

		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	function casasToString(casas) {
		var casasString = {};
		for (var coluna in casas) {
			var linhas = {
				"A": casas[coluna]["A"].classe(),
				"B": casas[coluna]["B"].classe(),
				"C": casas[coluna]["C"].classe(),
				"D": casas[coluna]["D"].classe(),
				"E": casas[coluna]["E"].classe(),
				"F": casas[coluna]["F"].classe(),
				"G": casas[coluna]["G"].classe(),
				"H": casas[coluna]["H"].classe()
			};
			casasString[coluna] = linhas;
		}
		return casasString;
	}
});