var platforms;
var ameba;
var cursors;
var ground;

AmebaAdventures.Game = function(game) {

};

AmebaAdventures.Game.prototype = {
	create: function() {
	    game.physics.startSystem(Phaser.Physics.ARCADE);
		
	    platforms = game.add.group();
	    platforms.enableBody = true;

        for(var i = 0; i < game.world.width; i+=70) {
        	ground = platforms.create(i, game.world.height - 64, 'grassGround');
        	ground.body.immovable = true;
        } 

		ameba = game.add.sprite(32, game.world.height - 128, 'ameba');
		game.physics.arcade.enable(ameba);

		ameba.body.bounce.y = 0.2;
		ameba.body.gravity.y = 300;
		ameba.body.collideWorldBounds = true;

		ameba.animations.add('walk', '', 16);

	    cursors = game.input.keyboard.createCursorKeys();
	},

	update: function() {
	    game.physics.arcade.collide(ameba, platforms);

	    ameba.body.velocity.x = 0;

	    if(cursors.left.isDown) {
	        ameba.body.velocity.x = -150;
	    } else if(cursors.right.isDown) {
	    	ameba.body.velocity.x = 150;
	    	ameba.animations.play('walk');
	    } else {
	    	ameba.animations.stop();
	    	ameba.frame = 0;
	    }

	    if(cursors.up.isDown && ameba.body.touching.down) {
	    	ameba.body.velocity.y = -350;
	    }

	},

	quitGame: function(pointer) {
		this.state.start('MainMenu');
	},

	render: function() {
		

	},

	renderGroup: function(member) {
		this.game.debug.body(member);
	},
};
