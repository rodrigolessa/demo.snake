// Classe do personagem principal do jogo

function snake() {

	var self = this;

	// Posição inicial da cobra no canto superior esquerdo da Canvas
	self.posX = 0;
	self.posY = 0;

	// Atribui o valor "um" para iniciar o movimento e manter sempre continuo
	self.speedX = 1;
	self.speedY = 0;

	self.head = function() {
		// Desenha em CANVAS um retangulo 10 x 10 na posição indicada por X e Y
		rect(self.posX, self.posY, dim, dim);
		// Determina a cor para o retangulo
		fill(255);
	};

	self.positionUpdate = function() {
		// Mantem o movimento horizontal e vertical sempre continuo
		self.posX = self.posX + self.speedX * dim;
		self.posY = self.posY + self.speedY * dim;

		self.posX = constrain(self.posX, 0, width - dim);
		self.posY = constrain(self.posY, 0, height - dim);
	};

	self.direction = function(x, y) {
		self.speedX = x;
		self.speedY = y;
	}

}