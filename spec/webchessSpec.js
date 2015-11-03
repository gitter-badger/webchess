describe("Xadrez", function() {

  it("verifica posições peao A1", function() {
  	var peao = new Peao("A", 1);
    expect(peao.getPosicoesPossiveis()).toEqual(["A", 2]);
  });

    it("verifica posições peao A2", function() {
  	var peao = new Peao("A", 2);
    expect(peao.getPosicoesPossiveis()).toEqual(["A", 3]);
 	});

});
