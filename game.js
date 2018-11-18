//single global variable in the game
var game = {
	width: 640,
	height: 360,
	ctx: undefined,
	platform: undefined,
	ball: undefined,
	rows: 4,
	cols: 8,
	blocks: [],		
	sprites: {
		background: undefined,
		platform: undefined,
		ball: undefined,
		block: undefined
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
	create: function(){
		//level blocks
		for (var col=0, col < this.cols; col++) {
			this.blocks.push({
				x: 68 * col,
				y: 0,
				width: 64,
				height: 32
			});
		}
	},
	start: function(){
		this.init();
		this.load();
		this.create();		
		this.run();
	},
	render: function(){
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.drawImage(this.sprites.background, 0, 0);
		this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
		this.ctx.drawImage(this.sprites.ball, this.ball.width * this.ball.frame, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);				
		this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
	},
	run: function(){
		this.render();

		window.requestAnimationFrame(function(){
			game.run();
		});		
	}
};

game.ball = {
	width: 22,
	height: 22,
	frame: 0,
	X: 340,
	y: 278
};

game.platform = {
	X: 300,
	y: 300
};

// start point, checking page load
window.addEventListener("load", function(){
	game.start();
});
