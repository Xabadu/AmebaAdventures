var game = new Phaser.Game(config.safeZoneWidth, config.safeZoneHeight, Phaser.AUTO, 'game');

game.state.add('Boot', AmebaAdventures.Boot);
game.state.add('Preloader', AmebaAdventures.Preloader);
game.state.add('MainMenu', AmebaAdventures.MainMenu);
game.state.add('Game', AmebaAdventures.Game);

game.state.start('Boot');