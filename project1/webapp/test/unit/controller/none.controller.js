/*global QUnit*/

sap.ui.define([
	"logaligroup/project1/controller/none.controller"
], function (Controller) {
	"use strict";

	QUnit.module("none Controller");

	QUnit.test("I should test the none controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
