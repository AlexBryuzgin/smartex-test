(function(){
	angular
		.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'LocalStorageModule'])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/main');
			$stateProvider
				.state('main', {
					url:'/main',
					templateUrl: '/application/js/main/index.html',
					controller: 'MainPageController',
					controllerAs: 'vm'
				})
				.state('main.id', {
					url:'/:userId',
					templateUrl: '/application/js/main/pop-up/index.html',
					controller: 'PopUpController',
					controllerAs: 'vm'
				})
		})
		.config(function(localStorageServiceProvider){
        	localStorageServiceProvider
        		.setPrefix('lombard')
        		.setStorageType('localStorage')
        		.setDefaultToCookie(true)
        })
}());