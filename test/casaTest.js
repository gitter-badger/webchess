describe("Casa Testes", function() {

	it("cria uma casa A1", function() {
		var casa = new Casa("A", 1);
		expect(casa.cor()).toEqual("Preta");
	});

	it("cria uma casa A2", function() {
		var casa = new Casa("A", 2);
		expect(casa.cor()).toEqual("Branca");
	});

	it("cria uma casa B1", function() {
		var casa = new Casa("B", 1);
		expect(casa.cor()).toEqual("Branca");
	});

	it("cria uma casa B2", function() {
		var casa = new Casa("B", 2);
		expect(casa.cor()).toEqual("Preta");
	});
});