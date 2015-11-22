describe("Casa Testes", function() {

	it("classe para casa na A1", function() {
		var casa = new Casa(1, "A");
		expect(casa.classe()).toEqual("casa preta");
	});

	it("classe para casa na A2", function() {
		var casa = new Casa(1, "B");
		expect(casa.classe()).toEqual("casa branca");
	});

	it("classe para casa na B1", function() {
		var casa = new Casa(2, "A");
		expect(casa.classe()).toEqual("casa branca");
	});

	it("classe para casa na B2", function() {
		var casa = new Casa(2, "B");
		expect(casa.classe()).toEqual("casa preta");
	});

	it("classe para casa na A2 com peão branco", function() {
		var casa = new Casa(2, "A");

		casa.peca(new Peca("peao", "branco"));

		expect(casa.classe()).toEqual("casa branca peao-branco");
	});

	it("classe para casa na A7 com peão preto", function() {
		var casa = new Casa(7, "A");

		casa.peca(new Peca("peao", "preto"));

		expect(casa.classe()).toEqual("casa preta peao-preto");
	});
});