//single global variable in the game
var game = {
	ctx: undefined,
	sprites: {
		background: undefined,
		platform: undefined
	},
	start: function(){
		var canvas = document.getElementById("gameArea");
		this.ctx = canvas.getContext("2d");

		this.sprites.background = new Image();
		this.sprites.background.src = 'images/background.png';

		this.sprites.platform = new Image();
		this.sprites.platform.src = 'images/platform.png';		

		this.run();
	},
	render: function(){
		this.ctx.drawImage(this.sprites.background, 0, 0);
		this.ctx.drawImage(this.sprites.platform, 0, 0);		
	},
	run: function(){
		this.render();

		window.requestAnimationFrame(function(){
			game.run();
		});		
	}
};

// start point, checking page load
window.addEventListener("load", function(){
	game.start();
});
