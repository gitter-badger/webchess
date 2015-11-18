describe("Casa Testes", function() {

	it("cria uma casa A1", function() {
		var casa = new Casa("A", 1);
		expect(casa.toString()).toEqual("casa-preta");
	});

	it("cria uma casa A2", function() {
		var casa = new Casa("A", 2);
		expect(casa.toString()).toEqual("casa-branca");
	});

	it("cria uma casa B1", function() {
		var casa = new Casa("B", 1);
		expect(casa.toString()).toEqual("casa-branca");
	});

	it("cria uma casa B2", function() {
		var casa = new Casa("B", 2);
		expect(casa.toString()).toEqual("casa-preta");
	});

	it("move peao branco para casa A2", function() {
		var casa = new Casa("A", 2);
		var peaoBranco = new Peao("A", 2, "branco");

		casa.peca(peaoBranco);
		expect(casa.toString()).toEqual("casa-branca peao-branco");
	});

	it("move peao preto para casa A2", function() {
		var casa = new Casa("A", 2);
		var peaoBranco = new Peao("A", 2, "preto");

		casa.peca(peaoBranco);
		expect(casa.toString()).toEqual("casa-branca peao-preto");
	});	
});