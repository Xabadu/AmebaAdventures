AmebaAdventures.MainMenu = function (game) {
};

AmebaAdventures.MainMenu.prototype = {

	create: function () {
		this.game.stage.backgroundColor = '#ffffff';
	},

	play: function() {
		this.state.start('Game');
	},

	update: function () {

	}
};
