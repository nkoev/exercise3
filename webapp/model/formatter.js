sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
			case "Available":
				return resourceBundle.getText("Yahoooo");
			case "Unavailable":
				return resourceBundle.getText("Uhhhh");
			default:
				return sStatus;
			}
		}
	};
});