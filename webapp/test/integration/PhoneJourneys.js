jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sample/office/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sample/office/test/integration/pages/App",
	"com/sample/office/test/integration/pages/Browser",
	"com/sample/office/test/integration/pages/Master",
	"com/sample/office/test/integration/pages/Detail",
	"com/sample/office/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sample.office.view."
	});

	sap.ui.require([
		"com/sample/office/test/integration/NavigationJourneyPhone",
		"com/sample/office/test/integration/NotFoundJourneyPhone",
		"com/sample/office/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});