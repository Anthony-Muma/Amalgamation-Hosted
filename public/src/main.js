import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";
import MainMenu from "./scenes/MainMenu.js";
import Join from "./scenes/Join.js";
import Lobby from "./scenes/Lobby.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#2e0101",
		dom: {
        	createContainer: true
    	},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("MainMenu", MainMenu);
	game.scene.add("Join", Join);
	game.scene.add("Lobby", Lobby);
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("MainMenu");
	}
}