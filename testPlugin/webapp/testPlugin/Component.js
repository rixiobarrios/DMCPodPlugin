sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("vendor.ext.podplugin.testPlugin.testPlugin.Component", {
		metadata: {
			manifest: "json"
		}
	});
});