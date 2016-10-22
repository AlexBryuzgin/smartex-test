(function(){
	angular
		.module('app', ['ngRoute', 'ngResource', 'ngAnimate', 'LocalStorageModule'])
		.config(function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: '/application/js/main/index.html',
					controller: 'MainPageController',
					controllerAs: "vm"
				})
		})
		.config(function(localStorageServiceProvider){
        	localStorageServiceProvider
        		.setPrefix('lombard')
        		.setStorageType('localStorage')
        		.setDefaultToCookie(true)
        })
}());