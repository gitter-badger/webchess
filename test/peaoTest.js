describe("Peão Testes", function() {

	it("verifica posições peão na A1", function() {
		var peao = new Peao("A", 1);
		expect(peao.getPosicoesPossiveis()).toEqual(["A", 2]);
	});

	it("verifica posições peão na A2", function() {
		var peao = new Peao("A", 2);
		expect(peao.getPosicoesPossiveis()).toEqual(["A", 3]);
	});
});
