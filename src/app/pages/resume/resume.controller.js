(function() {
	'use strict';

	angular
		.module('personalSite.resume')
		.controller('ResumeController', ResumeController);

	ResumeController.$inject = ['EDUCATION'];

	function ResumeController(EDUCATION) {
    var vm = this;
	}
})();