var gameTitle;
var gameOptions;

AmebaAdventures.MainMenu = function (game) {
};

AmebaAdventures.MainMenu.prototype = {

	create: function () {
		this.game.stage.backgroundColor = '#ffffff';
		gameTitle = game.add.text((game.world.width / 2), (game.world.height / 2) - 200, gameConfig.name, mainMenuConfig.mainTitleFontStyle);
		gameTitle.anchor.x = 0.5;

		var optionPos = {x: (game.world.width / 2), y: game.world.height / 2};

		for(var i = 0; i < mainMenuConfig.options.titles.length; i++) {
			gameOptions = game.add.text(optionPos.x, optionPos.y, mainMenuConfig.options.titles[i], mainMenuConfig.options.fontStyle);
			gameOptions.anchor.x = 0.5;
			optionPos.y += 50;
		}
	},

	play: function() {
		this.state.start('Game');
	},

	update: function () {

	}
};
