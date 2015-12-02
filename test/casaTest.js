describe("Casa Testes", function() {

	it("classe para casa na A1", function() {
		var casa = new Casa("A", 1);
		expect(casa.classe()).toEqual("casa-preta");
	});

	it("classe para casa na A2", function() {
		var casa = new Casa("A", 2);
		expect(casa.classe()).toEqual("casa-branca");
	});

	it("classe para casa na B1", function() {
		var casa = new Casa("B", 1);
		expect(casa.classe()).toEqual("casa-branca");
	});

	it("classe para casa na B2", function() {
		var casa = new Casa("B", 2);
		expect(casa.classe()).toEqual("casa-preta");
	});

	it("classe para casa na A2 com peão branco", function() {
		var casa = new Casa("A", 2);

		casa.peca(new Peca("peao", "branca"));

		expect(casa.classe()).toEqual("casa-branca peao-branca");
	});

	it("classe para casa na A2 com peão preto", function() {
		var casa = new Casa("A", 2);

		casa.peca(new Peca("peao", "preta"));

		expect(casa.classe()).toEqual("casa-branca peao-preta");
	});	
});