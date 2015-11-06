describe("Casa Testes", function() {

	it("cria casa A1", function() {
		var casaA1 = new Casa("A", 1, "preta");
		expect(casaA1.getCor()).toEqual("preta");
		expect(casaA1.getClasse()).toEqual("casa preta");
	});
});
