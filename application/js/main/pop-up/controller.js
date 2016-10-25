(function(){
	angular
		.module('app')
		.controller('PopUpController', PopUpController);

	PopUpController.$inject = ['$location','$scope','localStorageService', 'restService'];
	function PopUpController($location, $scope, localStorageService, restService){
		var vm = this;
		var id = $location.path().slice(1);
		// id.slice(1);
		// console.log(id);
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