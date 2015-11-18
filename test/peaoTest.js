describe("Peão Testes", function() {

	it("verifica posições peão na A1", function() {
		var peao = new Peao("A", 1);
		expect(peao.getPosicoesPossiveis()).toEqual(["A2"]);
	});

	it("verifica posições peão na A2", function() {
		var peao = new Peao("A", 2);
		expect(peao.getPosicoesPossiveis()).toEqual(["A3"]);
	});

	it("toString peão branco na A2", function() {
		var peao = new Peao("A", 2, "branco");
		expect(peao.toString()).toEqual("peao-branco");
	});
});
