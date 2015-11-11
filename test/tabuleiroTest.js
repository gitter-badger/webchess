describe("Tabuleiro Testes", function() {

	it("casas do tabuleiro", function() {
		var tabuleiro = new Tabuleiro();
		expect(tabuleiro.casas()).toEqual([]);
	});
});