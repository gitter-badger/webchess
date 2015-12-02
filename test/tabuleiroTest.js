describe("Tabuleiro Testes", function() {

	it("casas para tabuleiro vazio", function() {
		var tabuleiro = new Tabuleiro();
		var tabuleiroEsperado = {
			"8" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"7" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"6" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"5" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"4" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"3" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"2" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"1" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" }
		}

		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	it("casas para tabuleiro com peão na A2", function() {
		var tabuleiro = new Tabuleiro();
		var peao = new Peca("peao" ,"branca");
		var tabuleiroEsperado = {
			"8" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"7" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"6" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"5" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"4" : { "A": "casa-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"3" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" },
			"2" : { "A": "casa-branca peao-branca", "B": "casa-preta", "C": "casa-branca", "D": "casa-preta", "E": "casa-branca", "F": "casa-preta", "G": "casa-branca", "H": "casa-preta" },
			"1" : { "A": "casa-preta", "B": "casa-branca", "C": "casa-preta", "D": "casa-branca", "E": "casa-preta", "F": "casa-branca", "G": "casa-preta", "H": "casa-branca" }
		}
		tabuleiro.inserirPeca(peao,2,"A");
		expect(casasToString(tabuleiro.casas())).toEqual(tabuleiroEsperado);
	});

	function casasToString(casas) {
		var builder = {};
		for (var linha in casas){
			builder[linha] = {};
			for(var coluna in casas[linha]) {
				builder[linha][coluna] = casas[linha][coluna].classe();  	
			};
		};
		return builder;
	}
});