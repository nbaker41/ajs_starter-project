(function () {

	let xxxxxxxx = angular.module("app", [
	// modules
		"ui.router",
     //routes
          "login",
	//components
		"keyboard",
	]);

	xxxxxxxx.config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
	});

	xxxxxxxx.controller(
	"appCtrl",
	function ($scope, $transitions) {
	// this.example = "Hello from AJS";
	let app = this;

          app.example = "hello World";

	// transitions
		// $transitions.onSuccess({}, function($transition){
		// 	app.route = {};
		// 	app.route.from = $transition.$from().name;
		// 	app.route.to = $transition.$to().name;
		// 	app.route.params = $transition.params().name;

		// 	app.pageClass = app.route.to;
		// });


     // routes
          // app.routes = [
          //      {
          //           "name": "Home",
          //           "route": "home"
          //      },
          //      {
          //           "name": "Home",
          //           "route": "home"
          //      }
          // ];

     });

})();