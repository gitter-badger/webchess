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

		expect(tabuleiro.casas()).toEqual(tabuleiroEsperado);
	});

	it("casas de tabuleiro com um peao branco na A2", function() {
		var tabuleiro = new Tabuleiro();
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

		//expect(tabuleiro.casas()).toEqual(tabuleiroEsperado);
	});

});