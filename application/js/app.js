(function(){
	angular
		.module('app', ['ngRoute', 'ngResource', 'ngAnimate'])
		.config(function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: '/application/js/main/index.html',
					controller: 'MainPageController',
					controllerAs: "vm"
				})
		})
}());