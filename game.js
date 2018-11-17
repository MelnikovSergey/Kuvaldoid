//single global variable in the game
var game = {
	width: 640,
	height: 360,
	ctx: undefined,
	sprites: {
		background: undefined,
		platform: undefined
	},
	init: function() {
		var canvas = document.getElementById("gameArea");
		this.ctx = canvas.getContext("2d");
	},
	load: function() {
		this.sprites.background = new Image();
		this.sprites.background.src = 'images/background.png';

		this.sprites.platform = new Image();
		this.sprites.platform.src = 'images/platform.png';			
	},
	start: function(){
		this.run();
	},
	render: function(){
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.drawImage(this.sprites.background, 0, 0);
		this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);		
	},
	run: function(){
		this.render();

		window.requestAnimationFrame(function(){
			game.run();
		});		
	}
};

game.platform = {
	X: 300,
	y: 300,
}

// start point, checking page load
window.addEventListener("load", function(){
	game.start();
});
