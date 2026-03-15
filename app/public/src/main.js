import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";
import MainMenu from "./scenes/MainMenu.js";
import Join from "./scenes/Join.js";
import Lobby from "./scenes/Lobby.js";
import NetworkUI from "./scenes/NetworkUI.js";
import TargetingScene from "./scenes/TargetingScene.js";
import AttackUI from "./scenes/AttackUI.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		// width: 1600,
		// height: 900,
		autoFocus: false,
		forceSetTimeOut: true, // use setTimeout instead of RAF
		type: Phaser.AUTO,
        backgroundColor: "#2e0101",
		parent: "game-container",
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
	game.scene.add("NetworkUI", NetworkUI);
	game.scene.add("TargetingScene", TargetingScene);
	game.scene.add("AttackUI", AttackUI);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}