// Objeto Cobra e dimensão que ele deve possuir

var s;
var dim = 15;

// Setup e Draw, são duas funções obrigatórias do framework p5.js
// https://p5js.org/tutorials/

// Inicia as funções de tela

function setup() {
	// Cria a tag CANVAS
	createCanvas(800, 800);
	// Determina a velocidade do movimento da cobra
	frameRate(10);

	s = new snake();
	
}

function draw() {
	// Determina a cor para CANVAS
	background(80);

	s.positionUpdate();
	s.head();
}

// Função que identifica as teclas utilizadas

function keyPressed() {

	if (keyCode == UP_ARROW){
		s.direction(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.direction(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.direction(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.direction(-1, 0);
	}

}