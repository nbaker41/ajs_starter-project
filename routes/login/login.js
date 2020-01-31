(function () {

	let login = angular.module(
		"login", [
		]);

	login.config(function ($stateProvider) {
		$stateProvider.state(
			'login', {
				url: '/login',
				templateUrl: '/routes/login/login.html',
				controller: "loginCtrl",
				controllerAs: "login"
			})
	});

	login.controller(
	"loginCtrl",
	function ($scope, $stateParams) {
	// this.app = $scope.$parent.app;
	var login = this;

		login.sample = function(x){
			alert(x);
		}

		// login.sample("")
	});


})();