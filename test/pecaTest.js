describe("Peça Testes", function() {

	it("classe para peão branco", function() {
		var peao = new Peca("peao", "branco");
		expect(peao.classe()).toEqual("peao-branco");
	});

	it("classe para peão preto", function() {
		var peao = new Peca("peao", "branco");
		expect(peao.classe()).toEqual("peao-branco");
	});
});
