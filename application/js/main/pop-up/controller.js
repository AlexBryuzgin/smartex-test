(function(){
	angular
		.module('app')
		.controller('PopUpController', PopUpController);

	PopUpController.$inject = ['$location','$scope','localStorageService', 'restService'];
	function PopUpController($location, $scope, localStorageService, restService){
		var vm = this;
		var id = localStorageService.get('userId');
		if(id == undefined || $location.path() != ('/' + id)) $location.path('/');
		vm.userData = {};
		restService.getData()
			.$promise
			.then(function(response){
 				vm.userData = response[id - 1];
			});
		vm.click = function(){
			$location.path('/')
		}
	}
}());