(function(){
	angular
		.module('app')
		.controller('MainPageController', MainPageController);

	MainPageController.$inject = ['$scope', '$rootScope', '$location', 'restService', 'localStorageService'];
	function MainPageController($scope, $rootScope, $location, restService, localStorageService){
		var vm = this;
		vm.localId = null;
		//get data from API
		vm.users = [];
		restService.getData()
		.$promise
		.then(function(response){
			vm.users = response;
			console.log(vm.users);
		});
		//show detalisation
		vm.goto = function(id){
			var path = '/' + id;
			$location.path(path);
			localStorageService.set('userId', id);			
		};
	}
}());