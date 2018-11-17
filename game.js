//single global variable in the game
var game = {
	width: 640,
	height: 360,
	ctx: undefined,
	platform: undefined,
	ball: undefined,		
	sprites: {
		background: undefined,
		platform: undefined,
		ball: undefined
	},
	init: function() {
		var canvas = document.getElementById("gameArea");
		this.ctx = canvas.getContext("2d");
	},
	load: function() {
		for (var key in this.sprites) {
			this.sprites[key] = new Image();
			this.sprites[key].src = 'images/' + key + '.png';
		}
	},
	start: function(){
		this.init();
		this.load();
		this.run();
	},
	render: function(){
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.drawImage(this.sprites.background, 0, 0);
		this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
		this.ctx.drawImage(this.sprites.ball, this.ball.x, this.ball.y);				
	},
	run: function(){
		this.render();

		window.requestAnimationFrame(function(){
			game.run();
		});		
	}
};

game.ball = {
	X: 340,
	y: 270
};

game.platform = {
	X: 300,
	y: 300
};

// start point, checking page load
window.addEventListener("load", function(){
	game.start();
});
