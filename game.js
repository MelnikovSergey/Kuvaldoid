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

		// start point, checking page load
		window.addEventListener("keydown", function(e){
			if (e.keyCode == 37) {
				// left key
				game.platform.dx = -game.platform.velocity; 
			} else if (e.keyCode == 39) { 
				// right key	
				game.platform.dx = game.platform.velocity; 
			} else if (e.keyCode == 32) { 
				// space bar key	
				game.platform.releaseBall(); 
			}	
		});
		window.addEventListener("keyup", function(e){
			game.platform.stop();
		});
	},
	load: function() {
		for (var key in this.sprites) {
			this.sprites[key] = new Image();
			this.sprites[key].src = 'images/' + key + '.png';
		}
	},
	create: function(){
		//level blocks
		for (var row=0, row < this.rows; row++) {
			for (var col=0, col < this.cols; col++) {
				this.blocks.push({
					x: 68 * col + 50,
					y: 38 * row + 35,
					width: 64,
					height: 32
				});
			}
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
		
		this.blocks.forEach(function(element){
			this.ctx.drawImage(this.sprites.block, element.x, element.y);
		}, this);
	},
	update: function(){
		if (this.platform.dx) {
			this.platform.move();
		},	
		if (this.ball.dx || this.ball.dy) {
			this.ball.move();
		}				
	},
	run: function(){
		this.update();
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
	y: 278,
	dx: 0,
	dy: 0,
	velocity: 3,
	jump: function(){
		this.dx = -this.velocity;		
		this.dy = -this.velocity;
	},
	move: function() {
		this.x += this.dx;
		this.y += this.dy;		
	}	
};

game.platform = {
	X: 300,
	y: 300,
	velocity: 6,
	dx: 0,
	ball: game.ball,
	releaseBall: function() {
		if(this.ball) {
			this.ball.jump();
			this.ball = false;
		}
	},
	move: function() {
		this.x += this.dx;

		if (this.ball) {
			this.ball.x += this.dx;
		}
	},
	stop: function(){
		this.dx = 0;

		if (this.ball) {
			this.ball.dx = 0;
		}
	}
};

// start point, checking page load
window.addEventListener("load", function(){
	game.start();
});
