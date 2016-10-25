(function(){
	angular
		.module('app')
		.controller('MainPageController', MainPageController);

	MainPageController.$inject = ['$scope', '$rootScope', '$state', 'restService', 'localStorageService'];
	function MainPageController($scope, $rootScope, $state, restService, localStorageService){
		var vm = this;
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
			$state.go('main.id', {userId: id});	
		};
	}
}());