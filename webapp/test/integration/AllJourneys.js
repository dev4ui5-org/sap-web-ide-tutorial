jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ZCPDB_OFFICE_TP in the list
// * All 3 ZCPDB_OFFICE_TP have at least one to_Workstation

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sample/office/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sample/office/test/integration/pages/App",
	"com/sample/office/test/integration/pages/Browser",
	"com/sample/office/test/integration/pages/Master",
	"com/sample/office/test/integration/pages/Detail",
	"com/sample/office/test/integration/pages/Create",
	"com/sample/office/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sample.office.view."
	});

	sap.ui.require([
		"com/sample/office/test/integration/MasterJourney",
		"com/sample/office/test/integration/NavigationJourney",
		"com/sample/office/test/integration/NotFoundJourney",
		"com/sample/office/test/integration/BusyJourney",
		"com/sample/office/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});