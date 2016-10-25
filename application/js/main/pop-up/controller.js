(function(){
	angular
		.module('app')
		.controller('PopUpController', PopUpController);

	PopUpController.$inject = ['$location', '$state','$scope','localStorageService', 'restService'];
	function PopUpController($location, $state, $scope, localStorageService, restService){
		var vm = this;
		var id = $location.path().slice(6);
		console.log(id)
		// id.slice(1);
		// console.log(id);
		vm.userData = {};
		restService.getData()
			.$promise
			.then(function(response){
 				vm.userData = response[id - 1];
			});
		vm.click = function(){
			$state.go('main')
		}
	}
}());