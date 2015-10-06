/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    "use strict";
	
	var CommandManager = brackets.getModule("command/CommandManager"),
		Menus = brackets.getModule("command/Menus"),
		PreferencesManager = brackets.getModule("preferences/PreferencesManager"),
		ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

	ExtensionUtils.loadStyleSheet(module, "fonts.css");
	
	var preferences = PreferencesManager.getPreferenceStorage("extensions.code-font"), 
		menu = Menus.addMenu("Font", "code-font", Menus.AFTER, Menus.AppMenuBar.VIEW_MENU);
	
	// the array of fonts
	var fonts = [["code-font.default","Default"],["code-font.open-sans","Open Sans"],["code-font.roboto","Roboto"],["code-font.droid-sans","Droid Sans"],["code-font.lato","Lato"],["code-font.droid-serif","Droid Serif"],["code-font.ubuntu","Ubuntu"],["code-font.raleway","Raleway"],["code-font.oxygen","Oxygen"],["code-font.shadows-into-light","Shadows Into Light"],["code-font.droid-sans-mono","Droid Sans Mono"],["code-font.share-tech-mono","Share Tech Mono"],["code-font.nova-mono","Nova Mono"],["code-font.roboto-mono","Roboto Mono"],["code-font.oxygen-mono","Oxygen Mono"]];

	// function that changes the font, the font name to change to is passed to the function
	function changeFont(font){
		
		$("#editor-holder").attr("class","");
				
		if(font === fonts[0][1]){
			//default don't do anything	
		}
		else if(font === fonts[1][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-open-sans");
		}else if(font === fonts[2][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-roboto");
		}
		else if(font === fonts[3][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-droid-sans");
		}
		else if(font === fonts[4][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-lato");
		}
		else if(font === fonts[5][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-droid-serif");
		}
		else if(font === fonts[6][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-ubuntu");
		}
		else if(font === fonts[7][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-raleway");
		}
		else if(font === fonts[8][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-oxygen");
		}
		else if(font === fonts[9][1]){
			$('body').append("<link href='http://fonts.googleapis.com/css?family=Shadows+Into+Light' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-shadows-into-light");
		}
		else if(font === fonts[10][1]){
			$('body').append("<link href='https://fonts.googleapis.com/css?family=Droid+Sans+Mono' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-droid-sans-mono");
		}
		else if(font === fonts[11][1]){
			$('body').append("<link href='https://fonts.googleapis.com/css?family=Share+Tech+Mono' rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-share-tech-mono");
		}
		else if(font === fonts[12][1]){
			$('body').append("<link href='https://fonts.googleapis.com/css?family=Nova+Mono'  rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-nova-mono");
		}
		else if(font === fonts[13][1]){
			$('body').append("<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:300'   rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-roboto-mono");
		}	
		else if(font === fonts[14][1]){
			$('body').append("<link href='https://fonts.googleapis.com/css?family=Oxygen+Mono'   rel='stylesheet' type='text/css'>");
			$("#editor-holder").addClass("code-font-oxygen-mono");
		}		
	}	
	
	//get the current saved font
	var selectedFont = preferences.getValue("selectedFont");
	
	// If there is no font selected, use default font
	if (selectedFont === undefined) {
		preferences.setValue("selectedFont", "Default");
		selectedFont = preferences.getValue("selectedFont");
		return;
	}
	
	//function to create each font menu item and it's command
	function createFontMenu(i){
		CommandManager.register(fonts[i][1], fonts[i][0] , function () {
			preferences.setValue("selectedFont", fonts[i][1]);
			selectedFont = preferences.getValue("selectedFont");
			changeFont(selectedFont);
		});
		menu.addMenuItem(fonts[i][0]);	
	}
	
	// loop through the array of fonts to create the menu
	for(var i=0; i < fonts.length; i++){
		createFontMenu(i);
	}
	
	//set the font on page load
	changeFont(selectedFont);

});
