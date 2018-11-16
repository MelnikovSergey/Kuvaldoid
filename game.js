//single global variable in the game
var game = {
	start: function(){
		ctx: undefined;
		sprites: {
			background: undefined;
		},
		var canvas = document.getElementById('gameArea');
		this.ctx = canvas.getContext('2d');

		this.sprites.background = new Image();
		this.sprites.background.src = 'images/background.png';

		window.requestAnimationFrame(function(){

		})
	},
	render: function(){
		this.ctx.drawImage(this.sprites.background, 0, 0)
	},
};

// start point, checking page load
window.addEventListener("load", function(){
	game.start();
});
