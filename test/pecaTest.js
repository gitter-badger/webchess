describe("Peão Testes", function() {

	it("classe para peão branco", function() {
		var peao = new Peca("peao", "branca");
		expect(peao.classe()).toEqual("peao-branca");
	});

	it("classe para peão preto", function() {
		var peao = new Peca("peao" ,"branca");
		expect(peao.classe()).toEqual("peao-branca");
	});
});
