const remote = require('electron').remote;

const electron = require('electron');

const {clipboard} = require('electron');

const ipc = electron.ipcRenderer;

ipc.on('menuFunction', function (event, arg) {
	switch(arg){
		case "newtab":
			addTab("homepage.html");
			break;
		case "closetab":
			removeTab($("#tabs div").index($("#tabs div.activeTab")));
			break;
		case "reload":
			$("#web webview.activeWeb")[0].reload();
			break;
		case "devtools":
			$("#web webview.activeWeb")[0].openDevTools();
			break;
		default:
			console.log("Error: menuFunction \"" + arg + "\" not found.");
			break;
	}
});