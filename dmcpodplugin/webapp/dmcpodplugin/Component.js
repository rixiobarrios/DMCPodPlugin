sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("vendor.ext.podplugins.dmcpodplugin.dmcpodplugin.Component", {
		metadata: {
			manifest: "json"
		}
	});
});